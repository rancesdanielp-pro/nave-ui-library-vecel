import { baseTokens } from "@/packages/tokens/src";
import { {{pascalName}} as Core{{pascalName}} } from "@/packages/ui-library/dist/components/base{{pascalName}}";

export default function {{pascalName}}(props: any) {
  const tokens = {
    ...baseTokens,
    ...(props.tokens ?? {}),
  };

  return <Core{{pascalName}} tokens={tokens} platform={props.platform} {...props} />;
}
