"use client";

import React from "react";
import { FinancialChart } from "./FinancialChart";

const FinancialTrend = () => {
  const [data, setData] = React.useState<any>();

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

  return (
    <div style={{ height: "500px" }}>
      <FinancialChart />
    </div>
  );
};

export default FinancialTrend;
