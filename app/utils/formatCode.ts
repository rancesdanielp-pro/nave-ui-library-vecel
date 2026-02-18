import prettier from 'prettier/standalone';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';
import typescriptPlugin from 'prettier/plugins/typescript';

function normalizeCodeInput(code: unknown): string {
  if (typeof code === 'string') return code;
  try {
    return JSON.stringify(code, null, 2);
  } catch {
    return String(code);
  }
}

function safeIndent(code: string) {
  return code
    .replace(/\t/g, '  ')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.trimEnd())
    .join('\n')
    .trim();
}

function wrapIfFragment(code: string) {
  const trimmed = code.trim();

  // pattern: prop: Type { ... }
  const typedObjectMatch = trimmed.match(
    /^([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>\[\]]+)\s*\{([\s\S]*)\}$/
  );

  if (typedObjectMatch) {
    const [, name, type, body] = typedObjectMatch;
    return {
      wrapped: `const __doc: ${type} = {${body}};`,
      unwrap: true,
      unwrapPrefix: `${name}: `,
    };
  }

  // pattern: prop: Type[]
  const typedArrayMatch = trimmed.match(
    /^([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>\[\]]+)\s*\[([\s\S]*)\]$/
  );

  if (typedArrayMatch) {
    const [, name, type, body] = typedArrayMatch;
    return {
      wrapped: `const __doc: ${type} = [${body}];`,
      unwrap: true,
      unwrapPrefix: `${name}: `,
    };
  }

  // JSON object
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    return { wrapped: `const __doc = ${trimmed};`, unwrap: true };
  }

  // Array
  if (trimmed.startsWith('[')) {
    return { wrapped: `const __doc = ${trimmed};`, unwrap: true };
  }

  return { wrapped: code, unwrap: false };
}

export async function formatCode(
  rawCode: unknown,
  lang: 'js' | 'ts' | 'tsx' | 'json' = 'ts'
): Promise<string> {
  const code = normalizeCodeInput(rawCode);

  try {
    const parserMap = {
      js: 'babel',
      ts: 'typescript',
      tsx: 'typescript',
      json: 'babel',
    } as const;

    const { wrapped, unwrap } = wrapIfFragment(code);

    const formatted = await prettier.format(wrapped, {
      parser: parserMap[lang],
      plugins: [babelPlugin, estreePlugin, typescriptPlugin],
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5',
      printWidth: 80,
      bracketSpacing: true,
    });

    if (unwrap) {
      return formatted
        .replace(/^const __doc(:\s*[a-zA-Z0-9_<>\[\]]+)?\s*=\s*/, '')
        .replace(/;$/, '')
        .trim();
    }

    return formatted;
  } catch (err) {
    console.warn('Prettier fallback mode:', err);
    return safeIndent(code);
  }
}
