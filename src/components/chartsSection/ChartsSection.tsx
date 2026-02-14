import Chart from "../chart/Chart";

import styles from "./chartSection.module.scss";

const ChartsSection = () => {
  return (
    <div className={styles["chart-section"]}>
      <Chart />
    </div>
  );
};

export default ChartsSection;
