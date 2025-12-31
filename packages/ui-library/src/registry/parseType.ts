export function parseType(type: string) {
  // boolean
  if (type === "boolean") {
    return { kind: "boolean", default: false };
  }

  // number
  if (type === "number") {
    return { kind: "number", default: 0 };
  }

  // string
  if (type === "string") {
    return { kind: "string", default: "" };
  }

  // ReactNode
  if (type.includes("React.ReactNode")) {
    return { kind: "slot", default: "Content" };
  }

  // Union: 'a' | 'b' | 'c'
  if (type.includes("|")) {
    const options = type
      .split("|")
      .map((v) => v.replace(/'/g, "").trim());

    return {
      kind: "enum",
      options,
      default: options[0],
    };
  }

  return { kind: "unknown", default: undefined };
}
