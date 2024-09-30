import axios from "axios";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const NoOfRequestMail = () => {
  const [mailRequests, setMailRequests] = useState({});
  const location = useLocation();
  console.log(location, "location");
  const empId = location?.state?.data?.empId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/cfl/getByMailHistoryByEmpId/${empId}`
        );
        const data = response.data;

        // Initialize counts for each month
        const months = [
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
        ];
        const counts = months.reduce((acc, month) => {
          acc[month] = 0;
          return acc;
        }, {});

        // Count mail requests per month using if-else conditions
        data.forEach((item) => {
          const monthIndex = new Date(item.mailDate).getMonth();
          const monthName = months[monthIndex];

          if (monthName in counts) {
            counts[monthName]++;
          } else {
            console.error(`Unexpected month name: ${monthName}`);
          }
        });

        setMailRequests(counts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Convert counts object to array and sort by month
  const months = [
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
  ];

  const sortedMailRequests = months.map((month) => ({
    month,
    count: mailRequests[month] || 0,
  }));

  // Prepare data for Chart.js
  const labels = sortedMailRequests.map(({ month }) => month);
  const data = sortedMailRequests.map(({ count }) => count);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Mail Requests",
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2, // Reduce the thickness of the line
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h1>Mail Requests Per Month</h1>

      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default NoOfRequestMail;
