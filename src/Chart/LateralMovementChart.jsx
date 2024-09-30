import axios from "axios";
import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

const LateralMovementChart = () => {
  const location = useLocation();
  const empId = location?.state?.data?.empId || 0;

  const [rating, setRating] = useState(null);

  useEffect(() => {
    if (empId) {
      axios
        .get(`http://localhost:8080/managerRating/get/${empId}`)
        .then((res) => setRating(res.data))
        .catch((error) => console.error("Error fetching rating:", error));
    }
  }, [empId]);

  console.log(rating,"rating");

  // Extract the possible lateral movement values
  const possible_lateral_movement1 = rating?.internal1 || 0;
  const possible_lateral_movement2 = rating?.internal2 || 0;
  const possible_lateral_movement3 = rating?.internal3 || 0;

  // Define the data for the pie chart dynamically based on the state
  const data = {
    labels: [
      `Movement 1: ${possible_lateral_movement1}`,
      `Movement 2: ${possible_lateral_movement2}`,
      `Movement 3: ${possible_lateral_movement3}`,
    ],
    datasets: [
      {
        label: "Movement Status",
        data: [1, 1, 1],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom", // Position the legend at the bottom
        labels: {
          font: {
            size: 14, // Customize font size of the legend labels
          },
          padding: 20, // Adjust padding between legend items
          boxWidth: 40, // Adjust the width of the legend color box
        },
      },
    },
  };

  return (
    <div>
      {rating ? (
        <Pie data={data} options={options} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default LateralMovementChart;
