import { useChart } from "../../hooks/useChart";

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
import ChartInfo from "./chartInfo/ChartInfo";

export default function CenterChart() {
  const { totalMarketplace, totalIncome, lastMonthValue, mode, chartData } =
    useChart();
  return (
    <div className={styles.chart}>
      <ChartInfo
        totalMarketplace={totalMarketplace}
        totalIncome={totalIncome}
        lastMonthValue={lastMonthValue}
      />
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
