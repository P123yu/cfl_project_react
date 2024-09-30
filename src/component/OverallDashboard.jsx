import React from "react";
import CflPersonalInfoGlobalDashboard from "./CflPersonalInfoGlobalDashboard";
import CflSkillsGlobalDashboard from "./CflSkillsGlobalDashboard";
import ManagerRatingGlobalDashboard from "./ManagerRatingGlobalDashboard";

function OverallDashboard() {
  return (
    <div className="bg-blue-50 p-10">
      <CflPersonalInfoGlobalDashboard />
      <ManagerRatingGlobalDashboard />
      <CflSkillsGlobalDashboard />
    </div>
  );
}

export default OverallDashboard;
