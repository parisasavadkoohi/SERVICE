import { FunctionComponent } from "react";
import styles from "./BottomContent.module.css";

export type BottomContentType = {
  className?: string;
};

const BottomContent: FunctionComponent<BottomContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.bottomContent, className].join(" ")}>
      <div className={styles.isfahanServicesTitleParent}>
        <div className={styles.isfahanServicesTitle}>
          <div className={styles.div}>کاربردی ترین خدمات اصفهان</div>
        </div>
        <div className={styles.cleaningServicePromo}>
          <div className={styles.beautyServicePromo}>
            <div className={styles.beautyPromoContent}>
              <div className={styles.beautyPromoContentChild} />
              <div className={styles.beautyPromoImage}>
                <img
                  className={styles.oip1Icon}
                  loading="lazy"
                  alt=""
                  src="/oip-1@2x.png"
                />
              </div>
              <div className={styles.beautyPromoDescription}>
                <div className={styles.beautyPromoTitle}>
                  <div className={styles.beautyPromoTitleChild} />
                  <div className={styles.div1}>خدمات زیبایی در اصفهان</div>
                </div>
                <div className={styles.beautyPromoPricing}>
                  <div className={styles.beautyPromoPriceBox}>
                    <div className={styles.beautyPromoPriceBoxChild} />
                    <div className={styles.beautyPromoPriceContent}>
                      <div className={styles.beautyPromoPrice}>100.000</div>
                    </div>
                    <div className={styles.div2}>شروع قیمت</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeBeautyPromo}>
            <div className={styles.homeBeautyPromoChild} />
            <img
              className={styles.images134}
              loading="lazy"
              alt=""
              src="/images-13-4@2x.png"
            />
            <div className={styles.homeBeautyContent}>
              <div className={styles.homeBeautyTitle}>
                <div className={styles.homeBeautyName}>
                  <div className={styles.homeBeautyPlaceholder} />
                  <div className={styles.div3}>خدمات زیبایی در منزل</div>
                </div>
              </div>
              <div className={styles.homeBeautyPricing}>
                <div className={styles.homeBeautyPriceBox} />
                <div className={styles.homeBeautyPriceContent}>
                  <div className={styles.homeBeautyPrice}>150.000</div>
                </div>
                <div className={styles.div4}>شروع قیمت</div>
              </div>
            </div>
          </div>
          <div className={styles.cleaningPromoContent}>
            <div className={styles.cleaningPromoContentChild} />
            <img
              className={styles.download181}
              loading="lazy"
              alt=""
              src="/download-18-1@2x.png"
            />
            <div className={styles.homeRepairPromo}>
              <div className={styles.homeRepairContent}>
                <div className={styles.homeRepairItem}>
                  <div className={styles.homeRepairItemChild} />
                  <div className={styles.div5}>نظافت منزل در اصفهان</div>
                </div>
              </div>
              <div className={styles.homeRepairPricing}>
                <div className={styles.homeRepairPriceBox} />
                <b className={styles.homeRepairPrice}>400.000</b>
                <div className={styles.div6}>شروع قیمت</div>
              </div>
            </div>
          </div>
          <div className={styles.cleaningPromoContent1}>
            <div className={styles.cleaningPromoContentItem} />
            <div className={styles.download92Wrapper}>
              <img
                className={styles.download92}
                loading="lazy"
                alt=""
                src="/download-9-2@2x.png"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.div7}>خدمات خرده کاری فنی خانه</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.homeRepairPriceBackground}>
                    <div className={styles.homeRepairPrice1}>200.000</div>
                  </div>
                  <div className={styles.div8}>شروع قیمت</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomContent;
