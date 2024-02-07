"use client";

import { LineChart } from "@mui/x-charts";
import React from "react";

/**
 * Renders a financial chart component.
 *
 * @param data - The financial data to be displayed on the chart.
 * @param selectedKeys - The selected keys for filtering the data.
 * @returns The rendered financial chart component.
 */
export const FinancialChart = ({ data, selectedKeys }: any) => {
  console.log("FinancialChart data:", data);
  const chartData: any = React.useMemo(
    () => getChartData(data, selectedKeys),
    [data, selectedKeys]
  );
  if (!data || !data.length) return null;
  console.log("Chart data:", chartData);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format;

  return (
    <LineChart
      dataset={chartData}
      margin={{ left: 100 }}
      xAxis={[
        {
          dataKey: "year",
          valueFormatter: (value: any) => value.toString(),
          tickMinStep: 1,
        },
      ]}
      yAxis={[
        {
          valueFormatter: (value: any) =>
            `$${(value / 1000000).toLocaleString()} M`,
        },
      ]}
      series={selectedKeys.map((selected: any) => {
        return {
          dataKey: selected.value,
          label: selected.label,
          valueFormatter: currencyFormatter,
        };
      })}
    />
  );
};

/**
 * Retrieves the chart data based on the provided data and selected keys.
 *
 * @param data The data used to generate the chart.
 * @param selectedKeys The selected keys used to filter the data.
 * @returns The chart data.
 */
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
