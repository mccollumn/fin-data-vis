"use client";

import { LineChart } from "@mui/x-charts";

export const FinancialChart = ({ data }: any) => {
  console.log("Chart data:", data);
  if (data.length === 0) return null;
  return (
    <LineChart
      dataset={data}
      xAxis={[{ dataKey: "fiscalYear" }]}
      series={[{ dataKey: "value" }]}
    />
  );
};
