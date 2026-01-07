'use client';

import { cn } from '@/packages/ui-library/src/utils/cn';

type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        'rounded-xl bg-neutral-900 text-neutral-100',
        'p-5 text-sm leading-relaxed',
        'overflow-x-auto'
      )}
    >
      <code>{code}</code>
    </pre>
  );
}
