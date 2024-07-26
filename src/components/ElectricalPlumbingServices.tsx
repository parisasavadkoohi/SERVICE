import { FunctionComponent } from "react";
import styles from "./ElectricalPlumbingServices.module.css";

export type ElectricalPlumbingServicesType = {
  className?: string;
};

const ElectricalPlumbingServices: FunctionComponent<
  ElectricalPlumbingServicesType
> = ({ className = "" }) => {
  return (
    <section
      className={[styles.electricalPlumbingServices, className].join(" ")}
    >
      <div className={styles.electricalParent}>
        <div className={styles.electrical}>
          <div className={styles.electricalServices}>
            <img
              className={styles.download1311zon2}
              alt=""
              src="/download-13-11zon-2@2x.png"
            />
            <h2 className={styles.h2}>برق کاری در منزل</h2>
          </div>
        </div>
        <div className={styles.transportServices}>
          <div className={styles.transport}>
            <img
              className={styles.download102}
              alt=""
              src="/download-10-2@2x.png"
            />
            <h3 className={styles.h3}>باربری وحمل ونقل</h3>
          </div>
        </div>
        <div className={styles.digitalRepairServices}>
          <img
            className={styles.images91}
            loading="lazy"
            alt=""
            src="/images-9-1@2x.png"
          />
          <b className={styles.b}>خدمات تعمیر وسایل دیجیتال</b>
        </div>
      </div>
    </section>
  );
};

export default ElectricalPlumbingServices;
