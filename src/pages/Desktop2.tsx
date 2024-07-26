import { FunctionComponent } from "react";
import FrameComponent9 from "../components/FrameComponent9";
import MakeupImageAndTitle from "../components/MakeupImageAndTitle";
import FrameComponent8 from "../components/FrameComponent8";
import styles from "./Desktop2.module.css";

const Desktop2: FunctionComponent = () => {
  return (
    <div className={styles.desktop9}>
      <FrameComponent9 />
      <section className={styles.frameParent}>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-57.svg"
          />
        </div>
        <div className={styles.makeupServiceParent}>
          <div className={styles.makeupService}>
            <MakeupImageAndTitle
              getImageDataById54="/getimagedatabyid-5-42@2x.png"
              prop="میکاپ تخصصی"
            />
            <div className={styles.makeupImageDownload}>
              <img
                className={styles.images132}
                loading="lazy"
                alt=""
                src="/images-13-21@2x.png"
              />
              <div className={styles.makeupImageDownloadButton}>
                <div className={styles.makeupImageDownloadButtonChild} />
                <div className={styles.makeupImageDownloadButtonC}>
                  <div className={styles.makeupImageDownloadButtonCChild} />
                  <div className={styles.div}>مشاهده</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.makeupService1}>
            <MakeupImageAndTitle
              getImageDataById54="/getimagedatabyid-2-1@2x.png"
              prop="خدمات تخصصی مو"
            />
            <div className={styles.download251Parent}>
              <img
                className={styles.download251}
                loading="lazy"
                alt=""
                src="/download-25-1@2x.png"
              />
              <FrameComponent8 />
            </div>
          </div>
        </div>
        <div className={styles.nailServiceParent}>
          <div className={styles.nailService}>
            <img
              className={styles.getImageDataById43}
              loading="lazy"
              alt=""
              src="/getimagedatabyid-4-3@2x.png"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.div1}>طراحی و کاشت ناخن</div>
              <div className={styles.nailViewButtonContainerWrapper}>
                <button className={styles.nailViewButtonContainer}>
                  <div className={styles.nailViewButtonContainerChild} />
                  <div className={styles.div2}>مشاهده</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.blankServiceWrapper}>
            <div className={styles.blankService}>
              <img
                className={styles.getImageDataById12}
                loading="lazy"
                alt=""
                src="/getimagedatabyid-1-2@2x.png"
              />
              <FrameComponent8 />
              <div className={styles.titleParent}>
                <div className={styles.title} />
                <div className={styles.noTheOtherHandWeDenounce} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop2;
