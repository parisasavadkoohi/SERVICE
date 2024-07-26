import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;

  /** Style props */
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  rectangleDivWidth,
  rectangleDivAlignSelf,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
      alignSelf: rectangleDivAlignSelf,
    };
  }, [rectangleDivWidth, rectangleDivAlignSelf]);

  return (
    <header
      className={[styles.rectangleParent, className].join(" ")}
      style={frameHeaderStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.loginButtonBackground}>
        <div className={styles.loginButtonBackgroundChild} />
        <div className={styles.div}>ثبت نام</div>
      </div>
      <div className={styles.wrapper}>
        <a className={styles.a}>آرایشگاه زنانه</a>
      </div>
    </header>
  );
};

export default FrameComponent2;
