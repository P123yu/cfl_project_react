// import "chart.js/auto";
// import React, { useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { useLocation } from "react-router-dom";

// const CflSkillsChart = () => {
//   const location = useLocation();
//   console.log(location, "location");
//   const empId = location?.state?.data?.empId;
//   const [acceptedNumber, setAcceptedNumber] = useState(1);
//   const [declinedNumber, setDeclinedNumber] = useState(1);
//   const [requestNumber, setRequestNumber] = useState(1);

//   // Define the data for the pie chart dynamically based on the state
//   const data = {
//     labels: ["Accepted", "Declined", "NoOfRequest"], // Custom labels for each segment
//     datasets: [
//       {
//         label: "Email Status",
//         data: [acceptedNumber, declinedNumber, requestNumber], // Use state values here
//         backgroundColor: [
//           "rgb(255, 99, 132)", // Color for 'Accepted'
//           "rgb(54, 162, 235)", // Color for 'Declined'
//           "rgb(255, 205, 86)", // Color for 'NoOfRequest'
//         ],
//         hoverOffset: 50,
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

//   return <Pie data={data} options={options} />;
// };

// export default CflSkillsChart;
