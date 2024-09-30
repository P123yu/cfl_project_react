import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { FaMedal } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";
import { PiMedalBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import RewardsAndRecognitionImage from "../image/RewardsAndRecognition.png";
import useStore from "./ZustandStore";

function RewardsAndRecognition() {
  const location = useLocation();
  console.log(location, "location");

  const { roleName } = useStore();
  // State to store window dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  const handleWorldOfThanks = () => {
    navigate("/world-of-thanks");
  };

  const viewRewardsAndRecognition = () => {
    navigate("/view-rewards-and-recognition");
  };

  const handleBravo=()=>{
    navigate("/bravo");
  }

  return (
    <div>
      <div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="home">
              <img
                src={RewardsAndRecognitionImage}
                alt="Rewards and Recognition"
              />
            </div>
          </div>
          <div className="col-span-2 ">
            <div
              className="view-Reward flex items-center space-x-2 rounded-xl p-2 bg-blue-800 text-xl w-[330px] text-white ml-[500px] mt-20 mb-20 transition-transform hover:scale-110 hover:bg-red-600 hover:cursor-pointer"
              onClick={viewRewardsAndRecognition}
            >
              <LuTrophy className="text-2xl" />
              <p>View Rewards And Recognition</p>
            </div>
            <p className="text-7xl font-bold text-center dash-text">
              Welcome To Rewards
            </p>
            <p className="text-7xl font-bold text-center dash-text">
              And Recognition
            </p>
            <p className="border-2 border-gray-500 w-[750px] mt-5 ml-20"></p>
            <div className="tag flex space-x-5 items-center mt-5 ml-[250px]">
              <div
                className="world-of-thanks  ml-20 flex items-center space-x-2 bg-blue-800 p-2 text-white p-2 text-xl rounded-md transition-transform hover:scale-110 hover:bg-red-600 hover:cursor-pointer"
                onClick={handleWorldOfThanks}
              >
                <PiMedalBold className="text-2xl" />
                <button className="">World Of Thanks</button>
              </div>
              {roleName == "ROLE_MANAGER" ? (
                <div className="world-of-thanks flex items-center space-x-2 bg-green-700 p-2 text-white p-2 text-xl rounded-md transition-transform hover:scale-110 hover:bg-blue-800" onClick={handleBravo}>
                  <FaMedal className="text-2xl" />
                  <button className="">Bravo</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="confetti">
        {/* Passing calculated width and height */}
        <ReactConfetti width={dimensions.width} height={dimensions.height} />
      </div>
    </div>
  );
}

export default RewardsAndRecognition;
