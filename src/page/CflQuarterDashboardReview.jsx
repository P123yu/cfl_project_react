// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import CflQuarterFormReview from "../component/CflQuarterFormReview";

// function CflQuarterDashboardReview() {
//   const [value, setValue] = useState("");
//   const [quarter, setQuarter] = useState("");

//   useEffect(() => {
//     const currentQuarter = getQuarter();
//     setQuarter(currentQuarter);
//     setValue(currentQuarter);
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   function getQuarter() {
//     const date = new Date();
//     const month = date.getMonth() + 1;

//     if (month >= 1 && month <= 3) {
//       return "Q4";
//     } else if (month >= 4 && month <= 6) {
//       return "Q1";
//     } else if (month >= 7 && month <= 9) {
//       return "Q2";
//     } else if (month >= 10 && month <= 12) {
//       return "Q3";
//     } else {
//       throw new Error("Invalid month: " + month);
//     }
//   }

//   console.log(value, "Tab value");
//   console.log(quarter, "Current quarter");

//   const location = useLocation();
//   const empId = location?.state?.data?.empId;
//   console.log(location, empId, "vvvvvvvvvvrrr");

//   const navigate = useNavigate();

//   const handleRating = () => {
//     navigate("/rating");
//   };

//   return (
//     <div>
//       <div className="head flex items-center justify-between">
//         <p className="text-2xl p-5">Cfl Quarter Goal Setting</p>
//         <p
//           className="bg-blue-800 p-2 text-white rounded-md mr-5 hover:bg-green-500 hover:cursor-pointer"
//           onClick={handleRating}
//         >
//           Give Rating
//         </p>
//       </div>

//       <div className="tabs p-5 ml-5">
//         <Box sx={{ width: "100%" }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="secondary"
//             indicatorColor="secondary"
//             aria-label="secondary tabs example"
//             sx={{
//               "& .MuiTab-root": {
//                 fontWeight: "bold",
//                 fontSize: "1rem",
//               },
//             }}
//           >
//             <Tab value="Q1" label="Quarter 1" />
//             <Tab value="Q2" label="Quarter 2" />
//             <Tab value="Q3" label="Quarter 3" />
//             <Tab value="Q4" label="Quarter 4" />
//             <Tab value="annual" label="Annual" />
//           </Tabs>
//         </Box>
//       </div>
//       <div className="" style={{ marginTop: "-20px" }}>
//         {value === "Q1" && <CflQuarterFormReview props={empId} />}
//         {value === "Q2" && <CflQuarterFormReview props={empId} />}
//         {value === "Q3" && <CflQuarterFormReview props={empId} />}
//         {value === "Q4" && <CflQuarterFormReview props={empId} />}
//       </div>
//     </div>
//   );
// }

// export default CflQuarterDashboardReview;

import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import { decodeJwt } from "jose";
import React, { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CflQuarterFormReview from "../component/CflQuarterFormReview";
import useStore from "../component/ZustandStore";

function CflQuarterDashboardReview() {
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
    maxHeight: "80vh", // Adjust this value as needed
    overflowY: "auto",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState("");
  const [quarter, setQuarter] = useState("");

  useEffect(() => {
    const currentQuarter = getQuarter();
    setQuarter(currentQuarter);
    setValue(currentQuarter);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  console.log(value, "Tab value");
  console.log(quarter, "Current quarter");

  const location = useLocation();
  const empId = location?.state?.data?.empId;
  console.log(location, empId, "vvvvvvvvvvrrr");

  const navigate = useNavigate();

  const handleRating = () => {
    navigate("/rating", { state: { data: empId } });
  };

  const [mgrComment, setMgrComment] = useState({});
  const handleMgrComment = (e) => {
    const { name, value } = e.target;
    setMgrComment((prev) => ({ ...prev, [name]: value }));
  };

  console.warn(mgrComment, "mgrComment");

  const { jwtData } = useStore();

  const handleSaveManagerComments = () => {
    const completeFeedback = {
      ...mgrComment,
      menteeId: empId,
      managerEmail: decodeJwt(jwtData)?.sub || "",
    };

    axios
      .post(
        "http://localhost:8080/managerToCflFeedBack/create",
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
    <div>
      <div className="">
        <div className="nav px-5 flex items-center justify-between mr-7">
          <p className="text-2xl p-5">CFL Quarterly Goal Setting</p>
          <div className="btn flex items-center space-x-5 ">
            <div
              className="comments flex items-center space-x-2 bg-pink-700 p-2 px-2  text-white rounded-md hover:bg-red-500 hover:cursor-pointer"
              onClick={handleRating}
            >
              <p>Give Rating</p>
              <MdStarRate className="font-bolder text-2xl" />
            </div>

            <div
              className="comments flex items-center space-x-2 bg-blue-900 p-2 px-2  text-white rounded-md hover:bg-red-500 hover:cursor-pointer"
              onClick={handleOpen}
            >
              <p>Comments Here</p>
              <TfiCommentsSmiley className="font-bolder text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="tabs p-5 ml-5">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            sx={{
              "& .MuiTab-root": {
                fontWeight: "bold",
                fontSize: "1rem",
              },
            }}
          >
            <Tab value="Q1" label="Quarter 1" disabled={quarter !== "Q1"} />
            <Tab value="Q2" label="Quarter 2" disabled={quarter !== "Q2"} />
            <Tab value="Q3" label="Quarter 3" disabled={quarter !== "Q3"} />
            <Tab value="Q4" label="Quarter 4" disabled={quarter !== "Q4"} />
            <Tab value="annual" label="Annual" disabled={quarter !== "Q1"} />
          </Tabs>
        </Box>
      </div>
      <div className="" style={{ marginTop: "-20px" }}>
        <div className="" style={{ marginTop: "-20px" }}>
          {value === "Q1" && (
            <CflQuarterFormReview empId={empId} quarter="Q1" />
          )}
          {value === "Q2" && (
            <CflQuarterFormReview empId={empId} quarter="Q2" />
          )}
          {value === "Q3" && (
            <CflQuarterFormReview empId={empId} quarter="Q3" />
          )}
          {value === "Q4" && (
            <CflQuarterFormReview empId={empId} quarter="Q4" />
          )}
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="div">
            <div className="matrix mt-10 px-10">
              <div className="feedback">
                <p className="text-2xl textbg-gray-500 text-center mb-2 font-semibold">
                  Write Your Comments On This Goal Setting
                </p>
                <textarea
                  type="text"
                  rows={4}
                  className="border-2 border-gray-500 w-full rounded-xl p-5 text-xl"
                  name="feedbackMessage"
                  onChange={handleMgrComment}
                />
              </div>
              <button
                className="p-3 bg-blue-800 text-center text-white rounded-md ml-[240px] px-5 hover:bg-pink-600 mt-5"
                onClick={handleSaveManagerComments}
              >
                save
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CflQuarterDashboardReview;
