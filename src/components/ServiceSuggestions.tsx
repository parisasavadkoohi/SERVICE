import { FunctionComponent } from "react";
import styles from "./ServiceSuggestions.module.css";

export type ServiceSuggestionsType = {
  className?: string;
};

const ServiceSuggestions: FunctionComponent<ServiceSuggestionsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.serviceSuggestions, className].join(" ")}>
      <div className={styles.suggestionList}>
        <div className={styles.beautySuggestion}>
          <div className={styles.beautyServicesTitle}>
            <img
              className={styles.getImageDataById54}
              alt=""
              src="/getimagedatabyid-5-41@2x.png"
            />
            <h2 className={styles.h2}>خدمات زیبایی</h2>
          </div>
        </div>
        <div className={styles.download222Parent}>
          <img
            className={styles.download222}
            alt=""
            src="/download-22-2@2x.png"
          />
          <h2 className={styles.h21}>خدمات کاشت ناخن</h2>
        </div>
      </div>
    </section>
  );
};

export default ServiceSuggestions;
