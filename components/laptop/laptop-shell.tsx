import { PropsWithChildren } from "react";
import styles from "@/components/laptop/laptop-shell.module.css";

type LaptopShellProps = PropsWithChildren<{
  className?: string;
}>;

export function LaptopShell({ children, className = "" }: LaptopShellProps) {
  return (
    <div className={`${styles.shellWrap} ${className}`.trim()}>
      <div className={styles.device}>
        <div className={styles.camera} />
        <div className={styles.screen}>
          <div className={styles.screenInner}>{children}</div>
        </div>
        <div className={styles.topBar} />
        <div className={styles.bottomBar} />
      </div>
    </div>
  );
}
