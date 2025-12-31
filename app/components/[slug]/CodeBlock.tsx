export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
}
