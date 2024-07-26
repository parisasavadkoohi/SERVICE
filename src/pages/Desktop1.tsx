import { FunctionComponent } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import BottomContent from "../components/BottomContent";
import ServiceSuggestions from "../components/ServiceSuggestions";
import ElectricalPlumbingServices from "../components/ElectricalPlumbingServices";
import FrameComponent3 from "../components/FrameComponent3";
import ServiceCategories from "../components/ServiceCategories";
import CleaningServices from "../components/CleaningServices";
import styles from "./Desktop1.module.css";

const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop8}>
      <header className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent7 />
          <FrameComponent6 />
        </div>
        <FrameComponent4 />
      </header>
      <BottomContent />
      <ServiceSuggestions />
      <ElectricalPlumbingServices />
      <FrameComponent3 />
      <div className={styles.desktop8Child} />
      <ServiceCategories />
      <CleaningServices />
    </div>
  );
};

export default Desktop1;
