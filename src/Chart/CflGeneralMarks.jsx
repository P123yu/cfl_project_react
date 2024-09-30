// import "chart.js/auto";
// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { useLocation } from "react-router-dom";

// const CflGeneralMarks = () => {
//   const location = useLocation();
//   const tenthMarks = location?.state?.data?.sscResult || 0;
//   const twelvethMarks = location?.state?.data?.hscResult || 0;
//   const graduationMarks = location?.state?.data?.underGraduateResult || 0;

//   const data = {
//     labels: ["10th", "12th", "Graduation"],
//     datasets: [
//       {
//         label: "Marks Status",
//         data: [tenthMarks, twelvethMarks, graduationMarks],
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 205, 86)",
//         ],
//         hoverOffset: 20,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         position: "bottom", // Position the legend at the bottom
//         labels: {
//           font: {
//             size: 14, // Customize font size of the legend labels
//           },
//           padding: 20, // Adjust padding between legend items
//           boxWidth: 40, // Adjust the width of the legend color box
//         },
//       },
//     },
//   };

//   return <Pie data={data} options={options} />;
// };

// export default CflGeneralMarks;

import "chart.js/auto";
import React from "react";
import { Bar } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

const CflGeneralMarks = () => {
  const location = useLocation();
  const tenthMarks = location?.state?.data?.sscResult || 0;
  const twelvethMarks = location?.state?.data?.hscResult || 0;
  const graduationMarks = location?.state?.data?.underGraduateResult || 0;

  const data = {
    labels: ["10th", "12th", "Graduation"],
    datasets: [
      {
        label: "Marks Status",
        data: [tenthMarks, twelvethMarks, graduationMarks],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top", // Position the legend at the top
        labels: {
          font: {
            size: 14, // Customize font size of the legend labels
          },
          padding: 20, // Adjust padding between legend items
          boxWidth: 20, // Adjust the width of the legend color box
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at zero
      },
    },
  };

  return (
    <div className="ml-32" style={{ height: "400px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CflGeneralMarks;
