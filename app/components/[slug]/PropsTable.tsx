export function PropsTable({ props }: { props: any }) {
  return (
    <table className="w-full border rounded-lg text-sm">
      <thead className="bg-muted">
        <tr>
          <th className="text-left p-2">Prop</th>
          <th className="text-left p-2">Tipo</th>
          <th className="text-left p-2">Descripción</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(props).map(([name, prop]: any) => (
          <tr key={name} className="border-t">
            <td className="p-2 font-mono">{name}</td>
            <td className="p-2 text-muted-foreground">
              {prop.type}
            </td>
            <td className="p-2">{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
