// import { Box, Modal } from "@mui/material"; // Import MUI components
// import Tooltip from "@mui/material/Tooltip";
// import React, { useEffect, useState } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import { FcRating } from "react-icons/fc";
// import { useLocation, useNavigate } from "react-router-dom";
// import TalentMatriximage from "../image/TalentMatrix.png";

// function TalentMatrix() {
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 700,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//     maxHeight: "80vh", // Adjust this value as needed
//     overflowY: "auto",
//   };

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [performanceRating, setPerformanceRating] = useState("");
//   const [potentialRating, setPotentialRating] = useState("");
//   console.log(potentialRating, performanceRating, "rating");

//   const [combined, setCombined] = useState({ potential: "", performance: "" });
//   console.log(combined, "combined");

//   //   useEffect(() => {
//   //     setCombined({ ...combined, potential: 2, performance: 3 });
//   //   }, [performanceRating, potentialRating]);

//   useEffect(() => {
//     setCombined((prevCombined) => ({
//       ...prevCombined,
//       potential: performanceRating,
//       performance: potentialRating,
//     }));
//   }, [performanceRating, potentialRating]);

//   const [isDisabled, setIsDisabled] = useState(true);

//   //   // Function to toggle the disabled state
//   //   const toggleDisabled = () => {
//   //     setIsDisabled(true);
//   //   };

//   //   useEffect(() => {
//   //     setCombined({
//   //       potential: potentialRating || "",
//   //       performance: performanceRating || "",
//   //     });
//   //   }, [performanceRating, potentialRating]);

//   console.log(combined, "combined");

//   const [talentMatrixNumber, setTalentMatrixNumber] = useState(0);
//   const handleTalentMatrixNumber = (num) => {
//     console.log(num, "num");
//     setTalentMatrixNumber(num);
//   };

//   // dropdown
//   const options1 = [
//     "Select",
//     "talent",
//     "critical",
//     "inconsistent",
//     "average",
//     "risk",
//   ];
//   const defaultOption1 = options1[0];

//   const [talentLevel, setTalentLevel] = useState("");

//   const handleSelect = (selectedOption) => {
//     setTalentLevel(selectedOption?.value);
//     console.log(selectedOption, "selectedOption");
//   };
//   console.log(talentLevel, "talentlevel");

//   const location = useLocation();
//   const empId = location?.state?.data;

//   const navigate = useNavigate();
//   const handleMovement = () => {
//     navigate("/lateral-shift", {
//       state: {
//         data: { rating: combined, talentLevel: talentLevel, empId: empId },
//       },
//     });
//   };
//   return (
//     <div className="p-10">
//       <p
//         className="text-center text-2xl border-b-2 border-gray-500 w-1/5 ml-[480px] mb-5"
//         style={{ marginTop: "-20px" }}
//       >
//         Rating To CFL'S
//       </p>
//       <div className="flex  items-center space-x-[750px] ml-16">
//         <div className="talent-dropdown flex space-x-5 items-center">
//           <p className="text-xl">Select Talent</p>
//           <Dropdown
//             options={options1}
//             onChange={handleSelect}
//             value={defaultOption1}
//             placeholder="Select an option"
//           />
//         </div>

//         <div className="btn p-2 bg-blue-900 text-white w-[140px]  rounded-md hover:bg-red-800">
//           <button onClick={handleOpen}>Rating Parameter</button>
//         </div>
//       </div>

//       <Modal open={open} onClose={handleClose}>
//         <Box sx={style}>
//           <div className="div">
//             <div className="">
//               <img
//                 src={TalentMatriximage}
//                 alt="Talent Matrix"
//                 className="w-full h-[400px]"
//               />
//             </div>

