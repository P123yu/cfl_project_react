import Lottie from "lottie-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../animation/ManagerAccept.json";

function MentorsLogin() {
  
  return (
    <div className="bg-blue-100" style={{ height: "100vh" }}>
      <p className="text-2xl text-center border-b-2 border-gray-400 text-gray-400 w-1/4 ml-[500px] pt-5">
        Manager Response To CFL's
      </p>
      <div className="grid grid-cols-2">
        <div className="col-span-1 ">
          <Lottie
            loop={false}
            animationData={animationData}
            style={{ height: 550, width: 600, marginTop: "-20px" }}
          />
        </div>
        <div className="col-span-1">
          <div className="div border-[2px] border-gray-300 rounded-2xl p-5 w-[500px] mt-52 bg-gray-100 ">
            <p className="text-2xl text-gray-500  my-5">
              Sorry Your Manager Not Accepted Your Response Till Now !!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorsLogin;
