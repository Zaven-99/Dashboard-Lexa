import LatestOrders from "../orders/LatestOrders";

import styles from "./ordersSection.module.scss";

const OrderSection = () => {
  return (
    <div className={styles["order-section"]}>
      <LatestOrders />
    </div>
  );
};

export default OrderSection;
