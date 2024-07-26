import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
  transport5cfea3c211zon2?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  transport5cfea3c211zon2,
  prop,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.firstCategoryRowWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.firstCategoryRow}>
        <div className={styles.transportCategory}>
          <img
            className={styles.transport5cfea3c211zon2Icon}
            loading="lazy"
            alt=""
            src={transport5cfea3c211zon2}
          />
        </div>
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default FrameComponent5;
