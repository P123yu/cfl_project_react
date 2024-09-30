// // import axios from "axios";
// // import "chart.js/auto";
// // import React, { useEffect, useState } from "react";
// // import { Pie } from "react-chartjs-2";
// // import { useLocation } from "react-router-dom";

// // const RatingChart = () => {
// //   const location = useLocation();
// //   const empId = location?.state?.data?.empId || 0;

// //   const [rating, setRating] = useState(null); // Initialize with null

// //   useEffect(() => {
// //     if (empId) {
// //       axios
// //         .get(`http://localhost:8080/managerRating/get/${empId}`)
// //         .then((res) => setRating(res.data))
// //         .catch((error) => console.error("Error fetching rating:", error));
// //     }
// //   }, [empId]); // Add empId to the dependency array to trigger useEffect on change

// //   const ratings = rating?.newRating ? rating.newRating.split(",") : []; // Conditional split

// //   let potential = ratings[0] || 0; // Fallback if ratings[0] is undefined
// //   let performance = ratings[1] || 0; // Fallback if ratings[1] is undefined

// //   const data = {
// //     labels: ["Potential", "Performance"],
// //     datasets: [
// //       {
// //         label: "Marks Status",
// //         data: [potential, performance],
// //         backgroundColor: [
// //           "rgb(255, 99, 132)",
// //           "rgb(54, 162, 235)",
// //           "rgb(255, 205, 86)",
// //         ],
// //         hoverOffset: 20,
// //       },
// //     ],
// //   };

// //   const options = {
// //     plugins: {
// //       legend: {
// //         position: "bottom", // Position the legend at the bottom
// //         labels: {
// //           font: {
// //             size: 14, // Customize font size of the legend labels
// //           },
// //           padding: 20, // Adjust padding between legend items
// //           boxWidth: 40, // Adjust the width of the legend color box
// //         },
// //       },
// //     },
// //   };

// //   return (
// //     <div>
// //       {rating ? (
// //         <Pie data={data} options={options} />
// //       ) : (
// //         <p>Loading chart data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default RatingChart;

// import axios from "axios";
// import "chart.js/auto";
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2"; // Import Bar component
// import { useLocation } from "react-router-dom";

// const RatingChart = () => {
//   const location = useLocation();
//   const empId = location?.state?.data?.empId || 0;

//   const [rating, setRating] = useState(null); // Initialize with null

//   useEffect(() => {
//     if (empId) {
//       axios
//         .get(`http://localhost:8080/managerRating/get/${empId}`)
//         .then((res) => setRating(res.data))
//         .catch((error) => console.error("Error fetching rating:", error));
//     }
//   }, [empId]); // Add empId to the dependency array to trigger useEffect on change

//   const ratings = rating?.newRating ? rating.newRating.split(",") : []; // Conditional split

//   let potential = ratings[0] || 0; // Fallback if ratings[0] is undefined
//   let performance = ratings[1] || 0; // Fallback if ratings[1] is undefined

//   const data = {
//     labels: ["Potential", "Performance"],
//     datasets: [
//       {
//         label: "Marks Status",
//         data: [potential, performance],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.6)",
//           "rgba(54, 162, 235, 0.6)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//         ],
//         borderWidth: 1,
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
//     scales: {
//       y: {
//         beginAtZero: true, // Start y-axis at zero
//         title: {
//           display: true,
//           text: 'Rating', // Label for the y-axis
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Categories', // Label for the x-axis
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       {rating ? (
//         <Bar data={data} options={options} /> // Render Bar chart instead of Pie chart
//       ) : (
//         <p>Loading chart data...</p>
//       )}
//     </div>
//   );
// };

// export default RatingChart;

import axios from "axios";
import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const RatingChart = ({ empId, quarter }) => {
  //   const location = useLocation();
  //   const empId = location?.state?.data?.empId || 0;

  const [rating, setRating] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/managerRating/get/${empId}/${quarter}`)
      .then((res) => setRating(res.data))
      .catch((error) => console.error("Error fetching rating:", error));
  }, []);

  const ratings = rating?.newRating ? rating.newRating.split(",") : [];

  let potential = ratings[0] || 0;
  let performance = ratings[1] || 0;

  const data = {
    labels: ["Potential", "Performance"],
    datasets: [
      {
        label: "Rating Status",
        data: [potential, performance],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 18,
          },
          padding: 30,
          boxWidth: 50,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Rating",
          font: {
            size: 18,
          },
        },
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Categories",
          font: {
            size: 14,
          },
        },
        ticks: {
          font: {
            size: 16,
          },
        },
      },
    },
    maintainAspectRatio: false, // Allow flexible chart sizing
  };

  return (
    <div style={{ width: "800px", height: "350px", marginLeft: "-200px" }}>
      {rating ? (
        <Bar data={data} options={options} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default RatingChart;
