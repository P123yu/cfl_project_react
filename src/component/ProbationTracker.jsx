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

export default function ProbationTracker({ empId }) {
  const [trackProbation, setTrackProbation] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (empId) {
      axios
        .get(`http://localhost:8080/probationTracker/${empId}`)
        .then((res) => {
          setTrackProbation(res?.data);
        })
        .catch(() => {
          Swal.fire({
            title: "Probation tracking does not exist",
            icon: "warning",
          });
        });
    }
  }, [empId]);

  useEffect(() => {
    if (trackProbation) {
      // Filter out steps that are completed (true)
      const updatedList = Object.values(trackProbation).filter(
        (i) => i === true
      );

      // Update the active step based on the number of completed steps
      setActiveStep(updatedList.length);
    }
  }, [trackProbation]);

  console.log(trackProbation, "trackProbation");

  return (
    <div className="probation mb-10">
      <p className="text-2xl text-center my-10">Probation Ending Status</p>
      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={activeStep}
          sx={{
            "& .MuiStepConnector-line": {
              minHeight: "40px",
            },
          }}
          alternativeLabel
        >
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
