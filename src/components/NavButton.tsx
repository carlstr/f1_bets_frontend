import { Button, type ButtonProps } from "@mui/material";
import type { MouseEventHandler, ReactNode } from "react";

type NavButtonProps = {
  children: ReactNode;
  id?: string;
  ariaControls?: string;
  ariaExpanded?: "true";
  ariaHaspopup?: ButtonProps["aria-haspopup"];
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
};

function NavButton({
  children,
  id,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: NavButtonProps) {
  return (
    <Button
      id={id}
      color="inherit"
      href={href}
      aria-controls={ariaControls}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Button>
  );
}

export default NavButton;
