// import React from 'react'

// function QuarterChartDashboard() {
//   return (
//     <div>QuarterChartDashboard</div>
//   )
// }

// export default QuarterChartDashboard

// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import CflQuarterForm from "../component/CflQuarterForm";

// function CflQuarterDashboard() {
//   const [value, setValue] = useState("");
//   const [quarter, setQuarter] = useState("");

//   useEffect(() => {
//     const currentQuarter = getQuarter();
//     setQuarter(currentQuarter);
//     setValue(currentQuarter);
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   function getQuarter() {
//     const date = new Date();
//     const month = date.getMonth() + 1;

//     if (month >= 1 && month <= 3) {
//       return "Q4";
//     } else if (month >= 4 && month <= 6) {
//       return "Q1";
//     } else if (month >= 7 && month <= 9) {
//       return "Q2";
//     } else if (month >= 10 && month <= 12) {
//       return "Q3";
//     } else {
//       throw new Error("Invalid month: " + month);
//     }
//   }

//   console.log(value, "Tab value");
//   console.log(quarter, "Current quarter");

//   const location = useLocation();
//   const empId = location?.state?.data?.empId;
//   console.log(location, empId, "vvvvvvvvvv");

//   const navigate = useNavigate();

//   const handleRating = () => {
//     navigate("/rating-chart", { state: location?.state });
//   };

//   return (
//     <div>
//       <div className="head flex justify-between">
//         <p className="text-3xl p-5 text-gray-600">Cfl Quarter Goal Setting</p>
//         <p
//           className="bg-blue-800 p-2 rounded-xl h-10 mr-10 mt-2 text-white hover:bg-green-700 hover:cursor-pointer"
//           onClick={handleRating}
//         >
//           View Rating
//         </p>
//       </div>

//       <div className="tabs p-5 ml-5">
//         <Box sx={{ width: "100%" }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="secondary"
//             indicatorColor="secondary"
//             aria-label="secondary tabs example"
//             sx={{
//               "& .MuiTab-root": {
//                 fontWeight: "bold",
//                 fontSize: "1rem", // Adjust the size as needed
//               },
//             }}
//           >
//             <Tab value="Q1" label="Quarter 1" disabled={quarter !== "Q1"} />
//             <Tab value="Q2" label="Quarter 2" disabled={quarter !== "Q2"} />
//             <Tab value="Q3" label="Quarter 3" disabled={quarter !== "Q3"} />
//             <Tab value="Q4" label="Quarter 4" disabled={quarter !== "Q4"} />
//             <Tab value="annual" label="Annual" />
//           </Tabs>
//         </Box>
//       </div>
//       <div className="" style={{ marginTop: "-20px" }}>
//         {value === "Q1" && <CflQuarterForm props={empId} />}
//         {value === "Q2" && <CflQuarterForm props={empId} />}
//         {value === "Q3" && <CflQuarterForm props={empId} />}
//         {value === "Q4" && <CflQuarterForm props={empId} />}
//       </div>
//     </div>
//   );
// }

// export default CflQuarterDashboard;

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChartDashboard from "./ChartDashboard";

function CflQuarterDashboard() {
  const [value, setValue] = useState("");
  const [quarter, setQuarter] = useState("");

  useEffect(() => {
    const currentQuarter = getQuarter();
    setQuarter(currentQuarter);
    setValue(currentQuarter);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value, "Tab value");
  console.log(quarter, "Current quarter");

  function getQuarter() {
    const date = new Date();
    const month = date.getMonth() + 1;

    if (month >= 1 && month <= 3) {
      return "Q4";
    } else if (month >= 4 && month <= 6) {
      return "Q1";
    } else if (month >= 7 && month <= 9) {
      return "Q2";
    } else if (month >= 10 && month <= 12) {
      return "Q3";
    } else {
      throw new Error("Invalid month: " + month);
    }
  }

  const location = useLocation();
  const empId = location?.state?.data?.empId; // Ensure data is being passed correctly
  console.log(empId, "Employee ID");

  return (
    <div>
      <div className="head flex justify-between">
        <p className="text-3xl p-5 text-gray-600">CFL Dashboard</p>
      </div>

      <div className="tabs p-5 ml-5">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            sx={{
              "& .MuiTab-root": {
                fontWeight: "bold",
                fontSize: "1rem", // Adjust the size as needed
              },
            }}
          >
            <Tab value="Q1" label="Quarter 1" />
            <Tab value="Q2" label="Quarter 2" />
            <Tab value="Q3" label="Quarter 3" />
            <Tab value="Q4" label="Quarter 4" />
            <Tab value="annual" label="Annual" />
          </Tabs>
        </Box>
      </div>

      <div className="" style={{ marginTop: "-20px" }}>
        {value === "Q1" && <ChartDashboard empId={empId} quarter="Q1" />}
        {value === "Q2" && <ChartDashboard empId={empId} quarter="Q2" />}
        {value === "Q3" && <ChartDashboard empId={empId} quarter="Q3" />}
        {value === "Q4" && <ChartDashboard empId={empId} quarter="Q4" />}
      </div>
    </div>
  );
}

export default CflQuarterDashboard;
