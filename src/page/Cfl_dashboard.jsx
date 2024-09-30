// import axios from "axios";
// import Lottie from "lottie-react";
// import React, { useEffect, useState } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import { FaPowerOff } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import animationData from "../animation/Cfl_dashboard.json";
// import useStore from "../component/ZustandStore";

// function Cfl_dashboard() {
//   const options1 = ["Select", "2023", "2024", "2025"];
//   const defaultOption1 = options1[0];

//   const navigate = useNavigate();

//   const handleSelect = (selectedOption) => {
//     navigate("/cfl_info", { state: { data: selectedOption.value } });
//   };
//   //   console.log(`Selected option: ${selectedOption.value}`);

//   const handleAddCfl = () => {
//     navigate("/add-new-cfl");
//   };

//   const handleMentorAssign = () => {
//     navigate("/mentor-info");
//   };

//   const handleMentorLogin = () => {
//     navigate("/particular-mentor-info");
//   };

//   const handleManagerDesk = () => {
//     navigate("/manager-desk");
//   };

//   const { roleName, mentorEmail, jwtToken, setIsAuthenticated } = useStore();

//   // useEffect(() => {
//   //   if (
//   //     roleName === "ROLE_MENTOR" &&
//   //     jwtToken &&
//   //     typeof jwtToken === "string"
//   //   ) {
//   //     try {
//   //       const decoded = decodeJwt(jwtToken);
//   //       if (decoded?.sub) {
//   //         axios
//   //           .get(`http://localhost:8080/mentor/get/${decoded.sub}`)
//   //           .then((res) => console.log(res.data))
//   //           .catch((err) => console.error("Error fetching mentor data:", err));
//   //       } else {
//   //         console.error("Decoded JWT does not have a 'sub' field.");
//   //       }
//   //     } catch (error) {
//   //       console.error("Invalid JWT token:", error);
//   //     }
//   //   }

//   // }, [roleName, jwtToken]);

//   const [mentorStatus, setMentorStatus] = useState(false);

//   useEffect(() => {
//     if (roleName === "ROLE_MENTOR") {
//       axios
//         .get(`http://localhost:8080/mentor/getMentorEmail/${mentorEmail}`)
//         .then((res) => setMentorStatus(res.data));
//     }
//   }, [roleName]);

//   // useEffect(() => {
//   //   if (Object.keys(mentorEmail) != []) {
//   //     fetchMentorEmailStatusFromRegister();
//   //   }
//   // }, [Object.keys(mentorEmail) != []]);

//   // const fetchMentorEmailStatusFromRegister = () => {
//   // axios
//   //   .get(`http://localhost:8080/mentor/getMentorEmail/${mentorEmail}`)
//   //   .then((res) => {
//   //     console.log(res.data, "data...123");
//   //       if (!res.data) {
//   //         alert("no");
//   //       }
//   //     });
//   // };

//   return (
//     <div className="dashboard">
//       <div className="navbar bg-blue-300 p-6">
//         <div className="navbar flex justify-between">
//           <div className="title">
//             <span className="text-blue-950 text-2xl font-bold">
//               CMS Future Leaders
//             </span>
//           </div>

//           <div className="create flex items-center space-x-10">
//             {(roleName === "ROLE_HR" || roleName === "ROLE_MANAGER") && (
//               <p
//                 className="p-2 bg-green-700 text-white rounded-md cursor-pointer hover:bg-blue-800"
//                 onClick={handleMentorAssign}
//               >
//                 Assign Mentor
//               </p>
//             )}
//             {roleName === "ROLE_MENTOR" && (
//               <p
//                 className="p-2 bg-blue-900 text-white rounded-md cursor-pointer hover:bg-green-700"
//                 onClick={handleMentorLogin}
//               >
//                 Mentor's Desk
//               </p>
//             )}

//             {roleName === "ROLE_MANAGER" ? (
//               <p
//                 className="p-2 bg-pink-700 text-white rounded-md cursor-pointer hover:bg-black"
//                 onClick={handleManagerDesk}
//               >
//                 Manager's Desk
//               </p>
//             ) : (
//               ""
//             )}

//             <div
//               className="logout flex space-x-2 items-center bg-red-700 p-2 rounded-lg text-white tracking-wider hover:cursor-pointer hover:bg-red-950"
//               onClick={() => setIsAuthenticated(false)}
//             >
//               <FaPowerOff />
//               <p>Logout</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="animation">
//         <div className="grid grid-cols-2">
//           <div className="col-span-1">
//             <div className="text">
//               <p className="text-center text-5xl font-bold tracking-wide text-blue-900 mt-[130px]">
//                 Welcome To CFL <br></br> Dashboard
//               </p>
//               <p className="border-2 border-b-black w-1/2 ml-[162px] mt-1"></p>
//             </div>
//             {roleName === "ROLE_CFL" ? (
//               <div className="flex space-x-5 items-center ml-[140px] mt-7">
//                 <p className="text-3xl text-blue-600">Select Your CFL's Year</p>
//                 <div className="cursor-pointer">
//                   <Dropdown
//                     options={options1}
//                     onChange={handleSelect}
//                     value={defaultOption1}
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}

