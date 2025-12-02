import Link, { LinkProps } from "next/link";
import styles from "@/components/common/ButtonLink.module.css";
import { ReactNode } from "react";

interface ButtonLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}
export default function ButtonLink({
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${styles.button} ${className}`} {...props}>
      {children}
    </Link>
  );
}
