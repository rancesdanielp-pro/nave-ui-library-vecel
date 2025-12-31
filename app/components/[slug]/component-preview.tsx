export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border p-6 bg-background">
      {children}
    </div>
  );
}