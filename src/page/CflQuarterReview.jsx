import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import CflQuarterForm from "../component/CflQuarterForm";

function CflQuarterReview() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value, "value");

  return (
    <div>
      <p className="text-2xl p-5">Cfl Quarter Goal Setting</p>
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
            <Tab value="one" label="Quarter 1" />
            <Tab value="two" label="Quarter 2" />
            <Tab value="three" label="Quarter 3" />
            <Tab value="four" label="Quarter 4" />
            <Tab value="annual" label="Annual" />
          </Tabs>
        </Box>
      </div>
      <div className="" style={{ marginTop: "-20px" }}>
        {value === "one" && <CflQuarterForm />}
        {value === "two" && <CflQuarterForm />}
        {value === "three" && <CflQuarterForm />}
        {value === "four" && <CflQuarterForm />}
      </div>
    </div>
  );
}

export default CflQuarterReview;