//             <div className="matrix mt-10 px-10">
//               <div className="grid grid-cols-3 gap-2 p-4">
//                 <Tooltip title="Critical" arrow placement="left">
//                   <div className="border p-4 text-center bg-blue-600 text-white">
//                     <p>Rating(7)</p>
//                     <p>(High Potential,Low Performance)</p>
//                   </div>
//                 </Tooltip>
//                 <Tooltip title="Talent" arrow placement="top">
//                   <div className="border p-4 text-center bg-blue-800 text-white">
//                     <p>Rating(8)</p>
//                     <p>(High Potential,Moderate Performance)</p>
//                   </div>
//                 </Tooltip>
//                 <Tooltip title="Talent" arrow placement="right">
//                   <div className="border p-4 text-center bg-blue-800 text-white">
//                     <p>Rating(9)</p>
//                     <p>(High Potential,High Performance)</p>
//                   </div>
//                 </Tooltip>

//                 <Tooltip title="Inconsistent" arrow placement="left">
//                   <div className="border p-4 text-center bg-blue-500">
//                     <p>Rating(4)</p>
//                     <p>(Moderate Potential,Low Performance)</p>
//                   </div>
//                 </Tooltip>

//                 <Tooltip title="Critical" arrow placement="left">
//                   <div className="border p-4 text-center bg-blue-600 text-white">
//                     <p>Rating(5)</p>
//                     <p>(Moderate Potential,Moderate Performance)</p>
//                   </div>
//                 </Tooltip>
//                 <Tooltip title="Talent" arrow placement="right">
//                   <div className="border p-4 text-center bg-blue-800 text-white">
//                     <p>Rating(6)</p>
//                     <p>(Moderate Potential,High Performance)</p>
//                   </div>
//                 </Tooltip>
//                 <Tooltip title="Risk" arrow placement="left">
//                   <div className="border p-4 text-center bg-blue-100">
//                     <p>Rating(1)</p>
//                     <p>(Low Potential,Low Performance)</p>
//                   </div>
//                 </Tooltip>
//                 <Tooltip title="Average" arrow placement="bottom">
//                   <div className="border p-4 text-center bg-blue-300 ">
//                     <p>Rating(2)</p>
//                     <p>(Low Potential,Moderate Performance)</p>
//                   </div>
//                 </Tooltip>

//                 <Tooltip title="Critical" arrow placement="right">
//                   <div className="border p-4 text-center bg-blue-600 text-white">
//                     <p>Rating(3)</p>
//                     <p>(Low Potential,High Performance)</p>
//                   </div>
//                 </Tooltip>
//               </div>
//             </div>
//           </div>
//         </Box>
//       </Modal>

//       <div className="matrix mt-10 px-10 " stle={{ marginTop: "-800px" }}>
//         <div className="grid grid-cols-3 gap-4 p-4">
//           {/* Cell 1 */}
//           <Tooltip title="Critical" arrow placement="left">
//             <div className="border p-4 text-center bg-red-400 text-white rounded-xl">
//               <p className="text-xl">Potential Gem</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(7);
//                     setPotentialRating(7);
//                     handleTalentMatrixNumber(7);
//                     if (talentMatrixNumber == 7 && talentLevel === "critical") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 7 && talentLevel === "critical" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           {/* Cell 2 */}
//           <Tooltip title="Talent" arrow placement="top">
//             <div className="border p-4 text-center bg-pink-700 text-white rounded-xl">
//               <p className="text-xl">High Potential</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(8);
//                     setPotentialRating(8);
//                     handleTalentMatrixNumber(8);
//                     if (talentMatrixNumber == 8 && talentLevel === "talent") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 8 && talentLevel === "talent" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           {/* Cell 3 */}
//           <Tooltip title="Talent" arrow placement="right">
//             <div className="border p-4 text-center bg-green-700 text-white rounded-xl">
//               <p className="text-xl">Star</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(9);
//                     setPotentialRating(9);
//                     handleTalentMatrixNumber(9);
//                     if (talentMatrixNumber == 9 && talentLevel === "talent") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 9 && talentLevel === "talent" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           {/* Cell 4 */}
//           <Tooltip title="Inconsistent" arrow placement="left">
//             <div className="border p-4 text-center bg-red-500 text-white rounded-xl">
//               <p className="text-xl">Inconsistent Player</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(4);
//                     setPotentialRating(4);
//                     handleTalentMatrixNumber(4);
//                     if (
//                       talentMatrixNumber == 4 &&
//                       talentLevel === "inconsistent"
//                     ) {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 4 && talentLevel === "inconsistent" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           {/* Cell 5 */}
//           <Tooltip title="Critical" arrow placement="left">
//             <div className="border p-4 text-center bg-pink-600 text-white rounded-xl">
//               <p className="text-xl">Core Player</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(5);
//                     setPotentialRating(5);
//                     handleTalentMatrixNumber(5);
//                     if (talentMatrixNumber == 5 && talentLevel === "critical") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 5 && talentLevel === "critical" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           {/* Cell 6 */}
//           <Tooltip title="Talent" arrow placement="right">
//             <div className="border p-4 text-center bg-green-500 text-white rounded-xl">
//               <p className="text-xl">High Performer</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(6);
//                     setPotentialRating(6);
//                     handleTalentMatrixNumber(6);
//                     if (talentMatrixNumber == 6 && talentLevel === "talent") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 6 && talentLevel === "talent" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           <Tooltip title="Risk" arrow placement="left">
//             <div className="border p-4 text-center bg-red-800 text-white rounded-xl">
//               <p className="text-xl">Risk</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(1);
//                     setPotentialRating(1);
//                     handleTalentMatrixNumber(1);
//                     if (talentMatrixNumber == 1 && talentLevel === "risk") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 1 && talentLevel === "risk" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           <Tooltip title="Average" arrow placement="bottom">
//             <div className="border p-4 text-center bg-pink-500  text-white rounded-xl">
//               <p className="text-xl">Average Performer</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-gray-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(2);
//                     setPotentialRating(2);
//                     handleTalentMatrixNumber(2);
//                     if (talentMatrixNumber == 2 && talentLevel === "average") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 2 && talentLevel === "average" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>

