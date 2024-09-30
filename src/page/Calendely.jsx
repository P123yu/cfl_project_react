import Lottie from "lottie-react";
import React from "react";
import { PopupButton } from "react-calendly";
import animationData from "../animation/meeting.json";

const Calendely = () => {
  return (
    <div style={{ backgroundColor: " rgba(200, 200, 100, 0.4)" }}>
      <p className="text-center text-3xl text-blue-900 pt-5">
        Schedule A Meeting With CFL's
      </p>
      <p className="border-2 border-b-black w-[500px] ml-[435px]"></p>
      <div className="meeting flex justify-center items-start mt-5 space-x-8">
        <div className="animation">
          <Lottie
            loop={true}
            animationData={animationData}
            style={{ height: 400, width: 600 }}
          />
        </div>

        <div className="calendly-widget">
          {/* <PopupWidget
            url="https://calendly.com/piyushsinghlkr2002"
            rootElement={document.getElementById("root")}
            text="Click here to schedule"
            textColor="#ffffff"
            color="#00a2ff"
          
          /> */}
          <div
            className="div bg-blue-900 text-white rounded-xl text-center hover:bg-green-700 hover:cursor-pointer"
            style={{
              marginLeft: "-450px",
              marginTop: "440px",
              padding: "10px",
              width: "250px",
            }}
          >
            <PopupButton
              url="https://calendly.com/cmsfutureleaders/cms-future-leaders"
              rootElement={document.getElementById("root")}
              text="Click here to schedule!"
            />
          </div>
          <div className="div pt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Calendely;
