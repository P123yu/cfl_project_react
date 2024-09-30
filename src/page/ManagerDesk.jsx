import axios from "axios";
import { decodeJwt } from "jose";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { FaVideo } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Swal from "sweetalert2";
import useStore from "../component/ZustandStore";

function ManagerDesk() {
  const [formFieldChange, setFormFieldChange] = useState({
    managerId: "",
    managerName: "",
    managerEmail: "",
    managerDepartment: "",
    managerDesignation: "",
    managerLocation: "",
    managerFile: null,
  });

  const [imageSrc, setImageSrc] = useState(""); // Base64 image string
  const [fileName, setFileName] = useState(""); // File name to use
  const [fileInfo, setFileInfo] = useState(null); // File object created from Base64

  const location = useLocation();
  const particularCflInfo = location.state?.data;
  console.log(particularCflInfo, "particularCflInfo ++++");

  const [cflmanagerData, setCflmanagerData] = useState([]);
  const [managerInfo, setManagerInfo] = useState("");

  const { jwtData } = useStore();

  // Properly declaring and extracting the email
  const email = decodeJwt(jwtData)?.sub;

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8080/manager/${email}`)
        .then((res) => {
          setCflmanagerData(res.data);
          setManagerInfo(res.data);
        })
        .catch(() => {
          Swal.fire({
            title: "Email Not Found",
            icon: "error",
          });
        });
    }
  }, [email]);

  console.log(managerInfo, "managerInfo");

  const [cflInfo, setCflInfo] = useState([]);
  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8080/cfl/getAllCflByManagerEmail/${email}`)
        .then((res) => {
          setCflInfo(res.data);
        })
        .catch(() => {
          Swal.fire({
            title: "Cfl Email Not Found",
            icon: "error",
          });
        });
    }
  }, [email]);

  console.log(managerInfo, "managerInfo>>>>");

  const navigate = useNavigate();

  const handleMeetingResponse = () => {
    navigate("/fix_meeting_schedule");
  };

  return (
    <div className="p-10 cms-dashboard" style={{ width: "100vw" }}>
      <p className="text-2xl text-gray-600 mb-5 font-bold text-center border-b-2 border-gray-400 w-1/5 ml-[480px]">
        Manager Details
      </p>
      <div className="cfl-info">
        <div className="image flex space-x-10 items-center">
          <div className="flex flex-col" />
          <div className="head flex items-center space-x-[900px]">
            <div className="manager_image">
              <img
                src={`data:image/jpeg;base64,${managerInfo?.managerFileData}`}
                className="rounded-full w-32 h-32 border-2 border-gray-500"
              />
              <div className="manager_name text-xl">
                <p>{managerInfo?.managerName}</p>
              </div>
            </div>
            <div
              className="meeting-btn flex space-x-2 items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer"
              onClick={handleMeetingResponse}
              style={{ marginTop: "-50px" }}
            >
              <p>Meeting with Cfl</p>
              <FaVideo className="text-xl" />
            </div>
          </div>
        </div>
        <div className="info mt-5">
          <p className="text-2xl font-semibold text-gray-600 mt-5">
            Manager's Detail
          </p>
          <p className="border-[1px] border-gray-500 mt-2"></p>
          <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl">
            <div className="col-span-1">
              <div className="firstName flex flex-col">
                <label className="mb-1 text-lg">Employee Id*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
                  name="managerId"
                  value={managerInfo?.managerId}
                  readOnly
                />
              </div>
              <div className="cflEmail flex flex-col my-3">
                <label className="mb-1 text-lg">Department*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  name="managerDepartment"
                  value={managerInfo?.managerDepartment}
                  readOnly
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="middle-name flex flex-col">
                <label className="mb-1 text-lg">Manager Name*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  name="managerName"
                  value={managerInfo?.managerName}
                  readOnly
                />
              </div>
              <div className="empId flex flex-col my-3">
                <label className="mb-1 text-lg">Location</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  name="managerLocation"
                  value={managerInfo?.managerLocation}
                  readOnly
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="last-name flex flex-col">
                <label className="mb-1 text-lg">Manager Email*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  name="managerEmail"
                  value={managerInfo?.managerEmail}
                  readOnly
                />
                <div className="deptName flex flex-col my-3">
                  <label className="mb-1 text-lg">Designation</label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    name="managerDesignation"
                    value={managerInfo?.managerDesignation}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold text-gray-600 mt-6">
          CFLs assigned under this manager
        </p>
        <p className="border-[1px] border-gray-500 mt-2"></p>
      </div>

      <div className="bg-gray-100 mt-10 rounded-2xl">
        {cflInfo?.map((item, index) => (
          <div key={index}>
            <VerticalTimeline lineColor="blue">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  width: "350px",
                  marginLeft: "180px",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(33, 150, 243)",
                }}
                icon={
                  <img
                    src={`data:image/jpeg;base64,${item.fileData}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  <div className="flex items-center space-x-5">
                    <label className="text-lg">Employee Id:</label>
                    <p style={{ marginTop: "-2px" }}>{item.empId}</p>
                  </div>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <div className="flex items-center space-x-5">
                    <label className="text-lg">CFL's Name:</label>
                    <p style={{ marginTop: "-2px" }}>{item.cflFirstName}</p>
                  </div>
                </h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagerDesk;
