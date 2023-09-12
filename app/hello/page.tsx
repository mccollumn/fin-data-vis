"use client";

import React from "react";

const Page = () => {
  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    const getData = async () => {
      const result = await fetch(`/api/hello`);
      console.log("Result:", result);
      const data = await result?.json();
      console.log("Data:", data);
      setData(data);
    };
    getData();
  }, []);

  return <div>{data?.[0]?.label}</div>;
};

export default Page;
