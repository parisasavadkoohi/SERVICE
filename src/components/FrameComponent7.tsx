import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.hotlineShoppingCallCenterHParent}>
        <img
          className={styles.hotlineShoppingCallCenterHIcon}
          alt=""
          src="/hotline-shopping-call-center-helpdesk01-2@2x.png"
        />
        <div className={styles.wrapper}>
          <a className={styles.a}>0913526895</a>
        </div>
      </div>
      <div className={styles.sloganContentWrapper}>
        <div className={styles.sloganContent}>
          <div className={styles.div}>ما پاسخگوی سوالات شما هستیم</div>
          <img
            className={styles.sloganBackgroundIcon}
            alt=""
            src="/slogan-background@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
