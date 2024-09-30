// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "react-calendar/dist/Calendar.css";
// import "react-date-picker/dist/DatePicker.css";

// function CflQuarterForm({ empId }) {
//   console.log(empId, "under props");
//   const [thirtyDaysGoals, setThirtyDaysGoals] = useState([]);
//   const [sixtyDaysGoals, setSixtyDaysGoals] = useState([]);
//   const [ninetyDaysGoals, setNinetyDaysGoals] = useState([]);

//   // Fetch Thirty Days Goals
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/Goals/thirty-days-goals/emp/${empId}`)
//       .then((res) => setThirtyDaysGoals(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Fetch Sixty Days Goals
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/Goals/sixty-days-goals/emp/${empId}`)
//       .then((res) => setSixtyDaysGoals(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Fetch Ninety Days Goals
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/Goals/ninety-days-goals/emp/${empId}`)
//       .then((res) => setNinetyDaysGoals(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const [cflSkills, setCflSkills] = useState({});

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/cflSkill/get/${empId}`)
//       .then((res) => setCflSkills(res.data))
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   const primarySkillsList =
//     cflSkills?.primarySkills?.replace(/,$/, "").split(",") || [];

//   console.log(primarySkillsList, "primarySkillsList");

//   const secondarySkillsList =
//     cflSkills?.secondarySkills?.replace(/,$/, "").split(",") || [];

//   console.log(secondarySkillsList, "secondarySkillsList");

//   const otherSkillsList =
//     cflSkills?.otherSkills?.replace(/,$/, "").split(",") || [];

//   console.log(otherSkillsList, "otherSkillsList");

//   console.log(cflSkills, "cflSkills......");
//   return (
//     <div className=" ">
//       <p className="border-[1px] border-gray-300 w-[1270px] ml-8"></p>

//       <div className="cfl-info p-10">
//         <div className="plan border-[2px] border-gray-300 p-6 rounded-xl">
//           <p className="text-2xl font-semibold text-gray-500 mt-6">
//             Thirty Days Plan
//           </p>
//           <p className="border-[1px] border-gray-400 mt-2"></p>
//           <div className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
//             {/* Global Labels */}
//             <div className="grid grid-cols-4 gap-4 font-bold">
//               <div>Goal</div>
//               <div>Deliverable/Measure of success</div>
//               <div>Overall Weightage</div>
//               <div>Status</div>
//             </div>

//             {/* Input Rows */}
//             {thirtyDaysGoals.map((row, index) => (
//               <div key={index} className="grid grid-cols-4 gap-4">
//                 <input
//                   type="text"
//                   value={row.goal}
//                   // onChange={(e) => handleInputChange30(index, "goal", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.deliverable}
//                   // onChange={(e) => handleInputChange30(index, "deliverable", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.weightage}
//                   // onChange={(e) => handleInputChange30(index, "weightage", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.status}
//                   // onChange={(e) => handleInputChange30(index, "status", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//               </div>
//             ))}
//           </div>

//           <p className="text-2xl font-semibold text-gray-500 mt-6">
//             Sixty Days Plan
//           </p>
//           <p className="border-[1px] border-gray-400 mt-2"></p>

//           <div className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
//             {/* Global Labels */}
//             <div className="grid grid-cols-4 gap-4 font-bold">
//               <div>Goal</div>
//               <div>Deliverable/Measure of success</div>
//               <div>Overall Weightage</div>
//               <div>Status</div>
//             </div>

//             {/* Input Rows */}
//             {sixtyDaysGoals.map((row, index) => (
//               <div key={index} className="grid grid-cols-4 gap-4">
//                 <input
//                   type="text"
//                   value={row.goal}
//                   // onChange={(e) => handleInputChange60(index, "goal", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.deliverable}
//                   // onChange={(e) => handleInputChange60(index, "deliverable", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.weightage}
//                   // onChange={(e) => handleInputChange60(index, "weightage", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   // value={row.status}
//                   // onChange={(e) => handleInputChange60(index, "status", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//               </div>
//             ))}
//           </div>

//           <p className="text-2xl font-semibold text-gray-500 mt-6">
//             Ninety Days Plan
//           </p>
//           <p className="border-[1px] border-gray-400 mt-2"></p>
//           <div className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
//             {/* Global Labels */}
//             <div className="grid grid-cols-4 gap-4 font-bold">
//               <div>Goal</div>
//               <div>Deliverable/Measure of success</div>
//               <div>Overall Weightage</div>
//               <div>Status</div>
//             </div>

