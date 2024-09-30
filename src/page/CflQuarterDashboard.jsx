import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CflQuarterForm from "../component/CflQuarterForm";
import ManagerNotRespond from "../component/ManagerNotRespond";

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

  const location = useLocation();
  const empId = location?.state?.data?.empId;
  console.log(location, empId, "vvvvvvvvvv");

  const [
    quarterStatusBaseOnManagerAction,
    setQuarterStatusBaseOnManagerAction,
  ] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/cfl/getParticularCflByEmpId/${empId}`)
      .then((res) => {
        console.log(res.data);
        setQuarterStatusBaseOnManagerAction(res?.data?.cflMgrQuarterStatus);
      });
  });

  const navigate = useNavigate();

  console.log(
    quarterStatusBaseOnManagerAction,
    "quarterStatusBaseOnManagerAction....."
  );

  return (
    <div className="bg-blue-50">
      <div className="head flex justify-between">
        <p className="text-3xl p-5 text-gray-600">
          CFL's Quarterly Goal Setting
        </p>
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
            <Tab value="Q1" label="Quarter 1" disabled={quarter !== "Q1"} />
            <Tab value="Q2" label="Quarter 2" disabled={quarter !== "Q2"} />
            <Tab value="Q3" label="Quarter 3" disabled={quarter !== "Q3"} />
            <Tab value="Q4" label="Quarter 4" disabled={quarter !== "Q4"} />
            <Tab value="annual" label="Annual" disabled={quarter !== "Q1"} />
          </Tabs>
        </Box>
      </div>
      <div className="" style={{ marginTop: "-20px" }}>
        {quarterStatusBaseOnManagerAction === false ? (
          <>
            {value === "Q1" && <CflQuarterForm empId={empId} quarter="Q1" />}
            {value === "Q2" && <CflQuarterForm empId={empId} quarter="Q2" />}
            {value === "Q3" && <CflQuarterForm empId={empId} quarter="Q3" />}
            {value === "Q4" && <CflQuarterForm empId={empId} quarter="Q4" />}
          </>
        ) : (
          <ManagerNotRespond />
        )}
      </div>
    </div>
  );
}

export default CflQuarterDashboard;
