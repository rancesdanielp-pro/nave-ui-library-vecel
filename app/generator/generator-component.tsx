'use client';

import { useEffect, useState } from 'react';
import { usePlayground } from '../playground/PlaygroundStore';
import { getSchema } from '@/packages/ui-library/src/registry/normalize';

export function GeneratorComponent({ slug }: { slug: string }) {
  const schema = getSchema(slug);

  const setProps = usePlayground((s: { setProps: any; }) => s.setProps);
  const setSlots = usePlayground((s: { setSlots: any; }) => s.setSlots);

  if (!schema) return null;

  // Props state
  const [values, setValues] = useState(
    Object.fromEntries(
      Object.entries(schema.props).map(([k, v]: any) => [k, v.default])
    )
  );

  // Slots state
  const [slots, setLocalSlots] = useState(
    Object.fromEntries(
      Object.entries(schema.slots).map(([k, v]: any) => [k, v.default])
    )
  );

  // Sync into playground store
  useEffect(() => {
    setProps(values);
    setSlots(slots);
  }, [values, slots, setProps, setSlots]);

  return (
    <div className="space-y-6">
      {/* PROPS */}
      <div>
        <h3 className="font-semibold mb-2">Props</h3>
        <div className="space-y-3">
          {Object.entries(schema.props).map(([key, prop]: any) => {
            if (prop.kind === 'string')
              return (
                <input
                  key={key}
                  className="border p-2 w-full rounded"
                  value={values[key]}
                  onChange={(e) =>
                    setValues({ ...values, [key]: e.target.value })
                  }
                />
              );

            if (prop.kind === 'boolean')
              return (
                <label key={key} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={values[key]}
                    onChange={(e) =>
                      setValues({ ...values, [key]: e.target.checked })
                    }
                  />
                  {key}
                </label>
              );

            if (prop.kind === 'enum')
              return (
                <select
                  key={key}
                  className="border p-2 rounded w-full"
                  value={values[key]}
                  onChange={(e) =>
                    setValues({ ...values, [key]: e.target.value })
                  }
                >
                  {prop.options.map((o: string) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              );

            return null;
          })}
        </div>
      </div>

      {/* SLOTS */}
      <div>
        <h3 className="font-semibold mb-2">Slots</h3>
        <div className="space-y-3">
          {Object.entries(schema.slots).map(([key]) => (
            <input
              key={key}
              className="border p-2 w-full rounded"
              value={slots[key]}
              onChange={(e) =>
                setLocalSlots({ ...slots, [key]: e.target.value })
              }
              placeholder={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
