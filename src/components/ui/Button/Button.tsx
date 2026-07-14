import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import styles from "./Button.module.scss";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary";
  }
>;

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = [
    styles.button,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={buttonClassName} {...props}>
      {children}
    </a>
  );
}