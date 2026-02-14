import StatsGrid from "./statGrid/StatGrid";

import styles from "./statCard.module.scss";

const StatCard = () => {
  return (
    <div className={styles["stat-card"]}>
      <div className={styles["container-fluid"]}>
        <div className={styles.row}>
          <div className={styles.col}>
            <StatsGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
