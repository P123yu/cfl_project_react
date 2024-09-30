// // import axios from "axios";
// // import Lottie from "lottie-react";
// // import React, { useState } from "react";
// // import { SiMinutemailer, SiTicktick } from "react-icons/si";
// // import { TfiEmail } from "react-icons/tfi";
// // import { useLocation } from "react-router-dom";
// // import animationData from "../animation/request_meeting.json";

// // function RequestMeeting() {
// //   const location = useLocation();
// //   const cflId = location?.state.data.empId;
// //   console.log(location, "meet loc");

// //   // to

// //   const [to, setTo] = useState("");

// //   const handleTo = (e) => {
// //     setTo(e.target.value);
// //   };

// //   // subject

// //   const [subject, setSubject] = useState("");

// //   const handleSubject = (e) => {
// //     setSubject(e.target.value);
// //   };

// //   // message

// //   const [message, setMessage] = useState("");

// //   const handleMessage = (e) => {
// //     setMessage(e.target.value);
// //   };

// //   const [cflToMentorMail, setCflToMentorMail] = useState("");
// //   const [iscflToMentorMailMailSent, setIsCflToMentorMailMailSent] =
// //     useState(false);

// //   console.log(cflId, to, subject, message);

// //   const sendEmailToMemtor = () => {
// //     axios
// //       .post(
// //         `http://localhost:8080/cfl/sendMail?empId=${cflId}&mentorEmail=${to}&subject=${subject}&message=${message}`
// //       )
// //       .then((res) => {
// //         setCflToMentorMail(res.data);
// //         setIsCflToMentorMailMailSent(true);
// //       });
// //   };

// //   console.log(cflToMentorMail, "cflToMentorMail...");
// //   return (
// //     <div className="p-5">
// //       <p className="text-gray-600 text-3xl text-center mt-7 border-b-2 border-gray-400 w-[500px] ml-[430px]">
// //         Request A Meeting With Your Mentor
// //       </p>
// //       <div
// //         className="grid grid-cols-2"
// //         style={{ marginTop: "-20px", marginLeft: "-60px" }}
// //       >
// //         <div className="col-span-1">
// //           <Lottie
// //             loop={true}
// //             animationData={animationData}
// //             style={{
// //               height: "400px",
// //               width: "700px",
// //               marginTop: "70px",
// //             }}
// //           />
// //         </div>
// //         <div className="col-span-1 w-[600px]">
// //           <div className="div mt-[57px]">
// //             <div className="email flex space-x-10 items-center">
// //               <p className="text-2xl text-gray-600 text-center">
// //                 Write a Mail to Your Mentor to Schedule a Meeting
// //               </p>
// //               <TfiEmail className="text-2xl text-gray-700" />
// //             </div>
// //             <div className="div bg-gray-200 p-6  rounded-xl mt-5">
// //               <div className="flex flex-col mb-2">
// //                 <div className="flex flex-col mb-2">
// //                   <label>To</label>
// //                   <input
// //                     type="text"
// //                     className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
// //                     onChange={handleTo}
// //                     name="mentorEmail"
// //                   />
// //                 </div>
// //                 <label>Subject</label>
// //                 <input
// //                   type="text"
// //                   className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
// //                   onChange={handleSubject}
// //                   name="subject"
// //                 />
// //               </div>

// //               <div className="body flex flex-col">
// //                 <label>Body</label>
// //                 <textarea
// //                   className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wide"
// //                   rows="4"
// //                   onChange={handleMessage}
// //                   name="message"
// //                 />
// //               </div>
// //             </div>

// //             <div
// //               className="mail-btn  p-2  text-white   mt-2  hover:cursor-pointer "
// //               onClick={sendEmailToMemtor}
// //             >
// //               {iscflToMentorMailMailSent ? (
// //                 <div className="w-[220px] flex items-center bg-red-700 rounded-xl p-2 ml-[170px]">
// //                   <p className="ml-5">Sent Successfully</p>
// //                   <SiTicktick className="text-2xl ml-5" />
// //                 </div>
// //               ) : (
// //                 <div className="w-[170px] flex items-center bg-blue-700 rounded-xl p-2 hover:bg-red-700 ml-[200px]">
// //                   <p className="ml-5">Send Mail</p>
// //                   <SiMinutemailer className="text-2xl ml-5" />
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default RequestMeeting;

// import CircularProgress from "@mui/material/CircularProgress";
// import axios from "axios";
// import Lottie from "lottie-react";
// import React, { useState } from "react";
// import { GrHistory } from "react-icons/gr";
// import { SiMinutemailer, SiTicktick } from "react-icons/si";
// import { TfiEmail } from "react-icons/tfi";
// import { useLocation, useNavigate } from "react-router-dom";
// import animationData from "../animation/request_meeting.json";

