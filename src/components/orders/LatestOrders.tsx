import { ordersData } from "../../mockData/mockData";

import styles from "./latestOrders.module.scss";

const LatestOrders = () => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-body"]}>
        <h4 className={styles["card-title"]}>Latest orders</h4>
        <div className={styles.table}>
          <table>
            <tbody>
              {ordersData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className={styles["table-item"]}>#{item.id}</td>
                    <td className={styles["table-item"]}>
                      <img src={item.img} alt="" />
                    </td>
                    <td className={styles["table-item"]}>{item.name}</td>
                    <td className={styles["table-item"]}>
                      <span
                        className={`${styles["status"]} ${
                          item.status === "Delivered"
                            ? styles.green
                            : item.status === "Cancel"
                              ? styles.red
                              : styles.yellow
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className={styles["table-item"]}>{item.coast}</td>
                    <td className={styles["table-item"]}>{item.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestOrders;
