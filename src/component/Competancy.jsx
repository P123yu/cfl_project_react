import React from "react";
import { TiTick } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";

function Competancy() {
  const location = useLocation();
  console.log(location, "competancyLocation");
  const competancy = location?.state?.data;
  const potentialLevel = location?.state?.potentialLevel;
  const performanceLevel = location?.state?.performanceLevel;
  const talentLevel = location?.state?.talentLevel;
  const empId = location?.state?.data?.empId;
  console.log(competancy, "competancy");

  console.log(empId, "empId");

  const navigate = useNavigate();
  const handleShift = () => {
    const overAllRating = {
      potentialLevel: potentialLevel,
      performanceLevel: performanceLevel,
      talentLevel: talentLevel,
      empId: empId,
    };
    navigate("/lateral-shift", {
      state: { data: overAllRating },
    });
  };

  return (
    <div className="bg-blue-100 p-10" style={{ width: "100vw" }}>
      <p className="text-4xl text-gray-900 pt-2 text-center mb-3">
        Please Check Competancy
      </p>
      <div className="bg-yellow-200 p-10 text-xl rounded-2xl">
        <p className="font-bold text-2xl text-center">
          So, do you mean the resource has below competencies?
        </p>
        <div className="answer p-10">
          <div className="grid grid-cols-2 gap-28 ">
            <div className="col ml-[270px]">
              <div className="div my-2">
                <label>Consistent excellence</label>
              </div>
              <div className="div my-2">
                <label>Adaptability</label>
              </div>
              <div className="div my-2">
                <label>Leadership initiative</label>
              </div>

              <div className="div my-2">
                <label>Innovative problem solver</label>
              </div>

              <div className="div my-2">
                <label>Future-oriented</label>
              </div>
            </div>
            <div className="col">
              <div className="div my-2">
                <label>{competancy?.question1 || "NA"}</label>
              </div>

              <div className="div my-2">
                <label>{competancy?.question2 || "NA"}</label>
              </div>
              <div className="div my-2">
                <label>{competancy?.question3 || "NA"}</label>
              </div>
              <div className="div my-2">
                <label>{competancy?.question4 || "NA"}</label>
              </div>
              <div className="div my-2">
                <label>{competancy?.question5 || "NA"}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="confirm flex items-center space-x-2 bg-green-900 text-white w-[140px] p-2 ml-[550px] rounded-xl mt-[67px] hover:bg-red-800 hover:cursor-pointer">
        <TiTick className="text-3xl" />
        <button className="text-xl" onClick={handleShift}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Competancy;
