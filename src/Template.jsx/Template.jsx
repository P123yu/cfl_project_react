import axios from "axios";
import { decodeJwt } from "jose";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useStore from "../component/ZustandStore";
import GoGetterImage from "../image/GoGetterImage.png";
import JoshMachine from "../image/JoshMachine.png";
import Kudos from "../image/Kudos.png";
import PatOnTheBack from "../image/PatOnTheBack.png";
import TeamPlayer from "../image/TeamPlayer.png";

function Template() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location, "location");
  const template = location?.state?.data1;

  const { jwtData } = useStore();

  const [cflPersonalInfo, setCflPersonalInfo] = useState("");

  const handleCflInfoDuringLogin = () => {
    const decodedCflEmail = decodeJwt(jwtData)?.sub || "";
    axios
      .get(`http://localhost:8080/cfl/getCflInfoDuringLogin/${decodedCflEmail}`)
      .then((res) => setCflPersonalInfo(res.data))
      .catch((error) => {
        Swal.fire({
          title: "data is not fetched",
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

    if (template === "Go-Getter") {
      imageFile = await convertImageToBlob(GoGetterImage);
    } else if (template === "Josh-Machine") {
      imageFile = await convertImageToBlob(JoshMachine);
    } else if (template === "Kudos") {
      imageFile = await convertImageToBlob(Kudos);
    } else if (template === "Pat-on-the-back") {
      imageFile = await convertImageToBlob(PatOnTheBack);
    } else if (template === "Team-Player") {
      imageFile = await convertImageToBlob(TeamPlayer);
    }

    if (imageFile) {
      formData.append("file", imageFile);
    }

    axios
      .post("http://localhost:8080/rewardsAndRecognition/create", formData)
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
        });
      });
  };

  return (
    <div className="pt-10 pl-[370px] cms-dashboard">
      {template === "Go-Getter" && (
        <div className="go-getter-template">
          <p className="text-3xl ml-[150px] text-gray-500">
            Go-Getter Template
          </p>
          <img
            src={GoGetterImage}
            className="w-[500px] rounded-lg ml-[30px]"
            alt="Go-Getter"
          />
          {submit ? (
            ""
          ) : (
            <button
              className="p-2 bg-blue-800 text-white ml-[245px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Josh-Machine" && (
        <div className="josh-machine-template">
          <p className="text-3xl ml-[110px] text-gray-500">
            Josh-Machine Template
          </p>
          <img
            src={JoshMachine}
            className="h-[400px] ml-[100px] rounded-lg"
            alt="Josh Machine"
          />
          {submit ? (
            ""
          ) : (
            <button
              className="p-2 bg-blue-800 text-white ml-[240px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Kudos" && (
        <div className="kudos-template">
          <p className="text-3xl ml-[200px] text-gray-500">Kudos Template</p>
          <img
            src={Kudos}
            className="h-[400px] ml-[50px] rounded-lg"
            alt="Kudos"
          />
          {submit ? (
            ""
          ) : (
            <button
              className="p-2 bg-blue-800 text-white ml-[270px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Pat-on-the-back" && (
        <div className="Pat-on-the-back-template">
          <p className="text-3xl ml-[150px] text-gray-500">
            Pat on the back Template
          </p>
          <img
            src={PatOnTheBack}
            className="h-[400px] rounded-lg"
            alt="Pat on the back"
          />
          {submit ? (
            ""
          ) : (
            <button
              className="p-2 bg-blue-800 text-white ml-[270px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
              onClick={handleSubmitRewardsAndRecognition}
            >
              submit
            </button>
          )}
        </div>
      )}

      {template === "Team-Player" && (
        <div className="team-player-template">
          <p className="text-3xl ml-[180px] text-gray-500">
            Team Player Template
          </p>
          <img
            src={TeamPlayer}
            className="h-[400px] rounded-lg ml-[100px]"
            alt="Team Player"
          />
          {submit ? (
            ""
          ) : (
            <>
              <button
                className="p-2 bg-blue-800 text-white ml-[270px] rounded-lg px-2 tracking-wide mt-5 hover:bg-red-500 transition-transform hover:scale-110"
                onClick={handleSubmitRewardsAndRecognition}
              >
                submit
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Template;
