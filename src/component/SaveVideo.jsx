import axios from "axios";
import React, { useState } from "react";
import memory from "../image/CreateVideo.png";

const SaveVideo = () => {
  const [link, setLink] = useState("");
  const [year, setYear] = useState("");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleYouTubeLink = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/videos/create", {
        videoLink: link,
        year: year,
      })
      .then((res) => alert("saved"));
  };

  return (
    <div className="pt-7 bg-gray-200 ">
      <div className="head flex items-center space-x-[150px]">
        <p className="text-4xl text-center text-gray-700 ml-[500px]">
          Create memorable video
        </p>
      </div>

      <div className="grid grid-cols-2 p-10 gap-10">
        <div className="col-span-1">
          <img src={memory} className="w-full h-[450px]" />
        </div>
        <div className="col-span-1 bg-blue-300  rounded-xl">
          <div className="title text-4xl font-semibold text-center mt-10">
            Create memorable moment
          </div>
          <div className=" mt-10  bg-yellow-200 p-5 px-10 ml-[150px] w-[350px]  rounded-xl">
            <div className="flex flex-col">
              <div className="year flex space-x-5 items-center my-2 ml-3">
                <p className="text-xl">Year</p>
                <input
                  type="text"
                  value={year}
                  onChange={handleYearChange}
                  placeholder="Enter year"
                  className="p-1 border-2 border-gray-700 outline-none rounded-md ml-2"
                />
              </div>

              <div className="text mt-2 ml-4">
                <p className="text-xl text-gray-900">Paste YouTube Link Here</p>
                <input
                  type="text"
                  className="p-2 w-[250px] outline-none border-2 border-gray-600 rounded-md"
                  onChange={handleYouTubeLink}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="p-1 px-2 mt-2 bg-blue-900 text-white ml-[100px] rounded-md hover:bg-red-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveVideo;
