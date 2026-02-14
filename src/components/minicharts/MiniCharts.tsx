import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { miniChartData } from "../../mockData/mockData";

import styles from "./miniCharts.module.scss";

interface MiniBarChartProps {
  label: string;
  fill: string;
}

export const MiniBarChart = ({ label, fill }: MiniBarChartProps) => {
  return (
    <div className={styles["mini-bar__chart"]}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={miniChartData}>
          <Bar dataKey="value" fill={fill} />
        </BarChart>
      </ResponsiveContainer>
      <p className={styles["mini-chart-label"]}>{label}</p>
    </div>
  );
};