// function RequestMeeting() {
//   const location = useLocation();
//   const cflId = location?.state.data.empId;
//   console.log(location, "meet loc");

//   // State for the form fields
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   // State for handling email sending
//   const [cflToMentorMail, setCflToMentorMail] = useState("");
//   const [iscflToMentorMailMailSent, setIsCflToMentorMailMailSent] =
//     useState(false);
//   const [loading, setLoading] = useState(false);

//   console.log(cflId, to, subject, message);

//   // Handle input changes
//   const handleTo = (e) => {
//     setTo(e.target.value);
//   };

//   const handleSubject = (e) => {
//     setSubject(e.target.value);
//   };

//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };

//   // Function to send email
//   const sendEmailToMemtor = () => {
//     setLoading(true);
//     axios
//       .post(
//         `http://localhost:8080/cfl/sendMail?empId=${cflId}&mentorEmail=${to}&subject=${subject}&message=${message}`
//       )
//       .then((res) => {
//         setCflToMentorMail(res.data);
//         setIsCflToMentorMailMailSent(true);
//       })
//       .catch((err) => {
//         console.error("Error sending email:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   console.log(cflToMentorMail, "cflToMentorMail...");

//   const navigate = useNavigate();

//   const handleCflMentorMailHistory = () => {
//     navigate("/cfl_mentor_meeting_history", {
//       state: { data: location?.state.data },
//     });
//   };
//   return (
//     <div className="p-5  bg-gray-50">
//       <div className="head flex items-center ">
//         <p className="text-gray-600 text-3xl text-center  border-b-2 border-gray-400 w-[500px] ml-[400px]">
//           Request A Meeting With Your Mentor
//         </p>
//         <div
//           className="btn flex items-center space-x-3 p-2 bg-blue-900 text-white rounded-xl ml-[230px] hover:cursor-pointer hover:bg-black hover:text-white"
//           onClick={handleCflMentorMailHistory}
//         >
//           <p className="px-1">E-Mail History</p>
//           <GrHistory />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 ">
//         <div className="col-span-1">
//           <Lottie
//             loop={true}
//             animationData={animationData}
//             style={{
//               height: "460px",
//               width: "700px",
//               marginTop: "50px",
//             }}
//           />
//         </div>
//         <div className="col-span-1 w-[600px]" style={{ marginTop: "-10px" }}>
//           <div className="div mt-[55px] bg-blue-200 p-1 rounded-2xl">
//             <div className="email flex space-x-5 items-center ml-5">
//               <p className="text-xl text-gray-600 text-center mt-5 ml-2">
//                 Write a Mail to Your Mentor to Schedule a Meeting
//               </p>
//               <TfiEmail className="text-2xl text-gray-700 mt-5" />
//             </div>
//             <div className="div p-6 rounded-xl">
//               <div className="flex flex-col mb-2">
//                 <div className="flex flex-col mb-2">
//                   <label>To</label>
//                   <input
//                     type="text"
//                     className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
//                     onChange={handleTo}
//                     name="mentorEmail"
//                     value={to}
//                     style={{ backgroundColor: "rgb(255, 255, 230)" }}
//                   />
//                 </div>
//                 <label>Subject</label>
//                 <input
//                   type="text"
//                   className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
//                   onChange={handleSubject}
//                   name="subject"
//                   value={subject}
//                   style={{ backgroundColor: "rgb(255, 255, 230)" }}
//                 />
//               </div>

//               <div className="body flex flex-col">
//                 <label>Body</label>
//                 <textarea
//                   className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wide"
//                   rows="4"
//                   onChange={handleMessage}
//                   name="message"
//                   value={message}
//                   style={{ backgroundColor: "rgb(255, 255, 230)" }}
//                 />
//               </div>
//             </div>

//             <div
//               className="mail-btn  p-2  text-white  hover:cursor-pointer mb-4"
//               onClick={sendEmailToMemtor}
//             >
//               {loading ? (
//                 <div className="w-[170px] flex items-center space-x-10 bg-yellow-700 rounded-xl p-2 ml-[200px] ">
//                   <CircularProgress size="1rem" />
//                   <p className="text-blue">Loading...</p>
//                 </div>
//               ) : iscflToMentorMailMailSent ? (
//                 <div className="w-[220px] flex items-center bg-green-700 rounded-xl p-2 ml-[170px]">
//                   <p className="ml-5">Sent Successfully</p>
//                   <SiTicktick className="text-2xl ml-5" />
//                 </div>
//               ) : (
//                 <div className="w-[170px] flex items-center bg-blue-700 rounded-xl p-2 hover:bg-red-700 ml-[200px]">
//                   <p className="ml-5">Send Mail</p>
//                   <SiMinutemailer className="text-2xl ml-5" />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RequestMeeting;

