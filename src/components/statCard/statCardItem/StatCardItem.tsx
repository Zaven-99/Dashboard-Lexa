import { HiOutlineCube } from "react-icons/hi";

import styles from "./statCardItem.module.scss";

interface StatCardItemProps {
  title: string;
  count: string;
  badge: string;
  badgeText: string;
}

const StatCardItem = ({
  title,
  count,
  badge,
  badgeText,
}: StatCardItemProps) => {
  const badgeValue = parseInt(badge);

  return (
    <div className={styles["card-body"]}>
      <div className={styles.text}>
        <h6 className={styles["card-title"]}>{title}</h6>
        <h2 className={styles["orders-count"]}>{count}</h2>

        <span
          className={`${styles.badge} ${
            badgeValue > 0
              ? styles.blue
              : badgeValue === 0
                ? styles.yellow
                : styles.red
          }`}
        >
          {badgeValue > 0 ? `+${badgeValue}%` : `${badgeValue}%`}
        </span>

        <span className={styles["badge-text"]}>{badgeText}</span>
      </div>
      <div className={styles["card-icon"]}>
        <HiOutlineCube />
      </div>
    </div>
  );
};

export default StatCardItem;
