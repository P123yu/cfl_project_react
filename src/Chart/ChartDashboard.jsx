// import React from "react";
// import CflGeneralMarks from "./CflGeneralMarks";
// import CflNonTechnicalSkills from "./CflNonTechnicalSkills";
// import CflOtherSkills from "./CflOtherSkills";
// import CflPrimarySkills from "./CflPrimarySkills";
// import CflSecondarySkills from "./CflSecondarySkills";
// import CflTechnicalSkills from "./CflTechnicalSkills";
// import EmailStatusChart from "./EmailStatusChart";
// import NoOfRequestMail from "./NoOfRequestMail";
// import RatingChart from "./RatingChart";
// import RatingTable from "./RatingTable";

// function ChartDashboard({ empId, quarter }) {
//   console.log(quarter, empId);
//   return (
//     <div className="p-20">
//       <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl">
//         <p
//           className="text-center text-2xl mb-5 border-b-2 border-gray-700"
//           style={{ marginTop: "-10px" }}
//         >
//           CFL's Basic Information
//         </p>
//         <div className="grid grid-cols-3">
//           <div className="col-span-1 h-[400px]">
//             <p className="text-gray-700 text-xl mb-5 text-center">
//               Basic Technical Skills
//             </p>
//             <CflTechnicalSkills empId={empId} />
//           </div>
//           <div className="col-span-1 h-[400px]">
//             <p className="text-gray-700 text-xl mb-5 text-center">
//               Basic Non-Technical Skills
//             </p>
//             <CflNonTechnicalSkills empId={empId} />
//           </div>
//           <div className="col-span-1 h-[400px]">
//             <p className="text-gray-700 text-xl mb-5 text-center">
//               Xth,Xllth,Graduation Marks
//             </p>
//             <CflGeneralMarks empId={empId} />
//           </div>
//         </div>
//       </div>

//       <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
//         <p
//           className="text-center text-2xl mb-5 border-b-2 border-gray-700"
//           style={{ marginTop: "-10px" }}
//         >
//           CFL's Skills Information
//         </p>
//         <div className="grid grid-cols-3">
//           <div className="col-span-1 h-[400px]">
//             <p className="text-gray-700 text-xl mb-5 text-center">
//               Primary Skills
//             </p>
//             <CflPrimarySkills empId={empId} quarter={quarter} />
//           </div>
//           <div className="col-span-1 h-[400px]">
//             <p className="text-gray-700 text-xl mb-5 text-center">
//               Secondary Skills
//             </p>
//             <CflSecondarySkills empId={empId} quarter={quarter} />
//           </div>
//           <div className="col-span-1 h-[400px]">
//             <p className="text-gray-700 text-xl mb-5 text-center">
//               Other Skills
//             </p>
//             <CflOtherSkills empId={empId} quarter={quarter} />
//           </div>
//         </div>
//       </div>

//       <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
//         <p
//           className="text-center text-2xl mb-5 border-b-2 border-gray-700"
//           style={{ marginTop: "-10px" }}
//         >
//           No Of E-Mails Send To Mentor By Mentee
//         </p>
//         <div className="grid grid-cols-1">
//           <div className="col h-[520px]">
//             <NoOfRequestMail empId={empId} />
//           </div>
//         </div>
//       </div>

//       <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
//         <p
//           className="text-center text-2xl mb-5 border-b-2 border-gray-700"
//           style={{ marginTop: "-10px" }}
//         >
//           No Of E-Mails Requested,Accepted & Declined
//         </p>
//         <div className="grid grid-cols-3">
//           <div className="col"></div>
//           <div className="col h-[350px]">
//             <EmailStatusChart empId={empId} />
//           </div>
//           <div className="col"></div>
//         </div>
//       </div>

//       <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
//         <p
//           className="text-center text-2xl mb-5 border-b-2 border-gray-700"
//           style={{ marginTop: "-10px" }}
//         >
//           Rating Given By Manager
//         </p>
//         <div className="grid grid-cols-3">
//           <div className="col"></div>
//           <div className="col h-[350px]">
//             <RatingChart empId={empId} quarter={quarter} />
//           </div>
//           <div className="col"></div>
//         </div>
//       </div>