//             {/* Input Rows */}
//             {ninetyDaysGoals.map((row, index) => (
//               <div key={index} className="grid grid-cols-4 gap-4">
//                 <input
//                   type="text"
//                   value={row.goal}
//                   // onChange={(e) => handleInputChange90(index, "goal", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.deliverable}
//                   // onChange={(e) => handleInputChange90(index, "deliverable", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.weightage}
//                   // onChange={(e) => handleInputChange90(index, "weightage", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//                 <input
//                   type="text"
//                   value={row.status}
//                   // onChange={(e) => handleInputChange90(index, "status", e)}
//                   className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <p className="text-2xl font-semibold text-gray-500 mt-6 mb-4">Skills</p>
//         <div className="skills border-[2px] border-gray-300 p-6 rounded-xl">
//           <p className="text-2xl font-semibold text-gray-500 mt-6">
//             PrimarySkills
//           </p>
//           <div className="PrimarySkills">
//             <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
//               {primarySkillsList
//                 ?.filter((skill) => skill.trim() !== "")
//                 .map((item, key) => (
//                   <div key={key} className="col-span-1 ml-2">
//                     <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
//                       <input
//                         type="text"
//                         value={item}
//                         className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
//                       />
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           <p className="text-2xl font-semibold text-gray-500 mt-6">
//             Secondary Skills
//           </p>

//           <div className="PrimarySkills">
//             <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
//               {secondarySkillsList
//                 ?.filter((skill) => skill.trim() !== "")
//                 .map((item, key) => (
//                   <div key={key} className="col-span-1 ml-2">
//                     <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
//                       <input
//                         type="text"
//                         value={item}
//                         className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
//                       />
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           <p className="text-2xl font-semibold text-gray-500 mt-6">
//             OthersSkills
//           </p>
//           <div className="PrimarySkills">
//             <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
//               {otherSkillsList
//                 ?.filter((skill) => skill.trim() !== "")
//                 .map((item, key) => (
//                   <div key={key} className="col-span-1 ml-2">
//                     <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
//                       <input
//                         type="text"
//                         value={item}
//                         className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
//                       />
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="approve">
//         <button className="p-2 bg-blue-800 text-white hover:bg-green-700 rounded-lg ml-[590px] mb-5 px-5">
//           Approve
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CflQuarterForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import Swal from "sweetalert2";

