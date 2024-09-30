import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import GoalSettingTrackerQuarterComp from "../component/GoalSettingTrackerQuarterComp";

function GoalSettingTrackerQuarter({ empId }) {
  //   const location = useLocation();
  //   const empId = location?.state?.data;
  //   console.log(empId);
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value, "value");

  return (
    <div>
      <p className="text-2xl text-center mt-5">Goal Setting Status</p>
      <div className="tabs p-3 ml-5">
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
                fontSize: "1rem",
              },
            }}
          >
            <Tab value="one" label="Quarter 1" />
            <Tab value="two" label="Quarter 2" />
            <Tab value="three" label="Quarter 3" />
            <Tab value="four" label="Quarter 4" />
            {/* <Tab value="annual" label="Annual" /> */}
          </Tabs>
        </Box>
      </div>
      <div className="" style={{ marginTop: "20px" }}>
        {value === "one" && (
          <GoalSettingTrackerQuarterComp empId={empId} quarter="Q1" />
        )}
        {value === "two" && (
          <GoalSettingTrackerQuarterComp empId={empId} quarter="Q2" />
        )}
        {value === "three" && (
          <GoalSettingTrackerQuarterComp empId={empId} quarter="Q3" />
        )}
        {value === "four" && (
          <GoalSettingTrackerQuarterComp empId={empId} quarter="Q4" />
        )}
      </div>
    </div>
  );
}

export default GoalSettingTrackerQuarter;
