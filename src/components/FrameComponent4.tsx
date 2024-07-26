import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";
import HomeCategory from "./HomeCategory";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.servicesContentWrapper, className].join(" ")}>
      <div className={styles.servicesContent}>
        <FrameComponent5
          transport5cfea3c211zon2="/transport5cfea3c2-11zon-2@2x.png"
          prop="باربری وحمل ونقل"
        />
        <div className={styles.businessCategory}>
          <img
            className={styles.business3da2c8b311zon2Icon}
            loading="lazy"
            alt=""
            src="/business3da2c8b3-11zon-2@2x.png"
          />
        </div>
        <FrameComponent5
          transport5cfea3c211zon2="/repairandmaintenanceafdf5bf3-11zon-2@2x.png"
          prop="تعمیرات"
          propWidth="154px"
        />
        <HomeCategory
          housec2f84a3511zon2="/housec2f84a35-11zon-2@2x.png"
          prop="خانه"
        />
        <div className={styles.learningCategory}>
          <img
            className={styles.learning0478874c11zon2Icon}
            loading="lazy"
            alt=""
            src="/learning0478874c-11zon-2@2x.png"
          />
          <div className={styles.wrapper}>
            <div className={styles.div}>آموزش</div>
          </div>
        </div>
        <HomeCategory
          housec2f84a3511zon2="/entertainmentandeventsff21a97b-11zon-2@2x.png"
          prop="مراسم"
          propWidth="unset"
          propHeight="112px"
        />
        <FrameComponent5
          transport5cfea3c211zon2="/pets7e83a1ad-11zon-2@2x.png"
          prop="حیوانات"
          propWidth="94px"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