// import axios from "axios";
// import Lottie from "lottie-react";
// import React, { useState } from "react";
// import { SiMinutemailer, SiTicktick } from "react-icons/si";
// import { TfiEmail } from "react-icons/tfi";
// import { useLocation } from "react-router-dom";
// import animationData from "../animation/request_meeting.json";

// function RequestMeeting() {
//   const location = useLocation();
//   const cflId = location?.state.data.empId;
//   console.log(location, "meet loc");

//   // to

//   const [to, setTo] = useState("");

//   const handleTo = (e) => {
//     setTo(e.target.value);
//   };

//   // subject

//   const [subject, setSubject] = useState("");

//   const handleSubject = (e) => {
//     setSubject(e.target.value);
//   };

//   // message

//   const [message, setMessage] = useState("");

//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };

//   const [cflToMentorMail, setCflToMentorMail] = useState("");
//   const [iscflToMentorMailMailSent, setIsCflToMentorMailMailSent] =
//     useState(false);

//   console.log(cflId, to, subject, message);

//   const sendEmailToMemtor = () => {
//     axios
//       .post(
//         `http://localhost:8080/cfl/sendMail?empId=${cflId}&mentorEmail=${to}&subject=${subject}&message=${message}`
//       )
//       .then((res) => {
//         setCflToMentorMail(res.data);
//         setIsCflToMentorMailMailSent(true);
//       });
//   };

//   console.log(cflToMentorMail, "cflToMentorMail...");
//   return (
//     <div className="p-5">
//       <p className="text-gray-600 text-3xl text-center mt-7 border-b-2 border-gray-400 w-[500px] ml-[430px]">
//         Request A Meeting With Your Mentor
//       </p>
//       <div
//         className="grid grid-cols-2"
//         style={{ marginTop: "-20px", marginLeft: "-60px" }}
//       >
//         <div className="col-span-1">
//           <Lottie
//             loop={true}
//             animationData={animationData}
//             style={{
//               height: "400px",
//               width: "700px",
//               marginTop: "70px",
//             }}
//           />
//         </div>
//         <div className="col-span-1 w-[600px]">
//           <div className="div mt-[57px]">
//             <div className="email flex space-x-10 items-center">
//               <p className="text-2xl text-gray-600 text-center">
//                 Write a Mail to Your Mentor to Schedule a Meeting
//               </p>
//               <TfiEmail className="text-2xl text-gray-700" />
//             </div>
//             <div className="div bg-gray-200 p-6  rounded-xl mt-5">
//               <div className="flex flex-col mb-2">
//                 <div className="flex flex-col mb-2">
//                   <label>To</label>
//                   <input
//                     type="text"
//                     className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
//                     onChange={handleTo}
//                     name="mentorEmail"
//                   />
//                 </div>
//                 <label>Subject</label>
//                 <input
//                   type="text"
//                   className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
//                   onChange={handleSubject}
//                   name="subject"
//                 />
//               </div>

//               <div className="body flex flex-col">
//                 <label>Body</label>
//                 <textarea
//                   className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wide"
//                   rows="4"
//                   onChange={handleMessage}
//                   name="message"
//                 />
//               </div>
//             </div>

//             <div
//               className="mail-btn  p-2  text-white   mt-2  hover:cursor-pointer "
//               onClick={sendEmailToMemtor}
//             >
//               {iscflToMentorMailMailSent ? (
//                 <div className="w-[220px] flex items-center bg-red-700 rounded-xl p-2 ml-[170px]">
//                   <p className="ml-5">Sent Successfully</p>
//                   <SiTicktick className="text-2xl ml-5" />
//                 </div>
//               ) : (
//                 <div className="w-[170px] flex items-center bg-blue-700 rounded-xl p-2 hover:bg-red-700 ml-[200px]">
//                   <p className="ml-5">Send Mail</p>
//                   <SiMinutemailer className="text-2xl ml-5" />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RequestMeeting;

import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Lottie from "lottie-react";
import React, { useState } from "react";
import { GrHistory } from "react-icons/gr";
import { SiMinutemailer, SiTicktick } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import animationData from "../animation/request_meeting.json";

