import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.locationContent}>
        <input
          className={styles.locationContentChild}
          placeholder="تهران"
          type="text"
        />
        <div className={styles.frameParent}>
          <div className={styles.locationMarkerMapPinYouArWrapper}>
            <img
              className={styles.locationMarkerMapPinYouArIcon}
              alt=""
              src="/location-marker-map-pin-youarehere01-1@2x.png"
            />
          </div>
          <img className={styles.frameItem} alt="" src="/line-11.svg" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>به چه خدمتی نیاز دارید؟</div>
      </div>
    </div>
  );
};

export default FrameComponent6;
