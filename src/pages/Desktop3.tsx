import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import BookingOptionsButtons1 from "../components/BookingOptionsButtons1";
import BookingOptionsButtons from "../components/BookingOptionsButtons";
import styles from "./Desktop3.module.css";

const Desktop3: FunctionComponent = () => {
  return (
    <div className={styles.desktop10}>
      <FrameComponent2
        rectangleDivWidth="1440px"
        rectangleDivAlignSelf="unset"
      />
      <main className={styles.frameParent}>
        <FrameComponent1 />
        <div className={styles.bookingPlaceholderParent}>
          <img
            className={styles.bookingPlaceholderIcon}
            loading="lazy"
            alt=""
            src="/1-12-2@2x.png"
          />
          <form className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <FrameComponent />
            <BookingOptionsButtons1 />
            <div className={styles.bookingOptionsLabels}>
              <div className={styles.bookingOptionsLabelsChild} />
              <input
                className={styles.input}
                placeholder="تکرار رزرو"
                type="text"
              />
              <img
                className={styles.frameIcon}
                alt=""
                src="/-podcasts-channel.svg"
              />
            </div>
            <div className={styles.bookingOptionsLabels1}>
              <div className={styles.bookingOptionsLabelsItem} />
              <input
                className={styles.input1}
                placeholder="اطلاعات کاربر"
                type="text"
              />
              <img className={styles.frameIcon1} alt="" src="/frame-1.svg" />
            </div>
            <div className={styles.bookingOptionsLabels2}>
              <div className={styles.bookingOptionsLabelsInner} />
              <input
                className={styles.input2}
                placeholder="خدمات افزوده"
                type="text"
              />
              <img
                className={styles.hotPriceShoppingSalesDiscoIcon}
                alt=""
                src="/hot-price-shopping-sales-discount01-2@2x.png"
              />
            </div>
            <BookingOptionsButtons />
            <div className={styles.bookingOptionsLabels3}>
              <div className={styles.rectangleDiv} />
              <input
                className={styles.input3}
                placeholder="انتخاب تعداد"
                type="text"
              />
              <img className={styles.frameIcon2} alt="" src="/frame-2.svg" />
            </div>
            <div className={styles.bookingOptionsLabels4}>
              <div className={styles.bookingOptionsLabelsChild1} />
              <input
                className={styles.input4}
                placeholder="بررسی نهایی"
                type="text"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Desktop3;
