import React from "react";
import { useLocation } from "react-router-dom";
import GoalSettingTrackerQuarter from "../page/GoalSettingTrackerQuarter";
import ProbationTracker from "./ProbationTracker";

function Tracker() {
  const location = useLocation();
  const empId = location?.state?.data;
  return (
    <div className="p-10 bg-gray-50" style={{ width: "100vw" }}>
      <p className="text-center text-3xl mb-2">
        Tracking Goal Setting And Probation
      </p>
      <div className="trackGoals border-2 border-gray-700 p-2 rounded-xl">
        <GoalSettingTrackerQuarter empId={empId} />
      </div>
      <div className="trackProbations border-2 border-gray-700 mt-10 p-2 rounded-xl">
        <ProbationTracker empId={empId} />
      </div>
    </div>
  );
}

export default Tracker;
