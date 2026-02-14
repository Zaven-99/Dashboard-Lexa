import ChartsSection from "../chartsSection/ChartsSection";
import OrderSection from "../orderSection/OrderSection";
import StatCard from "../statCard/StatCard";

import styles from "./main.module.scss";
const Main = () => {
  return (
    <main className={styles["main"]}>
      <StatCard />
      <ChartsSection />
      <OrderSection />
    </main>
  );
};

export default Main;
