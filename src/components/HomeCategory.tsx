import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HomeCategory.module.css";

export type HomeCategoryType = {
  className?: string;
  housec2f84a3511zon2?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const HomeCategory: FunctionComponent<HomeCategoryType> = ({
  className = "",
  housec2f84a3511zon2,
  prop,
  propWidth,
  propHeight,
}) => {
  const homeCategoryStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className={[styles.homeCategory, className].join(" ")}
      style={homeCategoryStyle}
    >
      <div className={styles.homeContent}>
        <img
          className={styles.housec2f84a3511zon2Icon}
          loading="lazy"
          alt=""
          src={housec2f84a3511zon2}
        />
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
