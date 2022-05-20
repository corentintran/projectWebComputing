import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["5km", "10km", "30km", "100km"];

export default function BarChart(props) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Population density"
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Population density",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [props.pop_5km, props.pop_10km, props.pop_30km, props.pop_100km]
      }
    ]
  };

  return <Bar options={options} data={data} />;
}
