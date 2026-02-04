import raw from "./registry.json";
import { parseType } from "./parseType";

export function getSchema(slug: string) {
  const c = (raw as Record<string, unknown>)[slug] as Record<string, unknown>;

  const props: Record<string, unknown> = {};
  const slots: Record<string, unknown> = {};

  for (const [key, prop] of Object.entries(c.props || {})) {
    const parsed = parseType((prop as { type: string }).type);
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
