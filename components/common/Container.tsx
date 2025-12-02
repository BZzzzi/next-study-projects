import styles from "@/components/common/Container.module.css";
import { ReactNode } from "react";
interface ContainerProps {
  className?: string;
  page?: boolean;
  children?: ReactNode;
}
export default function Container({
  className = "",
  page = false,
  children,
}: ContainerProps) {
  const classNames = `${styles.container} ${
    page ? styles.page : ""
  } ${className}`;
  return <div className={classNames}>{children}</div>;
}
