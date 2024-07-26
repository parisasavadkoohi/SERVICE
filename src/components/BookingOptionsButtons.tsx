import { FunctionComponent } from "react";
import styles from "./BookingOptionsButtons.module.css";

export type BookingOptionsButtonsType = {
  className?: string;
};

const BookingOptionsButtons: FunctionComponent<BookingOptionsButtonsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bookingOptionsButtons, className].join(" ")}>
      <div className={styles.bookingOptionsButtonsChild} />
      <div className={styles.div}>ساعت شروع</div>
      <img
        className={styles.hourglassSandglassTimerTimeIcon}
        loading="lazy"
        alt=""
        src="/hourglass-sandglass-timer-time01-3@2x.png"
      />
    </div>
  );
};

export default BookingOptionsButtons;
