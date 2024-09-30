import axios from "axios";
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

const CflOtherSkills = ({ empId, quarter }) => {
  const location = useLocation();
  // const empId = location?.state?.data?.empId;
  const [cflSkills, setCflSkills] = useState({});
  const [dataValues, setDataValues] = useState([]);

  useEffect(() => {
    if (empId) {
      axios
        .get(`http://localhost:8080/cflSkill/get/${empId}/${quarter}`)
        .then((res) => {
          const otherSkills = res.data.otherSkills || "";
          const parts = otherSkills.split(",").map((part) => part.trim());
          const labels = parts.filter(
            (part) =>
              part !== "" && !["L0", "L1", "L2", "L3", "L4"].includes(part)
          );
          setDataValues(new Array(labels.length).fill(0)); // Initialize dataValues based on labels
          setCflSkills({ ...res.data, otherSkills }); // Update cflSkills state
        })
        .catch((error) => {
          console.error("Error fetching skills:", error);
        });
    }
  }, [empId]);

  // Generate an array of random colors based on the number of labels
  const labels = cflSkills.otherSkills
    ? cflSkills.otherSkills
        .split(",")
        .map((part) => part.trim())
        .filter(
          (part) =>
            part !== "" && !["L0", "L1", "L2", "L3", "L4"].includes(part)
        )
    : [];

  const backgroundColors = labels.map(() => getRandomColor());

  // Define the data for the pie chart dynamically based on the state
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Primary Skills",
        data: dataValues,
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
            size: 18,
          },
          padding: 20,
          boxWidth: 40,
        },
      },
    },
  };

  // Example: Update data values dynamically or based on other logic
  useEffect(() => {
    if (dataValues.length > 0) {
      setDataValues(dataValues.map(() => Math.floor(Math.random() * 100))); // Example: Random numbers
    }
  }, [labels.length]);

  return <Pie data={data} options={options} />;
};

export default CflOtherSkills;
