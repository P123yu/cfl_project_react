import axios from "axios";
import { decodeJwt } from "jose";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useStore from "../component/ZustandStore";

import AwesomePerformer from "../image/AwesomePerformer.png";
import BeyondTheCall from "../image/BeyondTheCall.png";
import BrightStart from "../image/BrightStart.png";
import EverReliable from "../image/EverReliable.png";
import FireFighter from "../image/FireFighter.png";
import GreatJob from "../image/GreatJob.png";
import IncrementalContribution from "../image/IncrementalContribution.png";

function ManagerTemplate() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location, "location");
  const template = location?.state?.data1;
  console.log(template, "template");

  const { jwtData } = useStore();

  const [cflPersonalInfo, setCflPersonalInfo] = useState("");

  const handleCflInfoDuringLogin = () => {
    const decodedCflEmail = decodeJwt(jwtData)?.sub || "";
    axios
      .get(`http://localhost:8080/cfl/getCflInfoDuringLogin/${decodedCflEmail}`)
      .then((res) => setCflPersonalInfo(res.data))
      .catch((error) => {
        Swal.fire({
          title: "Data is not fetched",
        });
      });
  };

  useEffect(() => {
    handleCflInfoDuringLogin();
  }, [jwtData]);

  const convertImageToBlob = async (imageSrc) => {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    const fileName = imageSrc.split("/").pop();
    return new File([blob], fileName, { type: blob.type });
  };

  const [submit, setSubmit] = useState(false);

  const handleSubmitRewardsAndRecognition = async () => {
    const formData = new FormData();
    formData.append("rewardsPersonName", location?.state?.data2);
    formData.append("message", location?.state?.data3);
    formData.append("messagedPersonName", cflPersonalInfo?.cflFirstName);

    let imageFile;

    if (template === "Awesome-Performer") {
      imageFile = await convertImageToBlob(AwesomePerformer);
    } else if (template === "Beyond-The-Call") {
      imageFile = await convertImageToBlob(BeyondTheCall);
    } else if (template === "Bright-Start") {
      imageFile = await convertImageToBlob(BrightStart);
    } else if (template === "Ever-Reliable") {
      imageFile = await convertImageToBlob(EverReliable);
    } else if (template === "Great-Job") {
      imageFile = await convertImageToBlob(GreatJob);
    } else if (template === "Fire-Fighter") {
      imageFile = await convertImageToBlob(FireFighter);
    } else if (template === "Incremental-Contribution") {
      imageFile = await convertImageToBlob(IncrementalContribution);
    }

    if (imageFile) {
      formData.append("file", imageFile);
    }

    axios
      .post("http://localhost:8080/rewardsAndRecognition/createBravo", formData)
      .then((res) => {
        setSubmit(true);
        Swal.fire({
          title: "Rewards And Recognition Successfully submitted",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error submitting rewards and recognition",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="pt-10 pl-[370px] cms-dashboard">
      {template === "Awesome-Performer" && (
        <div className="Awesome-Performer-template">
          <p className="text-3xl ml-[100px] text-gray-500">
            Awesome-Performer Template
          </p>
          <img
            src={AwesomePerformer}
            className="w-[500px] rounded-lg ml-[30px] h-[400px]"
            alt="Awesome-Performer"
          />
          {!submit && (
            <button
              className="p-2 bg-blue-800 text-white ml-[245px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Beyond-The-Call" && (
        <div className="Beyond-The-Call-template">
          <p className="text-3xl ml-[120px] text-gray-500">
            Beyond-The-Call Template
          </p>
          <img
            src={BeyondTheCall}
            className="h-[400px] ml-[100px] rounded-lg"
            alt="Beyond-The-Call"
          />
          {!submit && (
            <button
              className="p-2 bg-blue-800 text-white ml-[270px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Bright-Start" && (
        <div className="Bright-Start-template">
          <p className="text-3xl ml-[200px] text-gray-500">
            Bright-Start Template
          </p>
          <img
            src={BrightStart}
            className="h-[400px] ml-[120px] rounded-lg"
            alt="Bright-Start"
          />
          {!submit && (
            <button
              className="p-2 bg-blue-800 text-white ml-[285px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Ever-Reliable" && (
        <div className="Ever-Reliable-template">
          <p className="text-3xl ml-[150px] text-gray-500">
            Ever-Reliable Template
          </p>
          <img
            src={EverReliable}
            className="h-[400px] ml-[100px] rounded-lg"
            alt="Ever-Reliable"
          />
          {!submit && (
            <button
              className="p-2 bg-blue-800 text-white ml-[270px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Great-Job" && (
        <div className="Great-Job-template">
          <p className="text-3xl ml-[180px] text-gray-500">
            Great-Job Template
          </p>
          <img
            src={GreatJob}
            className="h-[400px] rounded-lg ml-[100px]"
            alt="Great-Job"
          />
          {!submit && (
            <button
              className="p-2 bg-blue-800 text-white ml-[270px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Fire-Fighter" && (
        <div className="Fire-Fighter-template">
          <p className="text-3xl ml-[200px] text-gray-500">
            Fire-Fighter Template
          </p>
          <img
            src={FireFighter}
            className="h-[400px] ml-[120px] rounded-lg"
            alt="Fire-Fighter"
          />
          {!submit && (
            <button
              className="p-2 bg-blue-800 text-white ml-[270px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Incremental-Contribution" && (
        <div className="Incremental-Contribution-template">
          <p className="text-3xl ml-[70px] text-gray-500">
            Incremental-Contribution Template
          </p>
          <img
            src={IncrementalContribution}
            className="h-[400px] ml-[90px] rounded-lg"
            alt="Incremental-Contribution"
          />
          {!submit && (
            <button
              className="p-2 bg-blue-800 text-white ml-[250px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ManagerTemplate;
