"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { FinancialChart } from "./FinancialChart";
import { StandardPage } from "../components/StandardPage";

const FinancialTrend = () => {
  const searchParams = useSearchParams();
  const symbol = searchParams.get("symbol");
  const [data, setData] = React.useState<any>();
  const [selectedKeys, setSelectedKeys] = React.useState([
    "current_liabilities",
    "current_assets",
  ]);

  React.useEffect(() => {
    const getData = async () => {
      const result = await fetch(`/api/financials/?symbol=${symbol}`);
      console.log("Result:", result);
      const data = await result?.json();
      console.log("Data:", data);
      setData(data);
    };
    getData();
  }, [symbol]);

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
            label: current.label,
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
    <StandardPage
      title="Financials"
      description="Balance sheet"
      CallToAction="CLICK ME"
    >
      <div style={{ height: "500px" }}>
        <FinancialChart data={selectedFinancials} />
      </div>
    </StandardPage>
  );
};

export default FinancialTrend;
