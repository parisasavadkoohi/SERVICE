import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.imageContainerWrapper, className].join(" ")}>
      <div className={styles.imageContainer}>
        <div className={styles.imageAndButton}>
          <img
            className={styles.getImageDataById54}
            loading="lazy"
            alt=""
            src="/getimagedatabyid-5-4@2x.png"
          />
          <div className={styles.imageAndButtonChild} />
          <div className={styles.imageAndButtonItem} />
        </div>
        <div className={styles.descriptionContainerWrapper}>
          <div className={styles.descriptionContainer}>
            <div className={styles.images132Parent}>
              <img
                className={styles.images132}
                loading="lazy"
                alt=""
                src="/images-13-2@2x.png"
              />
              <img
                className={styles.getImageDataById21}
                alt=""
                src="/getimagedatabyid-2-1@2x.png"
              />
            </div>
            <div className={styles.priceContainerWrapper}>
              <div className={styles.priceContainer}>
                <div className={styles.priceContainerChild} />
                <div className={styles.wrapper}>
                  <b className={styles.b}>توضیحات:</b>
                </div>
                <b className={styles.b1}>قیمت:450.000 تومان</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
