"use client";

import React from "react";
import { FinancialChart } from "./FinancialChart";

const FinancialTrend = () => {
  const [data, setData] = React.useState<any>();
  const [selectedKeys, setSelectedKeys] = React.useState([
    "current_liabilities",
    "current_assets",
  ]);

  React.useEffect(() => {
    const getData = async () => {
      const result = await fetch(`/api/financials/ticker/IBM`);
      console.log("Result:", result);
      const data = await result?.json();
      console.log("Data:", data);
      setData(data);
    };
    getData();
  }, []);

  const selectedFinancials = React.useMemo(() => {
    if (!data) return [];
    const tranformData = data
      .filter((financial: any) => selectedKeys.includes(financial.key))
      .filter((financial: any) => financial.fiscalPeriod === "FY")
      .reduce((prev: any, current: any) => {
        const previousPoints = prev[current.key]?.data || [];
        return {
          ...prev,
          [current.key]: {
            id: current.key,
            data: [
              ...previousPoints,
              { x: new Date(current.startDate), y: current.value },
            ],
          },
        };
      }, {});
    return Object.values(tranformData);
  }, [data, selectedKeys]);

  console.log("Selected Financials:", selectedFinancials);

  return (
    <div style={{ height: "500px" }}>
      <FinancialChart data={selectedFinancials} />
    </div>
  );
};

export default FinancialTrend;
