'use client';

import { useEffect, useState } from 'react';
import { formatCode } from '@/app/utils/formatCode';
import { cn } from '@/packages/ui-library/src/utils/cn';

type CodeBlockProps = {
  code: string;
  lang?: 'js' | 'ts' | 'tsx' | 'json';
};

export function CodeBlock({ code, lang = 'ts' }: CodeBlockProps) {
  const [formatted, setFormatted] = useState<string>(code);

  useEffect(() => {
    let mounted = true;

    formatCode(code, lang).then((res) => {
      if (mounted) setFormatted(res);
    });

    return () => {
      mounted = false;
    };
  }, [code, lang]);

  return (
    <pre
      className={cn(
        'rounded-xl bg-neutral-900 text-neutral-100',
        'p-5 text-sm leading-relaxed',
        'overflow-x-auto'
      )}
    >
      <code>{formatted}</code>
    </pre>
  );
}
