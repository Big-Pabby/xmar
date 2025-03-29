"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartOptions } from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income",
        data: [420, 500, 450, 470, 600, 650, 700, 750, 720, 500, 520, 430],
        borderColor: "#15AC77",
        backgroundColor: "#15AC77",
        tension: 0.4, // Smooth line
      },
      {
        label: "Expenses",
        data: [470, 480, 450, 440, 800, 734, 563, 678, 550, 744, 900, 430],
        borderColor: "#FE5B65",
        backgroundColor: "#FE5B65",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" }, // ✅ TypeScript will validate this
      title: { display: false, text: "Sales, Revenue & Profit Over Time" },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false } },
    },
  };

  return (
    <div style={{ height: "300px" }}>
      {" "}
      {/* Set desired height here */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
