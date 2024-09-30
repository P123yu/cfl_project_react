import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import memory from "../image/memory.png";

const HrMemoryCreation = () => {
  const [files, setFiles] = useState([]);
  const [year, setYear] = useState("");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleUploadCertificates = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const sendData = async (formData) => {
    const url = "http://localhost:8080/memories/post/2023";

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      Swal.fire({
        title: "Memories Created Sucessfully",
        icon: "success",
      });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    sendData(formData);
  };

  const navigate = useNavigate();

  const handleViewMemory = () => {
    navigate("/view-memory");
  };

  const handleSaveVideo = () => {
    navigate("/save-video");
  };

  return (
    <div className="pt-10 pb-6 bg-gray-200 ">
      <div className="head flex items-center space-x-[150px]">
        <p className="text-4xl text-center text-gray-700 ml-[500px]">
          Create cherished memory
        </p>

        <div className="flex items-center space-x-10">
          <button
            className="p-2 bg-blue-900 text-white rounded-md hover:bg-green-700 transition-transform hover:scale-110"
            onClick={handleViewMemory}
          >
            View Memory
          </button>
          <button
            className="p-2 bg-blue-900 text-white rounded-md hover:bg-green-700 transition-transform hover:scale-110"
            onClick={handleSaveVideo}
          >
            Save Video
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 p-10 gap-10">
        <div className="col-span-1">
          <img src={memory} className="w-full " />
        </div>
        <div className="col-span-1 bg-blue-300  rounded-xl">
          <div className="title text-4xl font-semibold text-center mt-10">
            Create Memories
          </div>
          <div className="func mt-10  bg-yellow-200 p-5 px-10 ml-[150px] w-[350px]  rounded-xl">
            <div className="flex flex-col">
              <div className="year flex space-x-10 items-center my-2">
                <p className="text-xl">Year</p>
                <input
                  type="text"
                  value={year}
                  onChange={handleYearChange}
                  placeholder="Enter year"
                  className="p-1 border-2 border-gray-700 outline-none rounded-xl ml-2"
                />
              </div>

              <div className="fileUpload my-2">
                <p className="text-xl text-gray-500">
                  Create Multiple Memories
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleUploadCertificates}
                  disabled={!year}
                  className="mt-5"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="p-1 px-2 mt-2 bg-blue-900 text-white ml-[100px] rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrMemoryCreation;
