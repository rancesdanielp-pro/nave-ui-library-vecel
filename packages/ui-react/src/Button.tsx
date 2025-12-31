import { baseTokens } from "@/packages/tokens/src";
import { Button as CoreButton } from "@/packages/ui-library/dist/components/base/Button";
export default function Button(props: any) {
  const tokens = {
    ...baseTokens,
    ...(props.tokens ?? {}),
  };

  return <CoreButton tokens={tokens} platform={props.platform} {...props} />;
}