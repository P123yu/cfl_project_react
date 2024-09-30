import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ReactPlayer from "react-player";
import Swal from "sweetalert2";

function Video() {
  const [videoData, setVideoData] = useState("");
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const options1 = [
    "Select",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const defaultOption1 = options1[0];

  const handleSelect = (selectedOption) => {
    setYear(`${selectedOption.value}`);
  };

  // useEffect(() => {
  //   if (year) {
  //     axios
  //       .get(`http://localhost:8080/videos/get/${year}`)
  //       .then((res) => {
  //         setVideoData(res?.data[0]);
  //       })
  //       .catch((err) => {
  //         Swal.fire({
  //           title: "That Year Video Is Not Found",
  //         });
  //       });
  //   }
  // }, [year]);

  useEffect(() => {
    if (year !== "") {
      axios
        .get(`http://localhost:8080/videos/get/${year}`)
        .then((res) => setVideoData(res?.data[0]))
        .catch((error) => {
          console.error("Error fetching data:", error);
          Swal.fire({
            title: "Not Any Memory Found",
          });
        });
    }
  }, [year]);

  return (
    <div className="div cms-dashboard">
      {videoData?.year ? (
        <p className="text-5xl text-center pt-10 font-bold text-blue-800">
          CFL's {`${videoData?.year}`} Video
        </p>
      ) : (
        <p className="text-5xl text-center pt-10 font-bold text-blue-800">
          CFL's {year} Video Not Found
        </p>
      )}
      <div className="dropdown flex items-center gap-10 ml-[540px] mt-5">
        <p className="text-2xl text-gray-700">Select Year</p>
        <Dropdown
          options={options1}
          onChange={handleSelect}
          value={defaultOption1}
          placeholder="Select an option"
        />
      </div>
      <div className="ml-[370px] mt-[40px]">
        <ReactPlayer url={videoData?.videoLink} />
      </div>
    </div>
  );
}

export default Video;
