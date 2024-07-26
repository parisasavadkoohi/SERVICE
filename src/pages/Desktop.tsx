import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import BookingOptionsButtons1 from "../components/BookingOptionsButtons1";
import BookingOptionsButtons from "../components/BookingOptionsButtons";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <FrameComponent2 />
      <main className={styles.frameParent}>
        <FrameComponent1 />
        <div className={styles.loremIpsumDolorSitAmetParent}>
          <img
            className={styles.loremIpsumDolorSitAmet}
            loading="lazy"
            alt=""
            src="/1-12-2@2x.png"
          />
          <form className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <FrameComponent />
            <BookingOptionsButtons1 />
            <div className={styles.bookingOptionsButtons}>
              <div className={styles.bookingOptionsButtonsChild} />
              <input
                className={styles.input}
                placeholder="تکرار رزرو"
                type="text"
              />
              <img
                className={styles.podcastsChannelIcon}
                alt=""
                src="/-podcasts-channel.svg"
              />
            </div>
            <div className={styles.bookingOptionsButtons1}>
              <div className={styles.bookingOptionsButtonsItem} />
              <input
                className={styles.input1}
                placeholder="اطلاعات کاربر"
                type="text"
              />
              <img className={styles.imageIcon} alt="" src="/frame-1.svg" />
            </div>
            <div className={styles.bookingOptionsButtons2}>
              <div className={styles.bookingOptionsButtonsInner} />
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
            <div className={styles.bookingOptionsButtons3}>
              <div className={styles.rectangleDiv} />
              <input
                className={styles.input3}
                placeholder="انتخاب تعداد"
                type="text"
              />
              <img className={styles.frameIcon} alt="" src="/frame-2.svg" />
            </div>
            <div className={styles.bookingOptionsButtons4}>
              <div className={styles.bookingOptionsButtonsChild1} />
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

export default Desktop;
