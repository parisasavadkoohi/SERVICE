import { FunctionComponent } from "react";
import styles from "./ServiceCategories.module.css";

export type ServiceCategoriesType = {
  className?: string;
};

const ServiceCategories: FunctionComponent<ServiceCategoriesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.serviceCategories, className].join(" ")}>
      <div className={styles.categoryList}>
        <img
          className={styles.categoryBackgroundIcon}
          alt=""
          src="/category-background@2x.png"
        />
        <img className={styles.spacerIcon} alt="" src="/spacer@2x.png" />
        <img
          className={styles.spacerIcon1}
          loading="lazy"
          alt=""
          src="/1-19-2@2x.png"
        />
        <div className={styles.digitalRepairCategory}>
          <div className={styles.digitalTitle}>
            <div className={styles.div}>خدمات تعمیر وسایل دیجیتال</div>
          </div>
          <div className={styles.digitalSubcategories}>
            <div className={styles.digitalSubcategoryGrid}>
              <div className={styles.firstDigitalImage}>
                <img
                  className={styles.c54e98fb0ade7c93f5c3a972bbdb1bIcon}
                  loading="lazy"
                  alt=""
                  src="/8c54e98fb0ade7c93f5c3a972bbdb1bcf916abb5-1684759748-1@2x.png"
                />
              </div>
              <div className={styles.secondDigitalImage}>
                <img
                  className={styles.images102}
                  loading="lazy"
                  alt=""
                  src="/images-10-2@2x.png"
                />
              </div>
              <div className={styles.digitalSubcategoryImages}>
                <img
                  className={styles.download202}
                  loading="lazy"
                  alt=""
                  src="/download-20-2@2x.png"
                />
              </div>
              <div className={styles.digitalSubcategoryImages1}>
                <img
                  className={styles.download192}
                  alt=""
                  src="/download-19-2@2x.png"
                />
              </div>
              <div className={styles.thirdDigitalImage}>
                <img
                  className={styles.download172}
                  loading="lazy"
                  alt=""
                  src="/download-17-2@2x.png"
                />
              </div>
              <div className={styles.digitalSubcategoryImages2}>
                <img
                  className={styles.download161}
                  loading="lazy"
                  alt=""
                  src="/download-16-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.beautyCategory}>
            <div className={styles.beautyTitle}>
              <div className={styles.div1}>خدمات زیبایی بانوان</div>
            </div>
            <div className={styles.beautySubcategories}>
              <div className={styles.firstBeautySubcategory}>
                <img
                  className={styles.images122}
                  loading="lazy"
                  alt=""
                  src="/images-12-2@2x.png"
                />
              </div>
              <div className={styles.secondBeautySubcategory}>
                <div className={styles.secondBeautyFirstImage}>
                  <img
                    className={styles.download212}
                    loading="lazy"
                    alt=""
                    src="/download-21-2@2x.png"
                  />
                </div>
                <img
                  className={styles.download222}
                  loading="lazy"
                  alt=""
                  src="/download-22-2@2x.png"
                />
              </div>
              <div className={styles.thirdBeautySubcategory}>
                <img
                  className={styles.getImageDataById54}
                  loading="lazy"
                  alt=""
                  src="/getimagedatabyid-5-41@2x.png"
                />
              </div>
              <img
                className={styles.download232}
                loading="lazy"
                alt=""
                src="/download-23-2@2x.png"
              />
            </div>
          </div>
          <div className={styles.homeServicesCategory}>
            <div className={styles.div2}>خدمات خرده کاری فنی خانه</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