//           <Tooltip title="Critical" arrow placement="right">
//             <div className="border p-4 text-center bg-green-400 text-white rounded-xl">
//               <p className="text-xl">Solid Performer</p>
//               <div className="rating-button flex space-x-2 items-center p-1 bg-green-600 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
//                 <button
//                   onClick={() => {
//                     setPerformanceRating(3);
//                     setPotentialRating(3);
//                     handleTalentMatrixNumber(3);
//                     if (talentMatrixNumber == 3 && talentLevel === "critical") {
//
//                     }
//                   }}
//                   className="ml-2"
//                 >
//                   Give Rating
//                 </button>
//                 <FcRating />
//               </div>
//               <div
//                 className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"
//                 // style={{
//                 //   backgroundColor: true ? "gray" : "#007bff",
//                 // }}
//               >
//                 {talentMatrixNumber == 3 && talentLevel === "critical" ? (
//                   <div className="" style={{ marginLeft: "-20px" }}>
//                     <div className="potential flex space-x-5 ml-12">
//                       <label>Potential Rating</label>
//                       <p>{combined?.potential}</p>
//                     </div>
//                     <div className="performance flex space-x-5 ml-12">
//                       <label>Performance Rating</label>
//                       <p>{combined?.performance}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </Tooltip>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TalentMatrix;

import { Box, Modal } from "@mui/material"; // Import MUI components
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FcRating } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TalentMatriximage from "../image/TalentMatrix.png";

// import Tooltip from "@mui/material/Tooltip";
// import React, { useEffect, useState } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import { FcRating } from "react-icons/fc";
// import { useLocation, useNavigate } from "react-router-dom";

