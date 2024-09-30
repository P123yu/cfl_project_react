// import { CircularProgress } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { IoPaperPlane } from "react-icons/io5";
// import CflLogo from "../image/CflLogo.png";
// import CompanyLogo from "../image/CompanyLogo.png";

// function Gemini() {
//   const [question, setQuestion] = useState("");
//   const [loading, setLoading] = useState();
//   const [answer, setAnswer] = useState("");
//   const handleChange = (e) => {
//     setQuestion(e.target.value);
//   };
//   const generateAnswer = () => {
//     const url =
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAN999X9WQYqsV8mBT5wAaLXJRg-pa-X2g";
//     const data = { contents: [{ parts: [{ text: question }] }] };
//     axios.post(url, data).then((res) => {
//       setLoading(false);
//       setAnswer(res["data"]["candidates"][0]["content"]["parts"][0]["text"]);
//     });
//   };

//   console.log(answer, "answer");
//   return (
//     <div className="bg-blue-200" style={{ minHeight: "100vh" }}>
//       <div className="flex items-center justify-between ">
//         <img
//           src={CompanyLogo}
//           className="w-[150px] h-[70px] ml-5"
//           //   style={{ marginTop: "-7px" }}
//         />

//         <p className="text-4xl text-center pt-10 dash-text font-bold">
//           Ask Anything To CMS Google Gemini Ai
//         </p>
//         <img
//           src={CflLogo}
//           className="w-[150px] h-[120px] mr-5"
//           //   style={{ marginTop: "-7px" }}
//         />
//       </div>

//       <div className="text ml-[300px]">
//         <textarea
//           rows="2"
//           cols="80"
//           onChange={handleChange}
//           className="outline-none rounded-xl mt-10 p-5 text-lg"
//         ></textarea>
//       </div>

//       <div
//         className="ask flex items-center space-x-2 bg-blue-800 text-white w-[93px] py-1 ml-[300px] mt-2 rounded-md hover:bg-green-700 hover:cursor-pointer"
//         onClick={() => {
//           generateAnswer();
//           setLoading(true);
//         }}
//       >
//         <button className="text-md text-center ml-2">Ask Ai</button>
//         <IoPaperPlane className="text-2xl" />
//       </div>

//       {loading ? (
//         <div className="spinner text-center">
//           <div className="load flex items-center space-x-5 ml-[400px]">
//             <CircularProgress size="3rem" className="mt-10" />
//             <p className="text-xl mt-10 font-bold">
//               Hold On CMS AI Is Processing Your Request
//             </p>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}

//       {answer ? (
//         <>
//           <div className="div mx-[200px] mt-14">
//             <p className="text-lg font-bold">Your Answer</p>
//             <div className="bg-black text-white font-bold rounded-xl">
//               <p className="p-10">{answer}</p>
//             </div>
//           </div>
//           <div className=" bg-blue-200 h-10"></div>
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default Gemini;

import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";
import CflLogo from "../image/CflLogo.png";
import CompanyLogo from "../image/CompanyLogo.png";

function Gemini() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const generateAnswer = () => {
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAN999X9WQYqsV8mBT5wAaLXJRg-pa-X2g";
    const data = { contents: [{ parts: [{ text: question }] }] };
    setLoading(true);
    axios.post(url, data).then((res) => {
      setLoading(false);
      const rawAnswer =
        res["data"]["candidates"][0]["content"]["parts"][0]["text"];
      const formattedAnswer = rawAnswer.replace(/\n/g, "<br/>");
      setAnswer(formattedAnswer);
    });
  };

 
  return (
    <div className="bg-blue-200 cms-dashboard" style={{ minHeight: "100vh" }}>
      <div className="flex items-center justify-between ">
        <img src={CompanyLogo} className="w-[150px] h-[70px] ml-5" />

        <p className="text-4xl text-center pt-10 dash-text font-bold mb-2">
          Ask Anything To CMS Google Gemini Ai
        </p>
        <img src={CflLogo} className="w-[150px] h-[120px] mr-5" />
      </div>

      <div className="text ml-[300px]">
        <textarea
          rows="2"
          cols="80"
          onChange={handleChange}
          className="outline-none rounded-xl mt-10 p-5 text-lg"
        ></textarea>
      </div>

      <div
        className="ask flex items-center space-x-2 bg-blue-800 text-white w-[93px] py-1 ml-[300px] mt-2 rounded-md hover:bg-green-700 hover:cursor-pointer"
        onClick={generateAnswer}
      >
        <button className="text-md text-center ml-2">Ask Ai</button>
        <IoPaperPlane className="text-2xl" />
      </div>

      {loading && (
        <div className="spinner text-center">
          <div className="load flex items-center space-x-5 ml-[400px]">
            <CircularProgress size="3rem" className="mt-10" />
            <p className="text-xl mt-10 font-bold">
              Hold On CMS AI Is Processing Your Request
            </p>
          </div>
        </div>
      )}

      {answer && (
        <>
          <div className="mx-[200px] mt-14">
            <p className="text-lg font-bold">Your Answer</p>
            <div className="bg-black text-white font-bold rounded-xl">
              <p
                className="p-10"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </div>
          </div>
          <div className=" bg-blue-200 h-10"></div>
        </>
      )}
    </div>
  );
}

export default Gemini;
