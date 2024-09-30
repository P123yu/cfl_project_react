import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const steps = [
  "HR Sent an Email to the Manager",
  "Manager Acknowledged and Replied to HR",
  "Manager Sent a Follow-up Email to the CFL",
];

export default function GoalSettingTrackerQuarterComp({ empId, quarter }) {
  const [trackGoalSetting, setTrackGoalSetting] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (empId && quarter) {
      axios
        .get(`http://localhost:8080/goalSettingTracker/${empId}/${quarter}`)
        .then((res) => {
          setTrackGoalSetting(res?.data);
        })
        .catch(() => {
          Swal.fire({
            title: "Goal tracking does not exist for the selected quarter",
            icon: "warning",
          });
        });
    }
  }, [empId, quarter]);

  useEffect(() => {
    if (trackGoalSetting) {
      // Filter out steps that are completed (true)
      const updatedList = Object.values(trackGoalSetting).filter(
        (i) => i === true
      );

      // Update the active step based on the number of completed steps
      setActiveStep(updatedList.length);
    }
  }, [trackGoalSetting]);

  console.log(trackGoalSetting, "trackGoalSetting");

  return (
    <div className="mb-10" >
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
