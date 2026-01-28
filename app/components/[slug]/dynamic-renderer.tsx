'use client';

import registry from '@/packages/ui-library/src/registry/registry.json';
import * as UILib from '@/packages/ui-library/dist/react';
import { usePlayground } from '@/app/playground/PlaygroundStore';

const BOOLEAN_HTML = new Set([
  'disabled',
  'checked',
  'open',
  'hidden',
  'required',
  'readOnly',
  'multiple',
  'selected',
]);

export function DynamicRenderer({ slug }: { slug: string }) {
  const rawProps = usePlayground((s: { props: any; }) => s.props);
  const props = Object.fromEntries(
    Object.entries(rawProps).filter(([key, v]) => {
      if (BOOLEAN_HTML.has(key)) return v === true;
      return v !== false && v !== undefined;
    })
  );
  const slots = usePlayground((s: { slots: any; }) => s.slots);
  const config = (registry as any)[slug];
  const Component = (UILib as any)[config.component];

  if (config.void) {
    return <Component {...props} />;
  }

  return <Component {...props}>{slots.children}</Component>;
}