function RequestMeeting() {
  const location = useLocation();
  const cflId = location?.state?.data?.empId;
  const type = location?.state.type;
  console.log(location, "meet loc");
  console.log(type, "type");

  // State for the form fields
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [cc, setCC] = useState("");

  console.log(cc, "cc");

  // State for handling email sending
  const [cflToMentorMail, setCflToMentorMail] = useState("");
  const [iscflToMentorMailMailSent, setIsCflToMentorMailMailSent] =
    useState(false);
  const [loading, setLoading] = useState(false);

  console.log(cflId, to, subject, message);

  // Handle input changes
  const handleTo = (e) => {
    setTo(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleCC = (e) => {
    setCC(e.target.value);
  };

  // Function to send email
  const sendEmailToMemtor = () => {
    setLoading(true);
    axios
      .post(
        `http://localhost:8080/cfl/sendMail?empId=${cflId}&email=${to}&ccEmail=${cc}&subject=${subject}&message=${message}&type=${type}`
      )
      .then((res) => {
        setCflToMentorMail(res.data);
        setIsCflToMentorMailMailSent(true);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        Swal.fire({
          // title: `Fill correct Mail Of Your ${type}`,
          text: "cc* is mandatory here if no one is in cc pass your cms mail in cc",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Function to send email
  //  const sendEmailToMemtor = () => {

  //   if(type)

  // };

  console.log(cflToMentorMail, "cflToMentorMail...");

  const navigate = useNavigate();

  const handleCflMentorMailHistory = () => {
    navigate("/cfl_mentor_meeting_history", {
      state: { data: location?.state.data },
    });
  };
  return (
    <div
      className="p-5 "
      style={{ backgroundColor: "rgba(245, 222, 179, 0.6)" }}
    >
      <div className="head flex items-center ">
        <p className="text-gray-600 text-3xl text-center  border-b-2 border-gray-400 w-[530px] ml-[400px]">
          {`Request a meeting with your ${type} `}
        </p>
        <div
          className="btn flex items-center space-x-3 p-2 bg-blue-900 text-white rounded-xl ml-[230px] hover:cursor-pointer hover:bg-black hover:text-white"
          onClick={handleCflMentorMailHistory}
        >
          <p className="">E-Mail History</p>
          <GrHistory />
        </div>
      </div>

      <div className="grid grid-cols-2 ">
        <div className="col-span-1">
          <Lottie
            loop={true}
            animationData={animationData}
            style={{
              height: "460px",
              width: "700px",
              marginTop: "50px",
            }}
          />
        </div>
        <div className="col-span-1 w-[600px]" style={{ marginTop: "-10px" }}>
          <div className="div mt-[55px] bg-blue-200 p-1 rounded-2xl">
            <div className="email flex space-x-5 items-center ml-5">
              <p className="text-xl text-gray-600 text-center mt-5 ml-2">
                {`Write a Mail to Your ${type} to Schedule a Meeting`}
              </p>
              <TfiEmail className="text-2xl text-gray-700 mt-5" />
            </div>
            <div className="div p-6 rounded-xl">
              <div className="flex flex-col mb-2">
                <div className="flex flex-col mb-2">
                  <label className="mb-1 font-semibold text-[16px] text-gray-600">
                    To
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
                    onChange={handleTo}
                    name="mentorEmail"
                    style={{ backgroundColor: "rgb(255, 255, 230)" }}
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label className="mb-1 font-semibold text-[16px] text-gray-600">
                    CC*
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
                    onChange={handleCC}
                    name="ccEmail"
                    style={{ backgroundColor: "rgb(255, 255, 230)" }}
                  />
                </div>
                <label className="mb-1 font-semibold text-[16px] text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wider"
                  onChange={handleSubject}
                  name="subject"
                  style={{ backgroundColor: "rgb(255, 255, 230)" }}
                />
              </div>

              <div className="body flex flex-col">
                <label className="mb-1 font-semibold text-[16px] text-gray-600">
                  Agenda Of Mentoring Session
                </label>
                <textarea
                  className="border-[1px] border-gray-400 p-2 outline-none rounded-xl tracking-wide"
                  rows="1"
                  onChange={handleMessage}
                  name="message"
                  style={{ backgroundColor: "rgb(255, 255, 230)" }}
                />
              </div>
            </div>

            <div
              className="mail-btn  p-2  text-white  hover:cursor-pointer pb-4"
              onClick={sendEmailToMemtor}
            >
              {loading ? (
                <div className="w-[170px] flex items-center space-x-10 bg-yellow-700 rounded-xl p-2 ml-[200px] ">
                  <CircularProgress size="1rem" />
                  <p className="text-blue">Loading...</p>
                </div>
              ) : iscflToMentorMailMailSent ? (
                <div className="w-[220px] flex items-center bg-green-700 rounded-xl p-2 ml-[170px]">
                  <p className="ml-5">Sent Successfully</p>
                  <SiTicktick className="text-2xl ml-5" />
                </div>
              ) : (
                <div className="w-[170px] flex items-center bg-blue-700 rounded-xl p-2 hover:bg-red-700 ml-[200px]">
                  <p className="ml-5">Send Mail</p>
                  <SiMinutemailer className="text-2xl ml-5" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestMeeting;
