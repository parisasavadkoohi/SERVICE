import { FunctionComponent } from "react";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.div}>ثبت نام</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div1}>انتخاب آرایشگر</div>
          </div>
        </div>
        <div className={styles.container}>
          <a className={styles.a}>آرایشگاه زنانه</a>
        </div>
      </header>
      <img
        className={styles.download252}
        loading="lazy"
        alt=""
        src="/download-25-2@2x.png"
      />
    </section>
  );
};

export default FrameComponent9;
