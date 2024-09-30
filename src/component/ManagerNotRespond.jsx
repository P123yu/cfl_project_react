import Lottie from "lottie-react";
import React from "react";
import { TfiFaceSad } from "react-icons/tfi";
import animationData from "../animation/ManagerAccept.json";

function ManagerNotRespond() {
  return (
    <div className="bg-blue-100 border-[1px] border-gray-500">
      <div className="div flex item-center space-x-2 border-b-2 border-gray-400 text-gray-700 w-[380px] ml-[500px] pt-5">
        <TfiFaceSad className="text-2xl font-bolder" />
        <p className="text-2xl text-center">
          <p>You Can't Fill Your Quarterly Info</p>
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1 ">
          <Lottie
            loop={false}
            animationData={animationData}
            style={{ height: 498, width: 600, marginTop: "-100px" }}
          />
        </div>
        <div className="col-span-1">
          <div className="div border-[2px] border-gray-500 rounded-2xl p-5 w-[500px] mt-32 bg-gray-100 ">
            <p className="text-2xl text-gray-700  my-2">
              Sorry Your Manager Not Accepted Your Response Till Now !!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerNotRespond;
