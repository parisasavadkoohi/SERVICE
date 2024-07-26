import { FunctionComponent } from "react";
import styles from "./CleaningServices.module.css";

export type CleaningServicesType = {
  className?: string;
};

const CleaningServices: FunctionComponent<CleaningServicesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.cleaningServices, className].join(" ")}>
      <div className={styles.cleaningTitle}>
        <img
          className={styles.download1311zon3}
          loading="lazy"
          alt=""
          src="/download-13-11zon-3@2x.png"
        />
      </div>
      <div className={styles.cleaningTitle1}>
        <img className={styles.icon} loading="lazy" alt="" src="/1-1@2x.png" />
      </div>
      <img
        className={styles.download142}
        loading="lazy"
        alt=""
        src="/download-14-2@2x.png"
      />
      <div className={styles.secondCleaningImage}>
        <img
          className={styles.download93}
          loading="lazy"
          alt=""
          src="/download-9-3@2x.png"
        />
      </div>
      <div className={styles.thirdCleaningImage}>
        <img
          className={styles.download152}
          loading="lazy"
          alt=""
          src="/download-15-2@2x.png"
        />
      </div>
    </section>
  );
};

export default CleaningServices;
