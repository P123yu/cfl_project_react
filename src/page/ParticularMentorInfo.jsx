import axios from "axios";
import { decodeJwt } from "jose";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { FaVideo } from "react-icons/fa";
// import { FcFeedback } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Swal from "sweetalert2";
import useStore from "../component/ZustandStore";

function ParticularMentorInfo() {
  const [formFieldChange, setFormFieldChange] = useState({
    mentorId: "",
    empId: "",
    mentorName: "",
    mentorEmail: "",
    mentorDepartment: "",
    mentorDesignation: "",
    mentorLocation: "",
    mentorFile: null,
  });

  const [imageSrc, setImageSrc] = useState(""); // Base64 image string
  const [fileName, setFileName] = useState(""); // File name to use
  const [fileInfo, setFileInfo] = useState(null); // File object created from Base64

  const location = useLocation();
  const particularCflInfo = location.state?.data;
  console.log(particularCflInfo, "particularCflInfo ++++");

  //   console.log(dateValue, "dateValue..");
  //   console.log(imageSrc, "imageSrc???");

  const [cflMentorData, setCflMentorData] = useState([]);

  const [mentorInfo, setMentorInfo] = useState("");
  const [cflInfo, setCflInfo] = useState([]);
  const { mentorEmail, jwtData } = useStore();
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/mentor/getMentorEmail/${mentorEmail}`)
  //     .then((res) => {
  //       setCflMentorData(res.data);
  //       setMentorInfo(res.data[0]);
  //     });
  // }, []);

  useEffect(() => {
    if (jwtData) {
      const decoded = decodeJwt(jwtData);
      // setRoleName(decoded?.sub || []);
      fetchMentorEmailStatusFromRegister(decoded?.sub || []);
    }
  }, [jwtData]);

  const fetchMentorEmailStatusFromRegister = (email) => {
    axios
      .get(`http://localhost:8080/mentor/${email}`)
      .then((res) => {
        setMentorInfo(res.data.mentor);
        setCflInfo(res.data.cflList);
      })
      .catch((error) => {
        console.log("new error");
        Swal.fire("No Any Information Found!!!");
      });
  };

  console.log(mentorInfo, "mentorInfo>>>>");

  //   useEffect(()=>{
  //       filterMentor();
  //   },[cflMentorData])

  //   const filterMentor=()=>{

  //   }

  const navigate = useNavigate();

  const handleMeetingResponse = () => {
    navigate("/fix_meeting_schedule");
  };

  const handleCflFeedback = () => {
    navigate("/seeAllFeedback", { state: { data: mentorInfo?.mentorEmail } });
  };

  //, { state: { data: particularCflInfo } }

  return (
    <div className="p-10 cms-dashboard" style={{ width: "100vw" }}>
      <p className="text-2xl text-gray-600 mb-5 font-bold text-center border-b-2 border-gray-600 w-1/4 ml-[480px]">
        Mentor-Mentee Information
      </p>
      <div className="cfl-info">
        <div className="image flex space-x-10 items-center">
          <div className="flex flex-col" />
          <div className="head flex items-center space-x-[900px]">
            <div className="mentor_image">
              <img
                src={`data:image/jpeg;base64,${mentorInfo?.mentorFileData}`}
                className="rounded-full w-32 h-32 border-2 border-gray-500"
              />
              <div className="mentor_name text-xl">
                <p>{mentorInfo?.mentorName}</p>
              </div>
            </div>
            {/* <div className="btn flex items-center space-x-5"> */}
            {/* <div
                className="meeting-btn flex space-x-2 items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer"
                onClick={handleCflFeedback}
                style={{ marginTop: "-50px" }}
              >
                <p>FeedBack From CFL's</p>
                <FcFeedback className="text-xl" />
              </div> */}
            <div
              className="meeting-btn flex space-x-2  items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer "
              onClick={handleMeetingResponse}
              style={{ marginTop: "-50px" }}
            >
              <p>Meeting with Mentee</p>
              <FaVideo className="text-xl" />
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="info mt-5">
          <p className="text-2xl font-semibold text-gray-700 mt-5">
            Mentor's Detail
          </p>
          <p className="border-[1px] border-gray-600 mt-2"></p>
          <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-600 p-6 rounded-xl">
            <div className="col-span-1 ">
              <div className="firstName flex flex-col">
                <label className="mb-1 text-lg ">Employee Id*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  //   onChange={handleOnChange}
                  name="mentorId"
                  value={mentorInfo?.mentorId}
                />
              </div>
              <div className="cflEmail flex flex-col my-3">
                <label className="mb-1 text-lg">Department*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  //   onChange={handleOnChange}
                  name="mentorDepartment"
                  value={mentorInfo?.mentorDepartment}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="middle-name flex flex-col">
                <label className="mb-1 text-lg">Mentor Name*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  //   onChange={handleOnChange}
                  name="mentorName"
                  value={mentorInfo?.mentorName}
                />
              </div>
              <div className="empId flex flex-col my-3">
                <label className="mb-1 text-lg">Location</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  //   onChange={handleOnChange}
                  name="mentorLocation"
                  value={mentorInfo?.mentorLocation}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="last-name flex flex-col ">
                <label className="mb-1 text-lg">Mentor Email*</label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  //   onChange={handleOnChange}
                  name="mentorEmail"
                  value={mentorInfo?.mentorEmail}
                />
                <div className="deptName flex flex-col my-3">
                  <label className="mb-1 text-lg">Designation</label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    // onChange={handleOnChange}
                    name="mentorDesignation"
                    value={mentorInfo?.mentorDesignation}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold text-gray-700 mt-6">
          CFL's assigned under this mentor
        </p>
        <p className="border-[1px] border-gray-600 mt-2"></p>
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
                  borderRight: "7px solid  rgb(33, 150, 243)",
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
                // position={"right"}
                //   date={item.joiningDate}
              >
                <h3 className="vertical-timeline-element-title">
                  <div className="flex items-center space-x-5">
                    <label className="text-lg">Employee Id :</label>
                    <p style={{ marginTop: "-2px" }}>{item.empId}</p>
                  </div>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <div className="flex items-center space-x-5">
                    <label className="text-lg">CFL's Name :</label>
                    <p style={{ marginTop: "-2px" }}>{item.cflFirstName}</p>
                  </div>
                </h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        ))}
      </div>

      {/* <div className="submit">
        <p
          className="bg-green-700 text-white text-center p-2 w-1/6 ml-[480px] mt-7 rounded-xl hover:bg-blue-700 hover:cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </p>
      </div> */}
    </div>
  );
}

export default ParticularMentorInfo;
