import { FunctionComponent } from "react";
import styles from "./BookingOptionsButtons1.module.css";

export type BookingOptionsButtons1Type = {
  className?: string;
};

const BookingOptionsButtons1: FunctionComponent<BookingOptionsButtons1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bookingOptionsButtons, className].join(" ")}>
      <div className={styles.bookingOptionsButtonsChild} />
      <b className={styles.b}>انتخاب تاریخ</b>
      <img
        className={styles.calendarDateScheduleAppointIcon}
        alt=""
        src="/calendar-date-schedule-appointment01-2@2x.png"
      />
    </div>
  );
};

export default BookingOptionsButtons1;
