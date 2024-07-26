import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.serviceSearchWrapper, className].join(" ")}>
      <div className={styles.serviceSearch}>
        <div className={styles.serviceSearchChild} />
        <div className={styles.serviceQuery}>
          <div className={styles.queryInput}>
            <div className={styles.queryInputChild} />
            <b className={styles.b}>به چه خدمتی نیاز داری؟</b>
            <div className={styles.searchButton}>
              <button className={styles.searchButtonContainer}>
                <div className={styles.searchButtonContainerChild} />
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="/search-icon.svg"
                />
                <div className={styles.wrapper}>
                  <div className={styles.div}>پیداش کن...</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.bhAwCpgMainImageb4347622Icon}
          loading="lazy"
          alt=""
          src="/bh-aw-cpg-main-imageb4347622-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
