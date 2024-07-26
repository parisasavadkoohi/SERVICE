import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <h3 className={styles.h3}>انتخاب آرایشگر</h3>
      <div className={styles.stylistOptions}>
        <div className={styles.stylistOptionsChild} />
        <b className={styles.b}>زهرا یاوری</b>
        <button className={styles.selectionButtons}>
          <div className={styles.selectionButtonsChild} />
          <b className={styles.b1}>انتخاب</b>
        </button>
      </div>
      <div className={styles.stylistOptions1}>
        <div className={styles.stylistOptionsItem} />
        <div className={styles.div}>
          <b>سارا</b>
          <span className={styles.span}>{` `}</span>
          <b>دارابی</b>
        </div>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <b className={styles.b2}>انتخاب</b>
        </button>
      </div>
      <img
        className={styles.images133}
        loading="lazy"
        alt=""
        src="/images-13-3@2x.png"
      />
      <img
        className={styles.images121}
        loading="lazy"
        alt=""
        src="/images-12-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
