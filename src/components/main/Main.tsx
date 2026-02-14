import ChartsSection from "../chartsSection/ChartsSection";
import OrderSection from "../orderSection/OrderSection";
import StatCard from "../statCard/StatCard";

import styles from "./main.module.scss";
const Main = () => {
  return (
    <div className={styles["main"]}>
      <StatCard />
      <ChartsSection />
      <OrderSection />
    </div>
  );
};

export default Main;
