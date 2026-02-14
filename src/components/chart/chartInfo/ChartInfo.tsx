import styles from "./chartInfo.module.scss";

interface ChartInfoProps {
  totalMarketplace: number;
  totalIncome: number;
  lastMonthValue: number;
}

const ChartInfo = ({
  totalMarketplace,
  totalIncome,
  lastMonthValue,
}: ChartInfoProps) => {
  return (
    <div>
      <h4 className={styles["email-sent"]}>Email Sent</h4>
      <div className={styles["text-center"]}>
        <div className={styles.col}>
          <h5 className={styles.number}>${totalMarketplace}</h5>
          <p className={styles.text}>Marketplace</p>
        </div>
        <div className={styles.col}>
          <h5 className={styles.number}>${totalIncome}</h5>
          <p className={styles.text}>Total Income</p>
        </div>
        <div className={styles.col}>
          <h5 className={styles.number}>${lastMonthValue}</h5>
          <p className={styles.text}>Last Month</p>
        </div>
      </div>
    </div>
  );
};

export default ChartInfo;
