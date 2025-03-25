import { ButtonVariant, StyledButton } from "./Button.styles.ts";
import { ReactNode } from "react";

interface ButtonProps {
  variant: ButtonVariant;
  children: ReactNode;
}
export function Button({ variant = "primary", children }: ButtonProps) {
  return <StyledButton variant={variant}>{children}</StyledButton>;
}
