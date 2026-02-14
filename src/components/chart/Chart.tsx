import { useChart } from "../../bll/useChart";

import styles from "./chart.module.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CenterChart() {
  const { totalMarketplace, totalIncome, lastMonthValue, mode, chartData } =
    useChart();
  return (
    <div className={styles.chart}>
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

      <div className={styles["chart-body"]}>
        <ResponsiveContainer key={mode}>
          <AreaChart
            data={chartData}
            key={mode}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6C63FF" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#6C63FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              horizontal
              vertical={false}
              stroke="#444"
              opacity={0.4}
            />
            <XAxis
              dataKey="year"
              stroke={mode === "light" ? "#000000" : "#FFFFFF"}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              stroke={mode === "light" ? "#000000" : "#FFFFFF"}
              domain={[0, 360]}
              ticks={[0, 60, 120, 180, 240, 300, 360]}
            />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="marketplace"
              stroke="#00E5FF"
              strokeWidth={3}
              fill="url(#colorA)"
            />
            <Area
              type="monotone"
              dataKey="direct"
              stroke="#6C63FF"
              strokeWidth={3}
              fill="url(#colorB)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
