import { FunctionComponent } from "react";
import styles from "./MakeupImageAndTitle.module.css";

export type MakeupImageAndTitleType = {
  className?: string;
  getImageDataById54?: string;
  prop?: string;
};

const MakeupImageAndTitle: FunctionComponent<MakeupImageAndTitleType> = ({
  className = "",
  getImageDataById54,
  prop,
}) => {
  return (
    <div className={[styles.makeupImageAndTitle, className].join(" ")}>
      <img
        className={styles.getImageDataById54}
        loading="lazy"
        alt=""
        src={getImageDataById54}
      />
      <div className={styles.makeupTitle}>
        <div className={styles.makeupTitleChild} />
        <div className={styles.div}>{prop}</div>
        <div className={styles.makeupViewButton}>
          <button className={styles.makeupViewButtonContainer}>
            <div className={styles.makeupViewButtonContainerChild} />
            <div className={styles.div1}>مشاهده</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeupImageAndTitle;
