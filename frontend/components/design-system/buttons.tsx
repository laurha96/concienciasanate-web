import * as React from "react";

import { Button } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof Button>;

export function PrimaryButton({ variant, ...props }: ButtonProps) {
  return <Button variant={variant ?? "default"} {...props} />;
}

export function SecondaryButton({ variant, ...props }: ButtonProps) {
  return <Button variant={variant ?? "secondary"} {...props} />;
}
