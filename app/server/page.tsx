"use server";

import getData from "../utils/getData";

const Server = async () => {
  const data = await getData();
  return <div>{data?.[0]?.label}</div>;
};

export default Server;
