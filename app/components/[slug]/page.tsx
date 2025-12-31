import { GeneratorComponent } from '@/app/generator/generator-component';
import registry from '@/packages/ui-library/src/registry/registry.json';
import { DynamicRenderer } from './dynamic-renderer';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const component = (registry as any)[slug];

  if (!component) {
    return <div>Component not found</div>;
  }

  return (
    <div className="space-y-6">
      {/* Row: Props + Preview */}
      <div className="grid grid-cols-3 gap-6 rounded-xl">
        {/* Props */}
        {/* @ts-ignore 
        <div className="border  border-gray-400 rounded-xl p-4">
          <GeneratorComponent slug={slug} />
        </div>
        */}
        {/* Preview */}
        {/* @ts-ignore 
        <div className="col-span-2 border rounded-xl border-gray-400 rounded p-6 bg-muted">
          <DynamicRenderer slug={slug} />
        </div>
        */}
      </div>

      {/* Registry JSON abajo */}
      <div className="border rounded-xl bg-[#0B0F14] text-[#8BFF9F] p-4 overflow-auto text-xs font-mono max-h-[400px]">
        <pre>{JSON.stringify(component, null, 2)}</pre>
      </div>
    </div>
  );
}
