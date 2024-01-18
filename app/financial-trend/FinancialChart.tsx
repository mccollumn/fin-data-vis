"use client";

import { LineChart } from "@mui/x-charts";
import React from "react";

export const FinancialChart = ({ data, selectedKeys }: any) => {
  console.log("FinancialChart data:", data);
  const chartData: any = React.useMemo(
    () => getChartData(data, selectedKeys),
    [data, selectedKeys]
  );
  if (!data || !data.length) return null;
  console.log("Chart data:", chartData);
  return (
    <LineChart
      dataset={chartData}
      xAxis={[{ dataKey: "year" }]}
      series={selectedKeys.map((selected: any) => {
        return {
          dataKey: selected.value,
          label: selected.label,
        };
      })}
    />
  );
};

const getChartData = (data: any, selectedKeys: any) => {
  if (!data) return [];
  const tranformData = data
    .filter((financial: any) =>
      selectedKeys.some((selected: any) => selected.value === financial.key)
    )
    .filter((financial: any) => financial.fiscalPeriod === "FY")
    .reduce((prev: any, current: any) => {
      const currentRecord = prev[current.fiscalYear] || {};
      return {
        ...prev,
        [current.fiscalYear]: {
          ...currentRecord,
          year: current.fiscalYear,
          [current.key]: current.value,
        },
      };
    }, {});
  return Object.values(tranformData);
};