function CflQuarterForm({ empId, quarter }) {
  console.log(empId, quarter, "under props");
  const [thirtyDaysGoals, setThirtyDaysGoals] = useState([]);
  const [sixtyDaysGoals, setSixtyDaysGoals] = useState([]);
  const [ninetyDaysGoals, setNinetyDaysGoals] = useState([]);

  // const navigate = useNavigate();
  // navigate("/rating", { state: { data: empId } });

  // Fetch Thirty Days Goals
  useEffect(() => {
    thirtyDaysGoalsFun();
  }, []);

  useEffect(() => {
    sixtyDaysGoalsFun();
  }, []);

  useEffect(() => {
    ninetyDaysGoalsFun();
  }, []);

  const thirtyDaysGoalsFun = () => {
    axios
      .get(
        `http://localhost:8080/Goals/thirty-days-goals/emp/${empId}/${quarter}`
      )
      .then((res) => setThirtyDaysGoals(res.data))
      .catch((err) => console.error(err));
  };

  const sixtyDaysGoalsFun = () => {
    axios
      .get(
        `http://localhost:8080/Goals/sixty-days-goals/emp/${empId}/${quarter}`
      )
      .then((res) => setSixtyDaysGoals(res.data))
      .catch((err) => console.error(err));
  };

  const ninetyDaysGoalsFun = () => {
    axios
      .get(
        `http://localhost:8080/Goals/ninety-days-goals/emp/${empId}/${quarter}`
      )
      .then((res) => setNinetyDaysGoals(res.data))
      .catch((err) => console.error(err));
  };

  const [cflSkills, setCflSkills] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cflSkill/get/${empId}/${quarter}`)
      .then((res) => setCflSkills(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  console.log(cflSkills, "cflSkills...");

  const primarySkillsList =
    cflSkills?.primarySkills?.replace(/,$/, "").split(",") || [];

  console.log(primarySkillsList, "primarySkillsList");
  const secondarySkillsList = (cflSkills?.secondarySkills || "")
    .replace(/\s*,\s*/g, ",")
    .replace(/,L/g, "-L")
    .split(",");

  console.log(secondarySkillsList, "secondarySkillsList");

  const otherSkillsList = (cflSkills?.otherSkills || "")
    .replace(/\s*,\s*/g, ",")
    .replace(/,L/g, "-L")
    .split(",");

  console.log(otherSkillsList, "otherSkillsList");

  console.log(cflSkills, "cflSkills......");

  const [approve, setApprove] = useState(false);

  const handleApprove = () => {
    axios
      .get(`http://localhost:8080/manager/approvedGoalSetting/${empId}`)
      .then((res) => {
        setApprove(true);
        Swal.fire({
          title: "Sucessfully Approved",
          icon: "success",
        });
        thirtyDaysGoalsFun();
        sixtyDaysGoalsFun();
        ninetyDaysGoalsFun();
      })
      .catch((error) => {
        alert("error");
      });
  };

  return (
    <div className="bg-gray-50">
      <p className="border-[1px] border-gray-300 w-[1270px] ml-8"></p>

      <div className="cfl-info p-10">
        <div className="plan border-[2px] border-gray-300 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Thirty Days Plan
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>
          <div className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
            {/* Global Labels */}
            <div className="grid grid-cols-4 gap-4 font-bold">
              <div>Goal</div>
              <div>Deliverable/Measure of success</div>
              <div>Overall Weightage</div>
              <div>Status</div>
            </div>

            {/* Input Rows */}
            {thirtyDaysGoals.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                <input
                  type="text"
                  value={row.goal}
                  // onChange={(e) => handleInputChange30(index, "goal", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.deliverable}
                  // onChange={(e) => handleInputChange30(index, "deliverable", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.weightage}
                  // onChange={(e) => handleInputChange30(index, "weightage", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.status}
                  // onChange={(e) => handleInputChange30(index, "status", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
              </div>
            ))}
          </div>

          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Sixty Days Plan
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>

          <div className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
            {/* Global Labels */}
            <div className="grid grid-cols-4 gap-4 font-bold">
              <div>Goal</div>
              <div>Deliverable/Measure of success</div>
              <div>Overall Weightage</div>
              <div>Status</div>
            </div>

            {/* Input Rows */}
            {sixtyDaysGoals.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                <input
                  type="text"
                  value={row.goal}
                  // onChange={(e) => handleInputChange60(index, "goal", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.deliverable}
                  // onChange={(e) => handleInputChange60(index, "deliverable", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.weightage}
                  // onChange={(e) => handleInputChange60(index, "weightage", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.status}
                  // onChange={(e) => handleInputChange60(index, "status", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
              </div>
            ))}
          </div>

          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Ninety Days Plan
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>
          <div className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
            {/* Global Labels */}
            <div className="grid grid-cols-4 gap-4 font-bold">
              <div>Goal</div>
              <div>Deliverable/Measure of success</div>
              <div>Overall Weightage</div>
              <div>Status</div>
            </div>

            {/* Input Rows */}
            {ninetyDaysGoals.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                <input
                  type="text"
                  value={row.goal}
                  // onChange={(e) => handleInputChange90(index, "goal", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.deliverable}
                  // onChange={(e) => handleInputChange90(index, "deliverable", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.weightage}
                  // onChange={(e) => handleInputChange90(index, "weightage", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.status}
                  // onChange={(e) => handleInputChange90(index, "status", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-500 mt-6 mb-4">Skills</p>
        <div className="skills border-[2px] border-gray-300 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-gray-500 mt-6">
            PrimarySkills
          </p>
          <div className="PrimarySkills">
            <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
              {primarySkillsList
                ?.filter((skill) => skill.trim() !== "")
                .map((item, key) => (
                  <div key={key} className="col-span-1 ml-2">
                    <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                      <input
                        type="text"
                        value={item}
                        className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Secondary Skills
          </p>

          <div className="secondarySkills">
            <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
              {secondarySkillsList
                ?.filter((skill) => skill.trim() !== "")
                .map((item, key) => (
                  <div key={key} className="col-span-1 ml-2">
                    <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                      <input
                        type="text"
                        value={item}
                        className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <p className="text-2xl font-semibold text-gray-500 mt-6">
            OthersSkills
          </p>
          <div className="PrimarySkills">
            <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
              {otherSkillsList
                ?.filter((skill) => skill.trim() !== "")
                .map((item, key) => (
                  <div key={key} className="col-span-1 ml-2">
                    <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                      <input
                        type="text"
                        value={item}
                        className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="approve">
        {approve ? (
          ""
        ) : (
          <button
            className="p-2 bg-blue-800 text-white hover:bg-green-700 rounded-lg ml-[620px] mb-5 px-5"
            onClick={handleApprove}
          >
            Approve
          </button>
        )}
      </div>
    </div>
  );
}

export default CflQuarterForm;
