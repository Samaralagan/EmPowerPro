import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(7);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };

  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setSeriesNb(newValue);
  };

  // Example data normalized to percentages
  const seriesData = [
    {
      label: "series 1",
      data: [80, 50, 76, 79, 47, 73, 100]
        .slice(0, itemNb)
        .map((value) => value),
    },
    {
      label: "series 2",
      data: [62, 54, 96, 63, 86, 69, 94].slice(0, itemNb).map((value) => value),
    },
  ].map((s) => ({ ...s }));

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <BarChart
        height={270}
        width={800}
        xAxis={[{ scaleType: "band", data: weekDays.slice(0, itemNb) }]}
        series={seriesData.slice(0, seriesNb)}
        skipAnimation={skipAnimation}
        // yAxis={{
        //   type: 'linear',
        //   min: 0,
        //   max: 100,
        //   ticks: {
        //     stepSize: 20, // Set the step size to 20
        //     callback: (value) => value, // Optionally, you can format the tick labels here
        //   },
        // }}
      />
    </Box>
  );
}
