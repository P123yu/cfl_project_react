// import axios from "axios";
// import "chart.js/auto";
// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { useLocation } from "react-router-dom";
// import Swal from "sweetalert2";

// // Function to generate a random color
// const getRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// const CflPrimarySkills = ({ empId, quarter }) => {
//   const location = useLocation();
//   // const empId = location?.state?.data?.empId;
//   const [cflSkills, setCflSkills] = useState({});
//   const [dataValues, setDataValues] = useState([]);

//   console.log(empId, "chart empId");

//   useEffect(() => {
//     if (empId) {
//       axios
//         .get(`http://localhost:8080/cflSkill/get/${empId}/${quarter}`)
//         .then((res) => {
//           const primarySkills = res.data.primarySkills || "";
//           const parts = primarySkills.split(",").map((part) => part.trim());
//           const labels = parts.filter(
//             (part) =>
//               part !== "" && !["L0", "L1", "L2", "L3", "L4"].includes(part)
//           );
//           setDataValues(new Array(labels.length).fill(0)); // Initialize dataValues based on labels
//           setCflSkills({ ...res.data, primarySkills }); // Update cflSkills state
//         })
//         .catch((error) => {
//           console.error("Error fetching skills:", error);
//           Swal.fire({
//             title: "primary data is not present",
//           });
//         });
//     }
//   }, [empId]);

//   // Generate an array of random colors based on the number of labels
//   const labels = cflSkills.primarySkills
//     ? cflSkills.primarySkills
//         .split(",")
//         .map((part) => part.trim())
//         .filter(
//           (part) =>
//             part !== "" && !["L0", "L1", "L2", "L3", "L4"].includes(part)
//         )
//     : [];

//   const backgroundColors = labels.map(() => getRandomColor());

//   // Define the data for the pie chart dynamically based on the state
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Primary Skills",
//         data: dataValues,
//         backgroundColor: backgroundColors,
//         hoverOffset: 20,
//       },
//     ],
//   };

//   // Options to remove the tooltip and customize the legend
//   const options = {
//     plugins: {
//       tooltip: {
//         enabled: false, // Disable the tooltip
//       },
//       legend: {
//         display: true,
//         position: "bottom", // Position the legend at the bottom
//         labels: {
//           font: {
//             size: 18, // Increase the font size of the legend
//           },
//           padding: 20, // Increase padding between legend items
//           boxWidth: 40, // Increase the width of the color box
//         },
//       },
//     },
//   };

//   // Example: Update data values dynamically or based on other logic
//   useEffect(() => {
//     if (dataValues.length > 0) {
//       setDataValues(dataValues.map(() => Math.floor(Math.random() * 100))); // Example: Random numbers
//     }
//   }, [labels.length]);

//   return <Pie data={data} options={options} />;
// };

// export default CflPrimarySkills;
// import axios from "axios";
// import "chart.js/auto";
// import { Bar } from "react-chartjs-2";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Swal from "sweetalert2";

// const CflPrimarySkills = ({ empId, quarter }) => {
//   const [cflSkills, setCflSkills] = useState([]);
//   const [dataValues, setDataValues] = useState([]);

//   useEffect(() => {
//     if (empId) {
//       axios
//         .get(`http://localhost:8080/cflSkill/get/${empId}/${quarter}`)
//         .then((res) => {
//           const { primarySkills } = res.data;

//           // Extract skills and levels
//           const skillsArray = primarySkills.split(",").map((skill) => {
//             const [skillName, level] = skill.split("-");
//             return {
//               name: skillName,
//               level: getLevelValue(level), // Convert level to numeric value
//             };
//           });

//           setCflSkills(skillsArray);
//           setDataValues(skillsArray.map(skill => skill.level));
//         })
//         .catch((error) => {
//           console.error("Error fetching skills:", error);
//           Swal.fire({
//             title: "Primary data is not present",
//             icon: "error",
//           });
//         });
//     }
//   }, [empId, quarter]);

//   // Function to convert levels to numeric values
//   const getLevelValue = (level) => {
//     switch (level) {
//       case "L0":
//         return 20;
//       case "L1":
//         return 40;
//       case "L2":
//         return 60;
//       case "L3":
//         return 80;
//       case "L4":
//         return 100;
//       default:
//         return 0; // Handle unexpected levels
//     }
//   };

//   const data = {
//     labels: cflSkills.map(skill => skill.name), // Skill names as labels
//     datasets: [
//       {
//         label: "Skill Levels",
//         data: dataValues, // Numeric values for the chart
//         backgroundColor: "rgba(54, 162, 235, 0.6)", // Color for the bars
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true, // Start y-axis at zero
//         ticks: {
//           stepSize: 20, // Set tick step size
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <h3>Primary Skills Bar Chart</h3>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default CflPrimarySkills;

import axios from "axios";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Swal from "sweetalert2";

const CflPrimarySkills = ({ empId, quarter }) => {
  const [cflSkills, setCflSkills] = useState([]);
  const [dataValues, setDataValues] = useState([]);

  useEffect(() => {
    if (empId) {
      axios
        .get(`http://localhost:8080/cflSkill/get/${empId}/${quarter}`)
        .then((res) => {
          const { primarySkills } = res.data;

          // Extract skills and levels
          const skillsArray = primarySkills.split(",").map((skill) => {
            const [skillName, level] = skill.split("-");
            return {
              name: skillName,
              level: getLevelValue(level), // Convert level to numeric value
            };
          });

          setCflSkills(skillsArray);
          setDataValues(skillsArray.map((skill) => skill.level));
        })
        .catch((error) => {
          console.error("Error fetching skills:", error);
          Swal.fire({
            title: "Primary data is not present",
            icon: "error",
          });
        });
    }
  }, [empId, quarter]);

  // Function to convert levels to numeric values
  const getLevelValue = (level) => {
    switch (level) {
      case "L0":
        return 20;
      case "L1":
        return 40;
      case "L2":
        return 60;
      case "L3":
        return 80;
      case "L4":
        return 100;
      default:
        return 0; // Handle unexpected levels
    }
  };

  // Array of colors for the bars
  const barColors = [
    "rgba(255, 99, 132, 1)", // Color for the first bar
    "rgba(54, 162, 235, 1)", // Color for the second bar
    "rgba(255, 205, 86, 1)", // Color for the third bar
    "rgba(75, 192, 192, 1)", // Color for the fourth bar
    "rgba(153, 102, 255, 1)", // Color for the fifth bar
  ];

  const data = {
    labels: cflSkills.map((skill) => skill.name), // Skill names as labels
    datasets: [
      {
        label: "Skill Levels",
        data: dataValues, // Numeric values for the chart
        backgroundColor: barColors.slice(0, dataValues.length), // Use different colors for each bar
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at zero
        ticks: {
          stepSize: 20, // Set tick step size
        },
      },
    },
  };

  return (
    <div className="ml-32" style={{ height: "370px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CflPrimarySkills;
