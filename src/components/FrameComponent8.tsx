import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.div}>مشاهده</div>
      </button>
    </div>
  );
};

export default FrameComponent8;
