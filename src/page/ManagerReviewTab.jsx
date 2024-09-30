import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ManagerReview from "./ManagerReview";

function ManagerReviewTab() {
  const location = useLocation();
  console.log(location, "location");

  const empId = location?.state?.data?.empId;
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

  console.log(value, "Tab value");
  console.log(quarter, "Current quarter");

  return (
    <div className="bg-blue-100">
      <div className="head flex justify-between">
        <p className="text-3xl p-5 text-gray-600 ">CFL's Quarterly Rating</p>
      </div>

      <div className="tabs p-5 ml-5 border-b-2 border-black mb-2">
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
        {value === "Q1" && <ManagerReview empId={empId} quarter="Q1" />}
        {value === "Q2" && <ManagerReview empId={empId} quarter="Q2" />}
        {value === "Q3" && <ManagerReview empId={empId} quarter="Q3" />}
        {value === "Q4" && <ManagerReview empId={empId} quarter="Q4" />}
      </div>
    </div>
  );
}

export default ManagerReviewTab;
