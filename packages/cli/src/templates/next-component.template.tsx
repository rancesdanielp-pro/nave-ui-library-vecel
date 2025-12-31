import { baseTokens } from "@/packages/tokens/src";
import { {{pascalName}} as Core{{pascalName}} } from "@/packages/ui-library/src/web{{pascalName}}";

export default function {{pascalName}}(props: any) {
  const tokens = { ...baseTokens, ...remote };

  return <Core{{pascalName}} tokens={tokens} {...props} />;
}
