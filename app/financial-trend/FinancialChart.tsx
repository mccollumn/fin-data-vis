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
      format: ">-$,.2d",
      legend: "linear scale",
      legendOffset: 12,
    }}
    curve="monotoneX"
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
    yFormat=">-$,.2d"
    yScale={{
      type: "linear",
    }}
    legends={[
      {
        anchor: "bottom",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
