import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(7);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
      color: "#FFB500", // yellow color
    },
    {
      label: "series 2",
      data: [62, 54, 96, 63, 86, 69, 94].slice(0, itemNb).map((value) => value),
      color: "#0B1437", // dark blue color
    },
  ].map((s) => ({ ...s }));

  return (
    <Box sx={{ width: "100%", height: "100%", padding: "20px" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Box
          sx={{
            textAlign: "left",
            marginBottom: "10px",
            fontWeight: "bold",
            flexGrow: 1,
            color: "#000F44",
          }}
        >
          INDIVIDUAL REPORT
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "70%" }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px 0 0 20px", // rounded corners on the left side
                borderRight: "none", // remove the right border
                "&:hover fieldset": {
                  borderColor: "#0B1437", // same color as the button on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0B1437", // same color as the button when focused
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#0B1437", // same color as the button
              },
              "& .MuiOutlinedInput-input": {
                outline: "none", // remove blue outline
              },
              flexGrow: 1,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0B1437",
              borderRadius: "0 20px 20px 0", // rounded corners on the right side
              marginLeft: "0", // remove the gap between the button and the text field
              padding: "10px 20px",
              height: "56px", // same height as the TextField
              borderLeft: "1px solid #0B1437", // add left border to match the text field's outline
              
                outline: "none", // remove blue outline when focused
              
            }}
          >
            Search
          </Button>
        </Box>
      </Box>

      <BarChart
        height={270}
        width={800}
        xAxis={[{ scaleType: "band", data: weekDays.slice(0, itemNb) }]}
        series={seriesData.slice(0, seriesNb)}
        skipAnimation={skipAnimation}
        yAxis={[
          {
            type: "linear",
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20, // Set the step size to 20
              callback: (value) => `${value} %`, // Format the tick labels
            },
          },
        ]}
      />
    </Box>
  );
}
