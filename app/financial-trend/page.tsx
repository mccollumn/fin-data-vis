"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { FinancialChart } from "./FinancialChart";
import { StandardPage } from "../components/StandardPage";
import { ReportSelector } from "./ReportSelector";

const FinancialTrend = () => {
  const searchParams = useSearchParams();
  const symbol = searchParams.get("symbol");
  const [data, setData] = React.useState<any>();
  const [selectedKeys, setSelectedKeys] = React.useState<any>([]);

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

  const onSelect = (event: React.SyntheticEvent, options: any) => {
    if (!options) return;
    setSelectedKeys(options);
  };

  return (
    <StandardPage
      title="Financials"
      description="Balance sheet"
      CallToAction={<ReportSelector data={data} onChange={onSelect} />}
    >
      <div style={{ height: "500px" }}>
        <FinancialChart data={data} selectedKeys={selectedKeys} />
      </div>
    </StandardPage>
  );
};

export default FinancialTrend;
