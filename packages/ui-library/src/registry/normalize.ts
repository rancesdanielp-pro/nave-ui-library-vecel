import raw from "./registry.json";
import { parseType } from "./parseType";

export function getSchema(slug: string) {
  const c = (raw as any)[slug];

  const props: any = {};
  const slots: any = {};

  for (const [key, prop] of Object.entries(c.props || {})) {
    const parsed = parseType((prop as any).type);
    if (parsed.kind === "slot") {
      slots[key] = parsed;
    } else {
      props[key] = parsed;
    }
  }

  // fallback slot
  if (!slots.children) {
    slots.children = { kind: "slot", default: c.name || "Content" };
  }

  return { ...c, props, slots };
}
