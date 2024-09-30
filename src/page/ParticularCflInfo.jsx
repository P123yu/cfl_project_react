import { Box, Modal } from "@mui/material";
import axios from "axios";
import { decodeJwt } from "jose";
import React, { useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { BiNotepad } from "react-icons/bi";
import { FaBook, FaCamera, FaUpload, FaVideo } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";
import { GiTiedScroll } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { IoBook } from "react-icons/io5";
import { SiStatuspal } from "react-icons/si";
import { TbCalendarSearch } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import Swal from "sweetalert2";
import useStore from "../component/ZustandStore";

function ParticularCflInfo() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "auto",
  };

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openCflFeedback, setOpenCflFeedback] = useState(false);
  const handleOpenCflFeedback = () => setOpenCflFeedback(true);
  const handleCloseCflFeedback = () => setOpenCflFeedback(false);

  const [particularCflInfo, setParticularCflInfo] = useState({
    empId: "",
    cflFirstName: "",
    cflMiddleName: "",
    cflLastName: "",
    cflEmail: "",
    cflDepartment: "",
    cflDesignation: "",
    reportingManager: "",
    reportingManagerMail: "",
    hrMail: "",
    cflLocation: "",
    joiningDate: "",
    sscResult: "",
    hscResult: "",
    underGraduateResult: "",
    postGraduateResult: "",
    collegeName: "",
    collegeBranch: "",
    technicalSkills: "",
    nonTechnicalSkills: "",
    fileName: "",
    fileData: null,
    mentorId: null,
    category: "",
    vertical: "",
    gender: "",
    contact: null,
    year: "",
    buHeadName: "",
  });

  const [toggleCamera, setToggleCamera] = useState(false);
  const handleCameraToggle = () => {
    setToggleCamera(!toggleCamera);
  };

  const handleToggleIcon = () => {
    setToggleCamera(false);
  };

  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileInfo, setFileInfo] = useState(null);
  const [cflFile, setCflFile] = useState({
    empId: location?.state?.data?.empId,
    file: null,
  });
  const [cflFileInfo, setCflFileInfo] = useState("");

  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setFileName("capture_image");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileInfo(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      setCflFile((prev) => ({ ...prev, file: file }));
    }
  };

  useEffect(() => {
    if (imageSrc && fileName) {
      const base64ToBlob = (base64, mime) => {
        try {
          const byteString = atob(base64.split(",")[1]);
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          return new Blob([ab], { type: mime });
        } catch (error) {
          console.error("Error converting Base64 to Blob:", error);
          return null;
        }
      };

      const mimeMatch = imageSrc.match(/data:(.*?);base64,/);
      if (mimeMatch) {
        const mimeType = mimeMatch[1];
        const blob = base64ToBlob(imageSrc, mimeType);
        if (blob) {
          const file = new File([blob], fileName, { type: mimeType });
          setFileInfo(file);
          setCflFile((prev) => ({ ...prev, file: file }));
        } else {
          console.error("Blob creation failed.");
        }
      } else {
        console.error("Invalid Base64 string format.");
      }
    }
  }, [imageSrc, fileName]);

  useEffect(() => {
    const uploadCflFile = async () => {
      if (cflFile.file) {
        const formData = new FormData();
        formData.append("empId", cflFile.empId);
        formData.append("file", cflFile.file);

        try {
          const response = await axios.post(
            "http://localhost:8080/cfl/uploadCflFile",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          Swal.fire({
            title: "Profile Picture Updated",
            icon: "success",
          });

          const res = await axios.get(
            `http://localhost:8080/cfl/getAllCflByCflId/${location?.state?.data?.empId}`
          );
          setCflFileInfo(res.data);
          console.log("File uploaded successfully", response.data);
        } catch (error) {
          console.error("Error uploading file", error);
          Swal.fire({
            title: "Can't be able to fetch data now",
          });
        }
      }
    };

    if (cflFile.file) {
      uploadCflFile();
    }
  }, [cflFile.file, cflFile.empId]);

  const [listOfTechnicalSkills, setListOfTechnicalSkills] = useState([]);
  const [listOfNonTechnicalSkills, setListOfNonTechnicalSkills] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/cfl/getAllCflByCflId/${location.state.data.empId}`
      )
      .then((res) => {
        setParticularCflInfo(res.data);

        if (res.data.technicalSkills) {
          setListOfTechnicalSkills(res.data.technicalSkills.split(","));
        }

        if (res.data.nonTechnicalSkills) {
          setListOfNonTechnicalSkills(res.data.nonTechnicalSkills.split(","));
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text:
            error?.response?.data?.message ||
            "Duplicate data found. Please check the input.",
          icon: "error",
        });
      });
  }, []);

  const [edit, setEdit] = useState(false);

  const [id, setId] = useState(0);
  useEffect(() => {
    if (edit) {
      axios
        .get(
          `http://localhost:8080/cfl/getAllCflByCflId/${location.state.data.empId}`
        )
        .then((res) => {
          setId(res.data.id);
        });
    }
  }, [edit]);

  console.log(id, "id");

  const handleOnChangeTechnical = (e, index) => {
    setEdit(true);
    const { value } = e.target;
    setListOfTechnicalSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index] = value;
      return updatedSkills;
    });
  };

  const handleOnChangeNonTechnical = (e, index) => {
    setEdit(true);
    const { value } = e.target;
    setListOfNonTechnicalSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index] = value;
      return updatedSkills;
    });
  };

  const handleOnChange = (e) => {
    setEdit(true);
    const key = e.target.name;
    const value = e.target.value;
    setParticularCflInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  console.log(particularCflInfo, "particularCflInfo");

  const navigate = useNavigate();

  const handleGoalSetting = () => {
    navigate("/cfl-quarter-dashboard", { state: { data: particularCflInfo } });
  };

  const handleGoalSettingReview = () => {
    navigate("/cfl-quarter-dashboard-review", {
      state: { data: particularCflInfo },
    });
  };

  const handleCflSkills = () => {
    navigate("/chart", { state: { data: particularCflInfo } });
  };

  const handleManageReview = () => {
    navigate("/manager-review", { state: { data: particularCflInfo } });
  };

  const { roleName } = useStore();

  const [logBookFile, setLogBookFile] = useState("");
  const handleUploadMentoring = (event) => {
    const file = event.target.files[0];
    setLogBookFile(file);
  };

  const [certificateFile, setCertificateFile] = useState("");
  const handleUploadCertificate = (event) => {
    const file = event.target.files[0];
    setCertificateFile(file);
  };

  const [resumeFile, setResumeFile] = useState("");
  const handleUploadResume = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  console.log(certificateFile, "certificateFile");

  console.log(logBookFile, "logBookFile...");
  const empId = particularCflInfo?.empId;

  useEffect(() => {
    const uploadFile = async () => {
      if (logBookFile) {
        const formData = new FormData();
        formData.append("empId", empId);
        formData.append("LogBookFile", logBookFile);

        try {
          const response = await axios.post(
            "http://localhost:8080/logbook/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response) {
            Swal.fire({
              title: "LogBook Successfully Submitted",
              icon: "success",
            });
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            text: "Reduce The Size(KB) Of Mentoring LogBook ",
          });
        }
      }
    };

    uploadFile();
  }, [logBookFile]);

  console.log(logBookFile, "logBookFile.....");

  // certificate

  useEffect(() => {
    const uploadFile = async () => {
      if (certificateFile) {
        const formData = new FormData();
        formData.append("empId", empId);
        formData.append("certificateFile", certificateFile);

        try {
          const response = await axios.post(
            "http://localhost:8080/certificate/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response) {
            Swal.fire({
              title: "Your Certificate Is Successfully Submitted",
              icon: "success",
            });
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            text: "Reduce The Size(KB) Of Certificate ",
          });
        }
      }
    };

    uploadFile();
  }, [certificateFile]);

  console.log(logBookFile, "logBookFile.....");

  useEffect(() => {
    const uploadFile = async () => {
      if (resumeFile) {
        const formData = new FormData();
        formData.append("empId", empId);
        formData.append("resumeFile", resumeFile);

        try {
          const response = await axios.post(
            "http://localhost:8080/resume/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response) {
            Swal.fire({
              title: "Resume Successfully Submitted",
              icon: "success",
            });
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            text: "Reduce The Size(KB) Of Mentoring LogBook ",
          });
        }
      }
    };

    uploadFile();
  }, [resumeFile]);

  const handleMentoringLogBooks = () => {
    navigate("/logbook", { state: { data: empId } });
  };

  const handleCertificate = () => {
    navigate("/certificate", { state: { data: empId } });
  };

  const handleCFLResume = () => {
    navigate("/resume", { state: { data: empId } });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggles the dropdown
  };

  const handleMeetingRequest = (type) => {
    navigate("/request-meeting", {
      state: { data: particularCflInfo, type: `${type}` },
    });
    setIsDropdownOpen(false);
  };
  const [feedBack, setFeedBackToMentor] = useState({ feedbackMessage: "" });

  const handleWriteFeedBackToMentor = (e) => {
    const { name, value } = e.target;
    setFeedBackToMentor((prev) => ({ ...prev, [name]: value }));
  };

  console.log(feedBack, "feedBack");

  const [finalFeedBackResult, setFinalFeedBackResult] = useState({
    menteeId: "",
    feedbackMessage: "",
  });

  useEffect(() => {
    // Update finalFeedBackResult when feedBack or particularCflInfo changes
    if (feedBack) {
      setFinalFeedBackResult((prev) => ({
        ...prev,
        menteeId: particularCflInfo?.empId || prev.menteeId, // Preserve the existing menteeId if particularCflInfo is undefined
        feedbackMessage: feedBack.feedbackMessage,
      }));
    }
  }, [feedBack, particularCflInfo]);

  const saveFeedBackToMentor = () => {
    axios
      .post(
        "http://localhost:8080/menteeToMentorFeedBack/create",
        finalFeedBackResult
      )
      .then((res) => {
        console.log(finalFeedBackResult, "finalFeedBackResult");
        Swal.fire({
          title: "Sucessfully Submitted",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          text: "error",
        });
      });
  };

  const handleMeetingResponse = () => {
    navigate("/fix_meeting_schedule");
  };

  const handleTrackGoalSetting = () => {
    navigate("/tracker", { state: { data: empId } });
  };

  const handleCflFeedback = () => {
    navigate("/cfl-feedback");
  };

  const handleUpdate = () => {
    const newData = { ...particularCflInfo, id: id };
    axios.post("http://localhost:8080/cfl/create", newData).then((res) => {
      alert("update");
      setEdit(false);
      axios
        .get(
          `http://localhost:8080/cfl/getAllCflByCflId/${location.state.data.empId}`
        )
        .then((res) => {
          setParticularCflInfo(res.data);
        });
    });
  };

  const handleCflProbation = () => {
    navigate("/probation-confirmation", { state: { data: empId } });
  };

  const handleMentorFeedback = () => {
    navigate("/mentor-feedback");
  };

  const handleManagerFeedback = () => {
    navigate("/manager-feedback");
  };

  const [FeedBackToMentee, setFeedBackToMentee] = useState({}); // Initialize as an object

  const handleFeedBackForMentee = (e) => {
    const { name, value } = e.target;
    setFeedBackToMentee((prev) => ({ ...prev, [name]: value }));
  };

  const { jwtData } = useStore();

  const handleSaveFeedBackForMentee = () => {
    const completeFeedback = {
      ...FeedBackToMentee,
      menteeId: empId,
      mentorEmail: decodeJwt(jwtData)?.sub || "",
    };

    axios
      .post(
        "http://localhost:8080/mentorToMenteeFeedBack/create",
        completeFeedback
      )
      .then((res) => {
        handleClose();
        Swal.fire({
          title: "FeedBack Saved Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        handleClose();
        Swal.fire({
          title: "FeedBack Not Saved",
        });
      });
  };

  return (
    <div className="p-10 cms-dashboard" style={{ width: "100vw" }}>
      <p className="text-2xl text-gray-800 mb-5 font-bold text-center border-b-2 border-gray-700 text-gray-800 w-1/4 ml-[480px] ">
        CFL's Personal Information
      </p>
      <div className="cfl-info">
        <div className="head flex justify-between items-center ">
          <div className="image flex space-x-10 items-center">
            {toggleCamera && fileInfo ? (
              <img
                src={`data:image/jpeg;base64,${fileInfo?.fileData}`}
                className="rounded-full w-32 h-32 border-2 border-gray-500"
              />
            ) : cflFileInfo ? (
              <img
                src={`data:image/jpeg;base64,${cflFileInfo?.fileData}`}
                className="rounded-full w-32 h-32 border-2 border-gray-500"
              />
            ) : (
              <img
                src={`data:image/jpeg;base64,${particularCflInfo?.fileData}`}
                className="rounded-full w-32 h-32 border-2 border-gray-500"
              />
            )}
          </div>
          <div className="head flex items-center space-x-10">
            {(roleName === "ROLE_CFL" || roleName === "ROLE_HR") && (
              <div className="icons flex space-x-4 items-center mt-20">
                <div className="camera">
                  <FaCamera
                    className="text-2xl text-gray-700 hover:text-blue-700 hover:cursor-pointer"
                    onClick={handleCameraToggle}
                  />
                </div>

                <div className="upload">
                  <input
                    type="file"
                    id="file-input1"
                    hidden
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-input1" className="file-label">
                    <div>
                      <FaUpload
                        className="text-2xl text-gray-700 hover:text-blue-700 hover:cursor-pointer"
                        onClick={handleToggleIcon}
                      />
                    </div>
                  </label>
                </div>
              </div>
            )}

            {roleName === "ROLE_CFL" && (
              <div className="upload">
                <input
                  type="file"
                  id="file-input2"
                  hidden
                  onChange={handleUploadCertificate}
                />
                <label htmlFor="file-input2" className="file-label">
                  <div className="meeting-btn flex space-x-2 items-center bg-green-800 text-white p-2 rounded-md hover:bg-pink-700 hover:cursor-pointer text-[16px] transition-transform hover:scale-105">
                    <p>Upload Certificate</p>
                    <GiTiedScroll className="text-xl" />
                  </div>
                </label>
              </div>
            )}
            {roleName === "ROLE_CFL" && (
              <div className="upload">
                <input
                  type="file"
                  id="file-input3"
                  hidden
                  onChange={handleUploadMentoring}
                />
                <label htmlFor="file-input3" className="file-label">
                  <div className="meeting-btn flex space-x-2 items-center bg-pink-700 text-white p-2 rounded-md hover:bg-green-800 hover:cursor-pointer text-[16px] transition-transform hover:scale-105">
                    <p>Upload Mentoring LogBook</p>
                    <FaBook className="text-xl" />
                  </div>
                </label>
              </div>
            )}
            {roleName === "ROLE_CFL" && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleGoalSetting}
              >
                <p>Goal Setting</p>
                <GoGoal className="text-xl" />
              </div>
            )}
            {roleName === "ROLE_MENTOR" && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleOpen}
              >
                <p>Write FeedBack To Mentee</p>
                <FaPenToSquare className="text-xl" />
              </div>
            )}

            {roleName === "ROLE_CFL" && (
              <div
                className="meeting-btn flex space-x-2 items-center hover:bg-red-400 text-white p-2 rounded-md bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleOpenCflFeedback}
              >
                <p>Write FeedBack</p>
                <FaPenToSquare className="text-xl" />
              </div>
            )}

            {roleName === "ROLE_HR" && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-green-700 text-white p-2 rounded-md hover:bg-red-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleTrackGoalSetting}
              >
                <p>Track Status</p>
                <SiStatuspal className="text-2xl" />
              </div>
            )}

            {roleName === "ROLE_MANAGER" && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleGoalSettingReview}
              >
                <p>Goal Setting Review</p>
                <GoGoal className="text-2xl" />
              </div>
            )}

            {(roleName === "ROLE_HR" || roleName === "ROLE_MANAGER") && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-blue-800 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleCertificate}
              >
                <p>View CFL's Certificate</p>
                <GiTiedScroll className="text-2xl" />
              </div>
            )}

            {(roleName === "ROLE_HR" || roleName === "ROLE_MANAGER") && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-stone-600 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleMentoringLogBooks}
              >
                <p>View Mentoring LogBook</p>
                <GrView className="text-xl" />
              </div>
            )}

            {(roleName === "ROLE_HR" || roleName === "ROLE_MANAGER") && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-gray-600 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleCflSkills}
              >
                <p>Cfl Dashboard</p>
                <FaBook className="text-xl" />
              </div>
            )}

            {roleName === "ROLE_HR" && (
              <div
                className="meeting-btn flex space-x-2 items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                onClick={handleMeetingResponse}
              >
                <p>Meeting with Cfl</p>
                <FaVideo className="text-xl" />
              </div>
            )}

            {roleName === "ROLE_CFL" ? (
              <div className="relative">
                <div
                  className="meeting-btn flex space-x-2 items-center bg-blue-900 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
                  onClick={handleDropdownToggle}
                >
                  <p>Request Meeting</p>
                  <FaVideo className="text-xl" />
                </div>

                {isDropdownOpen && (
                  <div className="absolute mt-2 bg-white rounded-md shadow-lg w-[200px] border-[1px] border-gray-700">
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleMeetingRequest("Mentor")}
                      >
                        Meeting With Mentor
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleMeetingRequest("HR")}
                      >
                        Meeting With HR
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleMeetingRequest("Manager")}
                      >
                        Meeting With Manager
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className=" w-1/6 ml-2">
          <p className="text-xl font-bold text-gray-700">
            {particularCflInfo?.cflFirstName ? (
              <>
                {particularCflInfo.cflFirstName}
                {particularCflInfo.cflMiddleName ? (
                  <>-{particularCflInfo.cflMiddleName}</>
                ) : null}
                {particularCflInfo.cflLastName ? (
                  <>-{particularCflInfo.cflLastName}</>
                ) : null}
              </>
            ) : null}
          </p>
        </div>

        {roleName === "ROLE_CFL" && (
          <div className="upload-resume bg-blue-900 w-[160px] ml-[1125px] rounded-lg">
            <input
              type="file"
              id="file-input4"
              hidden
              onChange={handleUploadResume}
            />

            <label htmlFor="file-input4" className="file-label">
              <div
                className="meeting-btn flex space-x-2 items-center bg-green-800 text-white p-2 rounded-md hover:bg-pink-700 hover:cursor-pointer text-[16px] transition-transform hover:scale-105"
                style={{ marginTop: "-40px" }}
              >
                <p>Upload Resume</p>
                <IoBook className="text-xl" />
              </div>
            </label>
          </div>
        )}

        <div
          className="hr-below-tool space-x-5 flex float-right "
          style={{ marginTop: "-40px" }}
        >
          {(roleName === "ROLE_HR" || roleName === "ROLE_MANAGER") && (
            <div
              className="meeting-btn flex space-x-2 items-center bg-zinc-700 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
              onClick={handleCflProbation}
            >
              <p>CFL's Probation</p>
              <BiNotepad className="text-2xl" />
            </div>
          )}

          {roleName === "ROLE_HR" && (
            <div
              className="meeting-btn flex space-x-2 items-center bg-lime-600 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer transition-transform hover:scale-105"
              onClick={handleManageReview}
            >
              <p>Manager Review</p>
              <TbCalendarSearch className="text-2xl" />
            </div>
          )}

          {roleName === "ROLE_HR" && (
            <div
              className="meeting-btn flex space-x-2 items-center bg-red-600 text-white p-2 rounded-md hover:bg-green-700 hover:cursor-pointer w-[150px] transition-transform hover:scale-105"
              onClick={handleCFLResume}
            >
              <p>View Resume</p>
              <IoBook className="text-xl" />
            </div>
          )}

          {roleName === "ROLE_HR" && (
            <div
              className="meeting-btn flex space-x-2 items-center bg-emerald-800 text-white p-2 rounded-md hover:bg-teal-700 hover:cursor-pointer w-[150px] transition-transform hover:scale-105"
              onClick={handleCflFeedback}
            >
              <p>CFL FeedBack</p>
              <FcFeedback className="text-xl" />
            </div>
          )}

          {roleName === "ROLE_HR" && (
            <div
              className="meeting-btn flex space-x-2 items-center bg-gray-700 text-white p-2 rounded-md hover:bg-teal-700 hover:cursor-pointer w-[175px] transition-transform hover:scale-105"
              onClick={handleMentorFeedback}
            >
              <p>Mentor FeedBack</p>
              <FcFeedback className="text-xl" />
            </div>
          )}

          {roleName === "ROLE_HR" && (
            <div
              className="meeting-btn flex space-x-2 items-center bg-gray-700 text-white p-2 rounded-md hover:bg-teal-700 hover:cursor-pointer w-[150px] transition-transform hover:scale-105"
              onClick={handleManagerFeedback}
            >
              <p>Mgr FeedBack</p>
              <FcFeedback className="text-xl" />
            </div>
          )}
        </div>

        <div className="info mt-5">
          <p className="text-2xl font-semibold text-gray-700 mt-5">
            CFL's Details
          </p>
          <p className="border-[1px] border-gray-600 mt-2"></p>
          <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            <div className="col-span-1 ">
              <div className="firstName flex flex-col ">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  First Name*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide pl-2"
                  onChange={handleOnChange}
                  name="cflFirstName"
                  value={particularCflInfo.cflFirstName || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="cflEmail flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Email*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflEmail"
                  value={particularCflInfo?.cflEmail || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="cflDesignation flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Designation
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflDesignation"
                  value={particularCflInfo?.cflDesignation || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>

              <div className="cflDOJ flex flex-col ">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Date Of Joining*
                </label>

                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflMiddleName"
                  value={particularCflInfo?.joiningDate || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>

              <div className="cflProject flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Project
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflProject"
                  value={particularCflInfo?.cflProject || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>

              <div className="cflProject flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Location
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflLocation"
                  value={particularCflInfo?.cflLocation || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="cflProject flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="contact"
                  value={particularCflInfo?.contact || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="middle-name flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflMiddleName"
                  value={particularCflInfo?.cflMiddleName || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="empId flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Employee Id*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="empId"
                  value={particularCflInfo?.empId || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="cflReportingManager flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Reporting Manager*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="reportingManager"
                  value={particularCflInfo?.reportingManager || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="cflReportingManager flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Reporting Manager Mail*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="reportingManagerMail"
                  value={particularCflInfo?.reportingManagerMail || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>

              <div className="cflHR flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Project Classification*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflProjectClassification"
                  value={particularCflInfo?.cflProjectClassification || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>

              <div className="cflHR flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Gender*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="gender"
                  value={particularCflInfo?.gender || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>

              <div className="cflHR flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Sub Area
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="subArea"
                  value={particularCflInfo?.subArea || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="last-name flex flex-col ">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="cflLastName"
                  value={particularCflInfo?.cflLastName || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
                <div className="deptName flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-800">
                    Department*
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    onChange={handleOnChange}
                    name="cflDepartment"
                    value={particularCflInfo?.cflDepartment || ""}
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="mb-1 font-semibold text-lg text-gray-800 text-gray-800">
                    Sub Department
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    onChange={handleOnChange}
                    name="cflSubDepartment"
                    value={particularCflInfo?.cflSubDepartment || ""}
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
                <div className="cflHR flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-800">
                    HR Mail*
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    onChange={handleOnChange}
                    name="hrMail"
                    value={particularCflInfo?.hrMail || ""}
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
                <div className="cflHR flex flex-col">
                  <label className="mb-1 font-semibold text-lg text-gray-800">
                    BU Head*
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    onChange={handleOnChange}
                    name="buHeadName"
                    value={particularCflInfo?.buHeadName || ""}
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
                <div className="cflHR flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-800">
                    Vertical
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    onChange={handleOnChange}
                    name="vertical"
                    value={particularCflInfo?.vertical || ""}
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>

                <div className="cflHR flex flex-col">
                  <label className="mb-1 font-semibold text-lg text-gray-800">
                    Category
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    onChange={handleOnChange}
                    name="category"
                    value={particularCflInfo?.category || ""}
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-700 mt-6">
          Qualificational Details
        </p>
        <p className="border-[1px]   border-gray-600 mt-2"></p>
        <div className="eductionalDetails">
          <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            <div className="col-span-1 ">
              <div className="SSC flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  SSC/(Xth) (%age)*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide pl-2"
                  onChange={handleOnChange}
                  name="sscResult"
                  value={particularCflInfo?.sscResult || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="HSC flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  POST Graduate(UG) (%age)
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="postGraduateResult"
                  value={particularCflInfo?.postGraduateResult || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="HSC flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  HSC/(Xll) (%age)*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="hscResult"
                  value={particularCflInfo?.hscResult || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
              <div className="collegeName flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  College Name*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="collegeName"
                  value={particularCflInfo?.collegeName || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="UG flex flex-col ">
                <label className="mb-1 font-semibold text-lg text-gray-800">
                  Under Graduate(UG) (%age)*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                  onChange={handleOnChange}
                  name="underGraduateResult"
                  value={particularCflInfo?.underGraduateResult || ""}
                  readOnly={roleName === "ROLE_HR" ? false : true}
                />
                <div className="collegeBranch flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-800">
                    College Branch
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 pl-2"
                    onChange={handleOnChange}
                    name="collegeBranch"
                    value={particularCflInfo?.collegeBranch || ""}
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-700 mt-6">
          Primary Technical Skills
        </p>
        <p className="border-[1px] border-gray-600 mt-2"></p>
        <div className="TechnicalSkills">
          <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            {listOfTechnicalSkills.map((skill, index) => (
              <div key={index} className="col-span-1 ml-2">
                <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                  <input
                    type="text"
                    onChange={(e) => handleOnChangeTechnical(e, index)}
                    name={`nonTechnicalSkill_${index}`}
                    value={skill}
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide w-full pl-2"
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-700 mt-6">
          Primary NonTechnical Skills
        </p>
        <p className="border-[1px] border-gray-600 mt-2"></p>
        <div className="NonTechnicalSkills">
          <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            {listOfNonTechnicalSkills.map((skill, index) => (
              <div key={index} className="col-span-1 ml-2">
                <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                  <input
                    type="text"
                    onChange={(e) => handleOnChangeNonTechnical(e, index)}
                    name={`nonTechnicalSkill_${index}`}
                    value={skill}
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide w-full pl-2"
                    readOnly={roleName === "ROLE_HR" ? false : true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {edit ? (
        <p
          onClick={handleUpdate}
          className="bg-blue-800 text-white rounded-xl p-2 w-[100px] ml-[550px] text-center mt-5 hover:cursor-pointer"
        >
          update
        </p>
      ) : (
        ""
      )}

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="div">
            <div className="matrix mt-10 px-10">
              <div className="feedback">
                <p className="text-2xl text bg-gray-500 text-center mb-2 font-semibold">
                  Write Feedback To Your Mentee
                </p>
                <textarea
                  type="text"
                  rows={4}
                  className="border-2 border-gray-500 w-full rounded-xl p-5 text-xl"
                  name="feedbackMessage"
                  onChange={handleFeedBackForMentee}
                />
              </div>
              <button
                className="p-3 bg-blue-800 text-center text-white rounded-md ml-[240px] px-5 hover:bg-pink-600 mt-5"
                onClick={handleSaveFeedBackForMentee}
              >
                save
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal open={openCflFeedback} onClose={handleCloseCflFeedback}>
        <Box sx={style}>
          <div className="div">
            <div className="matrix mt-10 px-10">
              <div className="feedback">
                <p className="text-2xl textbg-gray-500 text-center mb-2 font-semibold">
                  Write Feedback To Your Mentor
                </p>
                <textarea
                  type="text"
                  rows={4}
                  className="border-2 border-gray-500 w-full rounded-xl p-5 text-xl"
                  name="feedbackMessage"
                  onChange={handleWriteFeedBackToMentor}
                />
              </div>
              <button
                className="p-3 bg-blue-800 text-center text-white rounded-md ml-[240px] px-5 hover:bg-pink-600 mt-5"
                onClick={() => {
                  saveFeedBackToMentor();
                  handleCloseCflFeedback();
                }}
              >
                save
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <div className="camera">
        {toggleCamera && (
          <div
            className="z-50 absolute ml-[300px]"
            style={{ marginTop: "-1510px" }}
          >
            <div>
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="rounded-xl"
              />
            </div>
            <button
              onClick={() => {
                capture();
                setToggleCamera(false);
              }}
              className="bg-blue-900 hover:bg-red-900 mt-4 text-white p-2 ml-[250px] rounded-xl"
            >
              Capture Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ParticularCflInfo;