function TalentMatrix() {
  const location = useLocation();
  console.log(location, "matrix");
  const empId = location?.state?.data;
  console.log(empId, "empIdppppppppppppppp");

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // dropdown
  const options1 = ["Select", "1", "2", "3"];
  const defaultOption1 = options1[0];

  const options2 = ["Select", "1", "2", "3"];
  const defaultOption2 = options2[0];

  const [potentialLevel, setPotentialLevel] = useState("");

  const handleSelectPotential = (selectedOption) => {
    setPotentialLevel(selectedOption?.value);
    console.log(selectedOption, "selectedOption");
  };

  const [performanceLevel, setPerformanceLevel] = useState("");

  const handleSelectPerformance = (selectedOption) => {
    setPerformanceLevel(selectedOption?.value);
    console.log(selectedOption, "selectedOption");
  };
  // console.log(talentLevel, "talentlevel");

  console.log(performanceLevel, "performancelevel", potentialLevel);

  const navigate = useNavigate();
  // const handleMovement = () => {
  //   navigate("/lateral-shift", {
  //     // state: {
  //     //   // data: { rating: combined, talentLevel: talentLevel, empId: empId },
  //     //   data: { rating: combined },
  //     // },
  //   });
  // };

  // console.log(openStar, "openStar");

  console.log(performanceLevel, "performanceLevel");

  const [level, setLevel] = useState(0);
  // useEffect to handle level logic
  useEffect(() => {
    if (potentialLevel === "1" && performanceLevel === "1") {
      setLevel(1);
    } else if (potentialLevel === "1" && performanceLevel === "2") {
      setLevel(2);
    } else if (potentialLevel === "1" && performanceLevel === "3") {
      setLevel(3);
    } else if (potentialLevel === "2" && performanceLevel === "1") {
      setLevel(4);
    } else if (potentialLevel === "2" && performanceLevel === "2") {
      setLevel(5);
    } else if (potentialLevel === "2" && performanceLevel === "3") {
      setLevel(6);
    } else if (potentialLevel === "3" && performanceLevel === "1") {
      setLevel(7);
    } else if (potentialLevel === "3" && performanceLevel === "2") {
      setLevel(8);
    } else if (potentialLevel === "3" && performanceLevel === "3") {
      setLevel(9);
    } else {
      setLevel(0);
    }
  }, [potentialLevel, performanceLevel]);

  const [talentLevel, setTalentLevel] = useState("");

  useEffect(() => {
    if (potentialLevel == 1 && performanceLevel == 1) {
      setTalentLevel("Risk");
      Swal.fire({
        title: "Risk",
      });
    } else if (potentialLevel == 1 && performanceLevel == 2) {
      setTalentLevel("Average Performer");
      Swal.fire({
        title: "Average Performer",
      });
    } else if (potentialLevel == 1 && performanceLevel == 3) {
      setTalentLevel("Solid Performer");
      Swal.fire({
        title: "Solid Performer",
      });
    } else if (potentialLevel == 2 && performanceLevel == 1) {
      setTalentLevel("Inconsistent Player");
      Swal.fire({
        title: "Inconsistent Player",
      });
    } else if (potentialLevel == 2 && performanceLevel == 2) {
      setTalentLevel("Core Player");
      Swal.fire({
        title: "Core Player",
      });
    } else if (potentialLevel == 2 && performanceLevel == 3) {
      setTalentLevel("High Performer");
      Swal.fire({
        title: "High Performer",
      });
    } else if (potentialLevel == 3 && performanceLevel == 1) {
      setTalentLevel("Potential Gem");
      Swal.fire({
        title: "Potential Gem",
      });
    } else if (potentialLevel == 3 && performanceLevel == 2) {
      setTalentLevel("High Potential");
      Swal.fire({
        title: "High Potential",
      });
    } else if (potentialLevel == 3 && performanceLevel == 3) {
      setTalentLevel("Star");
      Swal.fire({
        title: "Star",
      });
    }
  }, [potentialLevel && performanceLevel]);

  console.log(level, "level");
  console.log(talentLevel, "talentLevel.../???");
  // const [selectedRating, setSelectedRating] = useState({
  //   question1: null,
  //   question2: null,
  //   question3: null,
  //   question4: null,
  //   question5: null,
  // });

  // const handleRatingChange = (e) => {
  //   const { name, value } = e.target;
  //   setSelectedRating((prevRatings) => ({
  //     ...prevRatings,
  //     [name]: value,
  //   }));
  // };

  // console.log(selectedRating, "selectedRatings");

  // Initialize selectedRating state with specific questions only
  const [selectedRating, setSelectedRating] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    empId: empId,
  });

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "question1",
        "question2",
        "question3",
        "question4",
        "question5",
      ].includes(name)
    ) {
      setSelectedRating((prevRatings) => ({
        ...prevRatings,
        [name]: value,
      }));
    }
  };

  console.log(selectedRating, "selectedRatings");
  const [competancy, setCompetancy] = useState(false);

 
  const [quarter, setQuarter] = useState("");

  useEffect(() => {
    const currentQuarter = getQuarter();
    setQuarter(currentQuarter);
  }, []);

  function getQuarter() {
    const date = new Date();
    const month = date.getMonth() + 1;

    if (month >= 1 && month <= 3) {
      return "Q4";
    } else if (month >= 4 && month <= 6) {
      return "Q1";
    } else if (month >= 7 && month <= 9) {
      return "Q2";
    } else if (month >= 10 && month <= 12) {
      return "Q3";
    } else {
      throw new Error("Invalid month: " + month);
    }
  }

  // const [competancyData, setCompetancyData] = useState("");
  useEffect(() => {
    if (competancy) {
      axios
        .get(`http://localhost:8080/questionRadio/get/${empId}/${quarter}`)
        .then((res) => {
          alert("competancy");
          console.log(res.data, "res...");
          // setCompetancyData(res?.data);
          Swal.fire({
            title: "Successfully Submitted",
            icon: "success",
          });
          navigate("/competancy", {
            state: {
              data: res.data,
              potentialLevel: potentialLevel,
              performanceLevel: performanceLevel,
              talentLevel: talentLevel,
            },
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setCompetancy(false);
        });
    }
  }, [competancy, empId, navigate, talentLevel,quarter]);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/questionRadio/create", selectedRating)
      .then((res) => {
        setCompetancy(true);
      })
      .catch((err) => {
        Swal.fire({
          title: "Answer Not Submitted",
          icon: "error",
        });
      });
  };

  return (
    <div className="p-10" style={{ width: "100vw" }}>
      <p
        className="text-center text-2xl border-b-2 border-gray-500 w-1/5 ml-[480px] mb-5"
        style={{ marginTop: "-20px" }}
      >
        Rating To CFL'S
      </p>
      <div className="flex  items-center space-x-[750px] ml-16">
        <div className="talent-dropdown flex space-x-5 items-center">
          <div className="potential">
            <p className="text-lg">Potential</p>
            <Dropdown
              options={options1}
              onChange={handleSelectPotential}
              value={defaultOption1}
              placeholder="Select an option"
            />
          </div>

          <div className="performance">
            <p className="text-lg">Performance</p>
            <Dropdown
              options={options2}
              onChange={handleSelectPerformance}
              value={defaultOption2}
              placeholder="Select an option"
            />
          </div>
        </div>

        <div className="btn p-2 bg-blue-900 text-white w-[140px]  rounded-md hover:bg-red-800">
          <button onClick={handleOpen}>Rating Parameter</button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="div">
            <div className="">
              <img
                src={TalentMatriximage}
                alt="Talent Matrix"
                className="w-full h-[400px]"
              />
            </div>

            <div className="matrix mt-10 px-10">
              <div className="grid grid-cols-3 gap-2 p-4">
                <Tooltip title="Critical" arrow placement="left">
                  <div className="border p-4 text-center bg-blue-600 text-white">
                    <p>Rating(7)</p>
                    <p>(High Potential,Low Performance)</p>
                  </div>
                </Tooltip>
                <Tooltip title="Talent" arrow placement="top">
                  <div className="border p-4 text-center bg-blue-800 text-white">
                    <p>Rating(8)</p>
                    <p>(High Potential,Moderate Performance)</p>
                  </div>
                </Tooltip>
                <Tooltip title="Talent" arrow placement="right">
                  <div className="border p-4 text-center bg-blue-800 text-white">
                    <p>Rating(9)</p>
                    <p>(High Potential,High Performance)</p>
                  </div>
                </Tooltip>

                <Tooltip title="Inconsistent" arrow placement="left">
                  <div className="border p-4 text-center bg-blue-500">
                    <p>Rating(4)</p>
                    <p>(Moderate Potential,Low Performance)</p>
                  </div>
                </Tooltip>

                <Tooltip title="Critical" arrow placement="left">
                  <div className="border p-4 text-center bg-blue-600 text-white">
                    <p>Rating(5)</p>
                    <p>(Moderate Potential,Moderate Performance)</p>
                  </div>
                </Tooltip>
                <Tooltip title="Talent" arrow placement="right">
                  <div className="border p-4 text-center bg-blue-800 text-white">
                    <p>Rating(6)</p>
                    <p>(Moderate Potential,High Performance)</p>
                  </div>
                </Tooltip>
                <Tooltip title="Risk" arrow placement="left">
                  <div className="border p-4 text-center bg-blue-100">
                    <p>Rating(1)</p>
                    <p>(Low Potential,Low Performance)</p>
                  </div>
                </Tooltip>
                <Tooltip title="Average" arrow placement="bottom">
                  <div className="border p-4 text-center bg-blue-300 ">
                    <p>Rating(2)</p>
                    <p>(Low Potential,Moderate Performance)</p>
                  </div>
                </Tooltip>

                <Tooltip title="Critical" arrow placement="right">
                  <div className="border p-4 text-center bg-blue-600 text-white">
                    <p>Rating(3)</p>
                    <p>(Low Potential,High Performance)</p>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="matrix mt-10 px-10 " stle={{ marginTop: "-800px" }}>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Tooltip title="Critical" arrow placement="left">
            {potentialLevel == 3 && performanceLevel == 1 ? (
              <div className="border p-4 text-center bg-red-500 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">Potential Gem</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(1);
                      setPotentialLevel(3);
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-500 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-red-500 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">Potential Gem</p>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Star" arrow placement="top">
            {potentialLevel == 3 && performanceLevel == 2 ? (
              <div className="border p-4 text-center bg-pink-900 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">High Potential</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(2);
                      setPotentialLevel(3);
                      // if (potentialLevel == 3 && performanceLevel == 2) {
                      // }
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-pink-900 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">High Potential</p>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Star" arrow placement="right">
            {potentialLevel == 3 && performanceLevel == 3 ? (
              <div className="border p-4 text-center bg-green-700 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">Star</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(3);
                      setPotentialLevel(3);
                      // if (potentialLevel == 3 && performanceLevel == 3) {
                      // }
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-red-400 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">Star</p>

                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Inconsistent" arrow placement="left">
            {potentialLevel == 2 && performanceLevel == 1 ? (
              <div className="border p-4 text-center bg-red-600 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">Inconsistent Player</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(1);
                      setPotentialLevel(2);
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-red-600 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">Inconsistent Player</p>

                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Critical" arrow placement="left">
            {potentialLevel == 2 && performanceLevel == 2 ? (
              <div className="border p-4 text-center bg-pink-700 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">Core Player</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(2);
                      setPotentialLevel(2);
                      if (potentialLevel == 2 && performanceLevel == 2) {
                      }
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-pink-700 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">Core Player</p>

                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Star" arrow placement="right">
            {potentialLevel == 2 && performanceLevel == 3 ? (
              <div className="border p-4 text-center bg-green-500 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">High Performer</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(3);
                      setPotentialLevel(2);
                      // if (potentialLevel == 2 && performanceLevel == 3) {
                      // }
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-green-500 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">High Performer</p>

                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Risk" arrow placement="left">
            {potentialLevel == 1 && performanceLevel == 1 ? (
              <div className="border p-4 text-center bg-red-800 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">Risk</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(1);
                      setPotentialLevel(1);
                      if (potentialLevel == 1 && performanceLevel == 1) {
                      }
                    }}
                    className="ml-2"
                  >
                    Risk
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-red-800 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">Risk</p>

                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Average" arrow placement="bottom">
            {potentialLevel == 1 && performanceLevel == 2 ? (
              <div className="border p-4 text-center bg-pink-500 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">Average Performer</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(2);
                      setPotentialLevel(1);
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating  rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-pink-500  text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">Average Performer</p>

                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>

          <Tooltip title="Critical" arrow placement="right">
            {potentialLevel == 1 && performanceLevel == 3 ? (
              <div className="border p-4 text-center bg-green-400 text-white rounded-xl transform scale-110 transition-transform duration-300">
                <p className="text-xl">Solid Performer</p>
                <div className="rating-button flex space-x-2 items-center p-1 bg-gray-500 rounded-md w-[125px] ml-[105px] mt-2 cursor-pointer">
                  <button
                    onClick={() => {
                      setPerformanceLevel(3);
                      setPotentialLevel(1);
                      // if (potentialLevel == 1 && performanceLevel == 3) {
                      // }
                    }}
                    className="ml-2"
                  >
                    Give Rating
                  </button>
                  <FcRating />
                </div>
                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            ) : (
              <div className="border p-4 text-center bg-green-400 text-white rounded-xl transition-transform duration-300">
                <p className="text-xl">Solid Performer</p>

                <div className="rating bg-green-700 rounded-md mt-2 bg-gray-700 w-[220px] ml-[60px]"></div>
              </div>
            )}
          </Tooltip>
        </div>
      </div>

      <div className="mt-10">
        {level === 9 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What specific achievements or projects has this employee
                    completed that demonstrate both high performance and future
                    potential?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) How has the employee displayed a willingness and
                    capability to take on more challenging tasks or leadership
                    roles?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) Can you provide examples of situations where the
                    employee has proactively learned new skills and applied them
                    effectively in their role?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) How does this employee contribute to driving team
                    success and inspiring others around them?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) What steps has the employee taken to exceed their
                    current job requirements, and how do you foresee them
                    fitting into future organizational needs?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 8 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What aspects of the employee's current role or
                    performance suggest that they have significant future
                    potential?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) Can you provide examples where the employee has taken on
                    new challenges or responsibilities with success?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) What skills or behaviors does the employee need to
                    develop to transition from moderate to high performance?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) How has the employee demonstrated a willingness and
                    capability to learn and grow in their role?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) What development plans or opportunities could help this
                    employee reach their full potential?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 7 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please rate the CFL on below areas
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What specific instances indicate that the employee has
                    potential for growth, despite their current low performance?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) What factors are contributing to the employee's low
                    performance, and how do you believe these can be addre
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) Has the employee expressed an interest in learning and
                    development, and how have they responded to such
                    opportunities so far?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) Are there any environmental, personal, or role-specific
                    barriers affecting the employee’s performance?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) What development plans or coaching strategies could help
                    the employee overcome current performance issues and realize
                    their potential?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 6 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) Can you provide examples of outstanding achievements or
                    contributions that demonstrate this employee’s high
                    performance?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) What areas do you believe limit the employee's potential
                    for future growth, despite their current success?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) How has the employee responded to opportunities for
                    development or taking on new challenges?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) Does the employee exhibit a growth mindset, or do they
                    seem content with their current level of responsibility?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) Are there skill gaps or behavioral factors that might
                    prevent the employee from transitioning into a more advanced
                    role?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 5 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What key achievements indicate that the employee is
                    performing at a moderate level, and what could they do to
                    improve further?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) Can you provide examples of situations where the
                    employee demonstrated some potential, but perhaps not
                    consistently?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) What areas does the employee need to develop to move
                    from a moderate to a high-performance and high-potential
                    category?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) How does the employee handle new tasks or
                    responsibilities that are slightly outside their current
                    scope?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) What level of initiative does the employee show in
                    seeking out opportunities for personal and professional
                    growth?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 4 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What factors contribute to the employee's current low
                    performance, and how do you believe they can improve?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) Are there any specific situations where the employee has
                    shown potential for growth, despite their current
                    performance?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) What support or development opportunities could help
                    this employee realize their potential and improve
                    performance?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) How does the employee respond to feedback, coaching, or
                    attempts at skill development?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) Are there environmental or role-specific barriers
                    affecting the employee's performance that, if removed, might
                    enable them to thrive?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 3 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What specific achievements demonstrate this employee’s
                    high level of performance in their current role?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) Why do you believe this employee's potential for future
                    growth or advancement is limited?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) How has the employee responded to past opportunities for
                    development or career progression?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) Does the employee show an interest in taking on more
                    responsibilities, or do they prefer to remain in their
                    current role?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) Are there skill gaps, mindset factors, or situational
                    limitations that prevent this employee from pursuing
                    higher-level opportunities?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 2 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What achievements or behaviors indicate that the
                    employee is performing at a moderate level?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) Why do you believe the employee has limited potential
                    for future growth within the organization?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) Has the employee shown any interest or capability in
                    developing new skills or taking on more complex tasks?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) What feedback or coaching has been provided, and how has
                    the employee responded to it?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) Are there specific areas of the employee's role where
                    improvement could enhance both their performance and
                    potential?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {level === 1 && (
          <div>
            <p className="text-3xl text-center text-gray-600 mb-5">
              Please Rate The CFL On Below Area
            </p>
            <div className="form bg-blue-100">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-6 bg-green-300 p-7 my-2 rounded-xl ml-10">
                  <div className="question1 text-xl my-2">
                    (1) What specific issues have led you to categorize this
                    employee's performance as low, and how have they impacted
                    the team or organization?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question2 text-xl my-2">
                    (2) Have there been instances where the employee resisted
                    taking on new responsibilities or learning new skills?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question3 text-xl my-2">
                    (3) How does the employee respond to feedback or attempts at
                    coaching to improve their performance?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question4 text-xl my-2">
                    (4) What efforts have been made to support this employee,
                    and how has the employee responded to those efforts?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                  <div className="question5 text-xl my-2">
                    (5) Are there underlying factors (e.g., lack of motivation,
                    skills gaps) that seem to limit both the employee's current
                    performance and future potential?
                  </div>
                  <textarea
                    cols="100"
                    rows="1"
                    className="outline-none rounded-md p-2"
                  />
                </div>

                {/* Radio buttons for each question */}
                <div className="col-span-2 p-7 mr-10">
                  {/* Question 1 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Low"
                          checked={selectedRating.question1 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question1"
                          value="Moderate"
                          checked={selectedRating.question1 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question1"
                          value="High"
                          checked={selectedRating.question1 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Low"
                          checked={selectedRating.question2 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question2"
                          value="Moderate"
                          checked={selectedRating.question2 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question2"
                          value="High"
                          checked={selectedRating.question2 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Low"
                          checked={selectedRating.question3 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question3"
                          value="Moderate"
                          checked={selectedRating.question3 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question3"
                          value="High"
                          checked={selectedRating.question3 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Low"
                          checked={selectedRating.question4 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question4"
                          value="Moderate"
                          checked={selectedRating.question4 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question4"
                          value="High"
                          checked={selectedRating.question4 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="ratingGroup my-2">
                    <div className="allRadio flex items-center space-x-7">
                      <div className="flex flex-col items-center text-xl my-7">
                        <label>Low</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Low"
                          checked={selectedRating.question5 === "Low"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>Moderate</label>
                        <input
                          type="radio"
                          name="question5"
                          value="Moderate"
                          checked={selectedRating.question5 === "Moderate"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                      <div className="flex flex-col items-center text-xl">
                        <label>High</label>
                        <input
                          type="radio"
                          name="question5"
                          value="High"
                          checked={selectedRating.question5 === "High"}
                          onChange={handleRatingChange}
                          style={{
                            transform: "scale(1.8)",
                            marginTop: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center space-x-10 ml-[550px]">
              <button
                onClick={() => {
                  setSelectedRating({
                    question1: null,
                    question2: null,
                    question3: null,
                    question4: null,
                    question5: null,
                  });
                  setLevel(0);
                }}
              >
                <p className="p-3 bg-blue-900 hover:bg-green-700 text-white rounded-xl mt-5 px-4 p-2 text-center">
                  Close
                </p>
              </button>

              <button
                className="p-3 bg-pink-700 hover:bg-red-900 text-white rounded-xl mt-5 px-4 p-2 text-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      {/* ================================================================================== */}
    </div>
  );
}

export default TalentMatrix;
