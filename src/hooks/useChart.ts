import { chartData } from "../mockData/mockData";

export const useChart = () => {
  const totalMarketplace = chartData.reduce(
    (sum, item) => sum + item.marketplace,
    0,
  );

  const totalIncome = chartData.reduce(
    (sum, item) => sum + item.marketplace + item.direct,
    0,
  );

  const lastMonthValue = chartData[chartData.length - 1].marketplace;

  const mode = localStorage.getItem("mode");

  return {
    totalMarketplace,
    totalIncome,
    lastMonthValue,
    mode,
    chartData,
  };
};