//             <div className="create w-[120px] ml-[260px] mt-5 text-center hover:cursor-pointer">
//               {roleName === "ROLE_HR" ||
//               roleName === "ROLE_MENTOR" ||
//               roleName === "ROLE_MANAGER" ? (
//                 <p
//                   className="p-2 bg-blue-900 text-white rounded-md  hover:bg-green-800"
//                   onClick={handleAddCfl}
//                 >
//                   Add New CFL
//                 </p>
//               ) : (
//                 ""
//               )}
//             </div>
//           </div>
//           <div className="col-span-1">
//             <Lottie
//               loop={true}
//               animationData={animationData}
//               style={{ height: 400, width: 600, marginTop: "70px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cfl_dashboard;

import axios from "axios";
import { decodeJwt } from "jose";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaPowerOff } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import animationData from "../animation/Cfl_dashboard.json";
import Chatboat from "../animation/Chatboat.json";
import useStore from "../component/ZustandStore";
import CflLogo from "../image/CflLogo.png";
import CompanyLogo from "../image/CompanyLogo.png";

function Cfl_dashboard() {
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

  const navigate = useNavigate();

  const handleSelect = (selectedOption) => {
    navigate("/cfl-info", { state: { data: selectedOption.value } });
  };
  //   console.log(`Selected option: ${selectedOption.value}`);

  const handleAddCfl = () => {
    navigate("/add-new-cfl");
  };

  const handleMentorAssign = () => {
    navigate("/mentor-info");
  };

  const handleMentorLogin = () => {
    navigate("/particular-mentor-info");
  };

  const handleManagerAssign = () => {
    navigate("/manager-info");
  };

  const handleManagerDesk = () => {
    navigate("/manager-desk");
  };

  const { roleName, mentorEmail, jwtToken, setIsAuthenticated } = useStore();

  const { removeJwtData, removeMentorEmail, removeRoleName, jwtData } =
    useStore();

  const [cflPersonalInfo, setCflPersonalInfo] = useState("");

  const handleCflInfoDuringlogin = () => {
    const decodedCflEmail = decodeJwt(jwtData)?.sub || "";
    axios
      .get(`http://localhost:8080/cfl/getCflInfoDuringLogin/${decodedCflEmail}`)
      .then((res) => setCflPersonalInfo(res.data))
      .catch((error) => {
        Swal.fire({
          title: "email not matching",
          icon: "error",
        });
      });
  };

  console.log(cflPersonalInfo, "cflPersonalInfo");

  useEffect(() => {
    if (cflPersonalInfo) {
      navigate("/particular-cfl-info", { state: { data: cflPersonalInfo } });
    }
  }, [cflPersonalInfo]);

  const handleMemoriesCreation = () => {
    navigate("/create-memory");
  };

  const handleCflMemoryView = () => {
    navigate("/view-memory");
  };
  // const handleZegoCloud = () => {
  //   navigate("/zegocloud");
  // };

  const handleChatBoat = () => {
    navigate("/gemini");
  };

  const handleRewardAndRecognition = () => {
    navigate("/rewards-and-recognition");
  };

  return (
    <div className="" style={{ width: "100vw" }}>
      <div
        className="navbar bg-blue-300 px-5 h-[85px]"
        style={{ marginTop: "-10px" }}
      >
        <div className="navbar flex justify-between">
          <div className="title flex items-center space-x-3">
            <div className="image">
              <img
                src={CompanyLogo}
                className="w-[120px] h-12"
                style={{ marginTop: "-7px" }}
              />
            </div>
            <span className="text-blue-950 text-2xl font-bold">
              CMS Future Leaders
            </span>
          </div>

          <div className="create flex items-center space-x-10">
            {/* {(roleName === "ROLE_MENTOR" || roleName === "HR") && (
              <p
                className="p-2 bg-green-700 text-white rounded-md cursor-pointer hover:bg-blue-800"
                onClick={handleZegoCloud}
              >
                Schedule Meeting Now
              </p>
            )} */}
            {roleName === "ROLE_CFL" && (
              <p
                className="p-2 bg-pink-700 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-transform hover:scale-105"
                onClick={handleCflMemoryView}
              >
                CFL's Memories
              </p>
            )}

            <p
              className="p-2 bg-green-700 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-transform hover:scale-105"
              onClick={handleRewardAndRecognition}
            >
              Rewards And Recognition
            </p>

            {roleName === "ROLE_HR" && (
              <p
                className="p-2 bg-gray-700 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-transform hover:scale-105"
                onClick={handleMentorAssign}
              >
                Assign Mentor
              </p>
            )}
            {roleName === "ROLE_HR" && (
              <p
                className="p-2 bg-blue-800 text-white rounded-md cursor-pointer hover:bg-blue-800 transition-transform hover:scale-105"
                onClick={handleManagerAssign}
              >
                Assign Manager
              </p>
            )}
            {roleName === "ROLE_MENTOR" && (
              <p
                className="p-2 bg-blue-900 text-white rounded-md cursor-pointer hover:bg-green-700 transition-transform hover:scale-105"
                onClick={handleMentorLogin}
              >
                Mentor's Desk
              </p>
            )}
            {roleName === "ROLE_MANAGER" ? (
              <p
                className="p-2 bg-pink-700 text-white rounded-md cursor-pointer hover:bg-black transition-transform hover:scale-105"
                onClick={handleManagerDesk}
              >
                Manager's Desk
              </p>
            ) : (
              ""
            )}
            <div className="flex items-center space-x-2">
              <div
                className="logout flex space-x-2 items-center bg-red-700 p-2 rounded-lg text-white tracking-wider hover:cursor-pointer hover:bg-red-950 transition-transform hover:scale-110"
                onClick={() => {
                  setIsAuthenticated(false);
                  removeJwtData();
                  removeRoleName();
                  removeMentorEmail();
                }}
              >
                <FaPowerOff />
                <p>Logout</p>
              </div>

              <div className="image">
                <img src={CflLogo} className="w-[120px] h-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animation">
        <div className="grid grid-cols-3 cms-main-dashboard">
          <div className="col-span-2 ">
            <div className="text">
              <p className="text-center text-5xl font-bold tracking-wide text-blue-900 mt-[130px] dash-text">
                <div className="div">Welcome To CMS Future</div>
                <div className="div mt-2">Leaders Program</div>
              </p>
              <p className="border-2 border-b-black w-1/2 ml-[225px] mt-1"></p>
            </div>
            {roleName === "ROLE_CFL" ? (
              <div
                className="flex space-x-5 items-center ml-[340px] mt-7 p-2 bg-blue-900 text-white w-[160px] rounded-xl hover:cursor-pointer transition-transform hover:scale-110"
                onClick={handleCflInfoDuringlogin}
              >
                <div className="profile flex items-center space-x-2 text-center">
                  <p className="text-xl ml-3">My Profile</p>
                  <FcBusinessman className="text-3xl" />
                </div>
              </div>
            ) : (
              ""
            )}
            {roleName === "ROLE_MENTOR" ||
            roleName === "ROLE_HR" ||
            roleName === "ROLE_MANAGER" ? (
              <div className="flex space-x-5 items-center ml-[230px] mt-7">
                <p className="text-3xl text-blue-950">Select Your CFL's Year</p>
                <div className="cursor-pointer">
                  <Dropdown
                    options={options1}
                    onChange={handleSelect}
                    value={defaultOption1}
                    placeholder="Select an option"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="create w-[120px] ml-[350px] mt-5 text-center hover:cursor-pointer">
              {roleName === "ROLE_HR" ? (
                <p
                  className="p-2 bg-blue-900 text-white rounded-md  hover:bg-green-800 w-[170px] transition-transform hover:scale-105"
                  onClick={handleAddCfl}
                >
                  Onboard New CFL
                </p>
              ) : (
                ""
              )}
            </div>

            {roleName == "ROLE_HR" ? (
              <div
                className="ai flex-col items-center w-[100px] hover:cursor-pointer"
                onClick={handleChatBoat}
              >
                <Lottie
                  loop={true}
                  animationData={Chatboat}
                  style={{
                    height: 80,
                    width: 100,
                    marginTop: "20px",
                    marginLeft: "10px",
                  }}
                />
                <p className="ml-7">Chat AI</p>
              </div>
            ) : (
              <div
                className="ai flex-col items-center w-[100px] hover:cursor-pointer"
                onClick={handleChatBoat}
              >
                <Lottie
                  loop={true}
                  animationData={Chatboat}
                  style={{
                    height: 80,
                    width: 100,
                    marginTop: "70px",
                    marginLeft: "10px",
                  }}
                />
                <p className="ml-7">Chat AI</p>
              </div>
            )}
          </div>

          <div
            className="col-span-1"
            style={{ background: "transparent" }} // Ensure the background is transparent
          >
            <Lottie
              loop={true}
              animationData={animationData}
              style={{
                height: 504,
                width: 600,
                marginTop: "20px",
                marginLeft: "-150px",
                background: "transparent", // Also make sure Lottie animation background is transparent
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cfl_dashboard;
