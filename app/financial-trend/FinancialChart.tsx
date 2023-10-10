"use client";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const FinancialChart = ({ data }: any) => (
  <ResponsiveLine
    data={data}
    animate
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "time scale",
      legendOffset: 36,
      legendPosition: "middle",
      format: "%Y",
    }}
    // axisBottom={{
    //   format: "%b %d",
    //   legend: "time scale",
    //   legendOffset: -12,
    //   tickValues: "every 2 days",
    // }}
    axisLeft={{
      legend: "linear scale",
      legendOffset: 12,
    }}
    curve="monotoneX"
    // data={[
    //   {
    //     data: [
    //       {
    //         x: "2018-01-01",
    //         y: 7,
    //       },
    //       {
    //         x: "2018-01-02",
    //         y: 5,
    //       },
    //       {
    //         x: "2018-01-03",
    //         y: 11,
    //       },
    //       {
    //         x: "2018-01-04",
    //         y: 9,
    //       },
    //       {
    //         x: "2018-01-05",
    //         y: 12,
    //       },
    //       {
    //         x: "2018-01-06",
    //         y: 16,
    //       },
    //       {
    //         x: "2018-01-07",
    //         y: 13,
    //       },
    //       {
    //         x: "2018-01-08",
    //         y: 13,
    //       },
    //     ],
    //     id: "fake corp. A",
    //   },
    //   {
    //     data: [
    //       {
    //         x: "2018-01-04",
    //         y: 14,
    //       },
    //       {
    //         x: "2018-01-05",
    //         y: 14,
    //       },
    //       {
    //         x: "2018-01-06",
    //         y: 15,
    //       },
    //       {
    //         x: "2018-01-07",
    //         y: 11,
    //       },
    //       {
    //         x: "2018-01-08",
    //         y: 10,
    //       },
    //       {
    //         x: "2018-01-09",
    //         y: 12,
    //       },
    //       {
    //         x: "2018-01-10",
    //         y: 9,
    //       },
    //       {
    //         x: "2018-01-11",
    //         y: 7,
    //       },
    //     ],
    //     id: "fake corp. B",
    //   },
    // ]}
    enablePointLabel
    // height={400}
    margin={{
      bottom: 60,
      left: 80,
      right: 20,
      top: 20,
    }}
    pointBorderColor={{
      from: "color",
      modifiers: [["darker", 0.3]],
    }}
    pointBorderWidth={1}
    pointSize={16}
    // pointSymbol={function noRefCheck() {}}
    useMesh
    // width={900}
    xFormat="time:%Y%"
    xScale={{
      format: "%Y-%m-%d",
      precision: "year",
      type: "time",
      // useUTC: false,
    }}
    yScale={{
      type: "linear",
    }}
  />
);
