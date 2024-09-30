// import "chart.js/auto";
// import React from "react";
// import { Pie } from "react-chartjs-2";

// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [300, 50, 100],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//       ],
//       hoverOffset: 4,
//     },
//   ],
// };

// const config = {
//   type: "pie",
//   data: data,
// };

// const EmailStatusChart = () => {
//   return <Pie data={data} />;
// };

// export default EmailStatusChart;

// import axios from "axios";
// import "chart.js/auto";
// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";

// // EmailStatusChart component
// const EmailStatusChart = () => {
//   const [acceptedNumber, setAcceptedNumber] = useState(0);
//   const [declinedNumber, setDeclinedNumber] = useState(0);
//   const [requestNumber, setRequestNumber] = useState(0);

//   // Fetch accepted number
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/cfl/accept/piyushmnr123@gmail.com")
//       .then((res) => setAcceptedNumber(res.data?.split(",").length || 0))
//       .catch((error) =>
//         console.error("Error fetching accepted number:", error)
//       );
//   }, []);

//   // Fetch declined number
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/cfl/decline/piyushmnr123@gmail.com")
//       .then((res) => setDeclinedNumber(res.data?.split(",").length || 0)) // Assuming you need the length of the response
//       .catch((error) =>
//         console.error("Error fetching declined number:", error)
//       );
//   }, []);

//   // Fetch request number (if applicable)
//   //   useEffect(() => {
//   //     axios
//   //       .get("http://localhost:8080/cfl//piyushmnr123@gmail.com") // Adjust the URL if necessary
//   //       .then((res) => setRequestNumber(res.data?.split(",").length || 0))
//   //       .catch((error) => console.error("Error fetching request number:", error));
//   //   }, []);

//   // Define the data for the pie chart dynamically based on the state
//   const data = {
//     labels: ["Accepted", "Declined", "NoOfRequest"], // Custom labels for each segment
//     datasets: [
//       {
//         label: "Email Status",
//         data: [acceptedNumber, declinedNumber, 100], // Use state values here
//         backgroundColor: [
//           "rgb(255, 99, 132)", // Color for 'Accepted'
//           "rgb(54, 162, 235)", // Color for 'Declined'
//           "rgb(255, 205, 86)", // Color for 'NoOfRequest'
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   return <Pie data={data} />;
// };

// export default EmailStatusChart;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// function EmailStatusChart() {
//   const location = useLocation();
//   const empId = location?.state?.data?.empId || 0;
//   const emailAcceptance = location?.state?.data?.emailAcceptance || "";
//   const emailDeclined = location?.state?.data?.emailDeclined || "";
//   const [totalEmailRequest, setTotalEmailRequest] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/cfl/getByMailHistoryByEmpId/${empId}`)
//       .then((res) => res?.data?.length);
//   }, []);
//   return <div></div>;
// }

// export default EmailStatusChart;

import axios from "axios";
import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

const EmailStatusChart = () => {
  const location = useLocation();
  const empId = location?.state?.data?.empId || 0;
  const emailAcceptance =
    location?.state?.data?.emailAcceptance?.split(",").length || 0;
  const emailDeclined =
    location?.state?.data?.emailDeclined?.split(",").length || 0;
  const [totalEmailRequest, setTotalEmailRequest] = useState(0);

  console.log(totalEmailRequest, emailAcceptance, emailDeclined);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cfl/getByMailHistoryByEmpId/${empId}`)
      .then((res) => setTotalEmailRequest(res?.data?.length));
  }, []);

  const data = {
    labels: ["TotalEmailRequested", "EmailAccepted", "EmailDeclined"],
    datasets: [
      {
        label: "Marks Status",
        data: [totalEmailRequest, emailAcceptance, emailDeclined],
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

  return <Pie data={data} options={options} />;
};

export default EmailStatusChart;
