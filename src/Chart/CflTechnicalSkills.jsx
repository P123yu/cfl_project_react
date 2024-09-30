import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CflTechnicalSkills = () => {
  const location = useLocation();
  const particularCflData = location?.state?.data?.technicalSkills;

  // Create labels from particularCflData and ensure they are valid
  const labels = particularCflData?.split(",") || [];

  // Initialize the data array with zeros, matching the length of labels
  const [dataValues, setDataValues] = useState(
    new Array(labels.length).fill(0)
  );

  // Generate an array of random colors based on the number of labels
  const backgroundColors = labels.map(() => getRandomColor());

  // Define the data for the pie chart dynamically based on the state
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Email Status",
        data: dataValues, // Use the dataValues state here
        backgroundColor: backgroundColors,
        hoverOffset: 20,
      },
    ],
  };

  // Options to remove the tooltip and customize the legend
  const options = {
    plugins: {
      tooltip: {
        enabled: false, // Disable the tooltip
      },
      legend: {
        display: true,
        position: "bottom", // Position the legend at the bottom
        labels: {
          font: {
            size: 18, // Increase the font size of the legend
          },
          padding: 20, // Increase padding between legend items
          boxWidth: 40, // Increase the width of the color box
        },
      },
    },
  };

  // Example: Update data values dynamically or based on other logic
  useEffect(() => {
    // This is just an example of how you might update data values
    // For real use cases, you might fetch or calculate these values
    setDataValues(dataValues.map(() => Math.floor(Math.random() * 100))); // Example: Random numbers
  }, [labels.length]);

  return <Pie data={data} options={options} />;
};

export default CflTechnicalSkills;
