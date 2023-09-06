const Page = async () => {
  const result = await fetch(`${process.env.API_ENDPOINT}/api/hello`);
  console.log("Result:", result);
  const data = await result.json();
  console.log("Data:", data);
  return <div>{data.message}</div>;
};

export default Page;
