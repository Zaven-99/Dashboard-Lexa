import { cardData } from "../../../mockData/mockData";

import StatCardItem from "../statCardItem/StatCardItem";

import styles from "./statGrid.module.scss";

const StatsGrid = () => {
  return (
    <div className={styles["mini-stat"]}>
      {cardData.map((item, index) => (
        <StatCardItem
          key={index}
          title={item.title}
          count={item.count}
          badge={item.badge}
          badgeText={item.badgeText}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