//       <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
//         <p
//           className="text-center text-2xl mb-5 border-b-2 border-gray-700"
//           style={{ marginTop: "-10px" }}
//         >
//           CFL's Information
//         </p>
//         <div className="grid grid-cols-1">
//           <div className="col-span-1 h-[350px]">
//             <RatingTable empId={empId} quarter={quarter} />
//           </div>
//         </div>
//       </div>
//       {/* <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
//         <p
//           className="text-center text-2xl mb-5 border-b-2 border-gray-700"
//           style={{ marginTop: "-10px" }}
//         >
//           Lateral Movement Given By Manager
//         </p>
//         <div className="grid grid-cols-3">
//           <div className="col h-[350px]">
//             <p className="text-center text-xl">Internal Lateral Movement</p>
//             <LateralMovementChart empId={empId} />
//           </div>
//           <div className="col"></div>
//           <div className="col h-[350px]">
//             <p className="text-center text-xl">
//               Organizational Lateral Movement
//             </p>
//             <OraganizationalMovementChart empId={empId} />
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default ChartDashboard;

import React from "react";
import CflGeneralMarks from "./CflGeneralMarks";
import CflPrimarySkills from "./CflPrimarySkills";
import EmailStatusChart from "./EmailStatusChart";
import NoOfRequestMail from "./NoOfRequestMail";
import RatingChart from "./RatingChart";
import RatingTable from "./RatingTable";

function ChartDashboard({ empId, quarter }) {
  console.log(quarter, empId);
  return (
    <div className="p-20">
      <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl">
        <p
          className="text-center text-2xl mb-5 border-b-2 border-gray-700"
          style={{ marginTop: "-10px" }}
        >
          CFL's Qualification Info
        </p>
        <div className="grid grid-cols-1">
          <div className="col-span-1 h-[400px]">
            <p className="text-gray-700 text-xl mb-5 text-center">
              Xth,Xllth,Graduation Marks
            </p>
            <CflGeneralMarks empId={empId} />
          </div>
        </div>
      </div>

      <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
        <p
          className="text-center text-2xl mb-5 border-b-2 border-gray-700"
          style={{ marginTop: "-10px" }}
        >
          CFL's Skills Information
        </p>
        <div className="grid grid-cols-1">
          <div className="col-span-1 h-[400px]">
            <p className="text-gray-700 text-xl mb-5 text-center">
              Primary Skills
            </p>
            <CflPrimarySkills empId={empId} quarter={quarter} />
          </div>
          {/* <div className="col-span-1 h-[400px]">
            <p className="text-gray-700 text-xl mb-5 text-center">
              Secondary Skills
            </p>
            <CflSecondarySkills empId={empId} quarter={quarter} />
          </div>
          <div className="col-span-1 h-[400px]">
            <p className="text-gray-700 text-xl mb-5 text-center">
              Other Skills
            </p>
            <CflOtherSkills empId={empId} quarter={quarter} />
          </div> */}
        </div>
      </div>

      <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
        <p
          className="text-center text-2xl mb-5 border-b-2 border-gray-700"
          style={{ marginTop: "-10px" }}
        >
          No Of E-Mails Send To Mentor By Mentee
        </p>
        <div className="grid grid-cols-1">
          <div className="col h-[520px]">
            <NoOfRequestMail empId={empId} />
          </div>
        </div>
      </div>

      <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
        <p
          className="text-center text-2xl mb-5 border-b-2 border-gray-700"
          style={{ marginTop: "-10px" }}
        >
          No Of E-Mails Requested,Accepted & Declined
        </p>
        <div className="grid grid-cols-3">
          <div className="col"></div>
          <div className="col h-[350px]">
            <EmailStatusChart empId={empId} />
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
        <p
          className="text-center text-2xl mb-5 border-b-2 border-gray-700"
          style={{ marginTop: "-10px" }}
        >
          Rating Given By Manager
        </p>
        <div className="grid grid-cols-3">
          <div className="col"></div>
          <div className="col h-[350px]">
            <RatingChart empId={empId} quarter={quarter} />
          </div>
          <div className="col"></div>
        </div>
      </div>

      <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
        <p
          className="text-center text-2xl mb-5 border-b-2 border-gray-700"
          style={{ marginTop: "-10px" }}
        >
          CFL's Information
        </p>
        <div className="grid grid-cols-1">
          <div className="col-span-1 h-[350px]">
            <RatingTable empId={empId} quarter={quarter} />
          </div>
        </div>
      </div>
      {/* <div className="basic-skills border-2 border-gray-500 p-12 rounded-xl mt-20">
        <p
          className="text-center text-2xl mb-5 border-b-2 border-gray-700"
          style={{ marginTop: "-10px" }}
        >
          Lateral Movement Given By Manager
        </p>
        <div className="grid grid-cols-3">
          <div className="col h-[350px]">
            <p className="text-center text-xl">Internal Lateral Movement</p>
            <LateralMovementChart empId={empId} />
          </div>
          <div className="col"></div>
          <div className="col h-[350px]">
            <p className="text-center text-xl">
              Organizational Lateral Movement
            </p>
            <OraganizationalMovementChart empId={empId} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ChartDashboard;
