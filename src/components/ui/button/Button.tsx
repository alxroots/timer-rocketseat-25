import { StyledButton } from "./Button.styles.ts";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}
export function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}
