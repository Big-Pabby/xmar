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
        borderColor: "#8D95A5",
        backgroundColor: "#8D95A5",
        tension: 0.4, // Smooth line
      },
      {
        label: "Expenses",
        data: [470, 480, 450, 440, 800, 734, 563, 678, 550, 744, 900, 430],
        borderColor: "#FE5B65",
        backgroundColor: "#FE5B65",
        tension: 0.4,
      },
      {
        label: "Transactions",
        data: [500, 550, 600, 557, 800, 750, 600, 650, 900, 700, 701, 450],
        borderColor: "#F9A000",
        backgroundColor: "#F9A000",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      title: { display: false, text: "Sales, Revenue & Profit Over Time" },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        grid: {
          display: false, // Remove horizontal grid lines
        },
      },
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
