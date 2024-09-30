// import React, { useEffect, useState } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import { useLocation } from "react-router-dom";

// function LateralShift() {
//   const [global, setGlobal] = useState({
//     internal1: "",
//     internal2: "",
//     internal3: "",
//     organizational1: "",
//     organizational2: "",
//     organizational3: "",
//   });

//   console.log(global, "global");
//   const [internal1, setInternal1] = useState("");
//   const [internal2, setInternal2] = useState("");
//   const [internal3, setInternal3] = useState("");

//   const [organizational1, setOrganizational1] = useState("");
//   const [organizational2, setOrganizational2] = useState("");
//   const [organizational3, setOrganizational3] = useState("");

//   const options1 = ["Select", "Full Stack Developer", "Senior FSD"];
//   const defaultOption1 = options1[0];

//   const handleSelect1 = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption.value}`);
//     setInternal1(selectedOption.value);
//   };

//   useEffect(() => {
//     setGlobal((prevGlobal) => ({
//       ...prevGlobal,
//       internal1: internal1,
//     }));
//   }, [internal1]);

//   const options2 = ["Select", "DevOps", "Mentor"];
//   const defaultOption2 = options2[0];

//   const handleSelect2 = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption.value}`);
//     setInternal2(selectedOption.value);
//   };

//   useEffect(() => {
//     setGlobal((prevGlobal) => ({
//       ...prevGlobal,
//       internal2: internal2,
//     }));
//   }, [internal2]);

//   const options3 = ["Select", "Tech Lead", "Manager"];
//   const defaultOption3 = options3[0];

//   const handleSelect3 = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption.value}`);
//     setInternal3(selectedOption.value);
//   };

//   useEffect(() => {
//     setGlobal((prevGlobal) => ({
//       ...prevGlobal,
//       internal3: internal3,
//     }));
//   }, [internal3]);

//   const options4 = ["Select", "SSD", "GSD"];
//   const defaultOption4 = options4[0];

//   const handleSelect4 = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption.value}`);
//     setOrganizational1(selectedOption.value);
//   };

//   useEffect(() => {
//     setGlobal((prevGlobal) => ({
//       ...prevGlobal,
//       organizational1: organizational1,
//     }));
//   }, [organizational1]);

//   const options5 = ["Select", "BSD", "SALES"];
//   const defaultOption5 = options5[0];

//   const handleSelect5 = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption.value}`);
//     setOrganizational2(selectedOption.value);
//   };

//   useEffect(() => {
//     setGlobal((prevGlobal) => ({
//       ...prevGlobal,
//       organizational2: organizational2,
//     }));
//   }, [organizational2]);

//   const options6 = ["Select", "K1", "G1"];
//   const defaultOption6 = options6[0];

//   const handleSelect6 = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption.value}`);
//     setOrganizational3(selectedOption.value);
//   };

//   useEffect(() => {
//     setGlobal((prevGlobal) => ({
//       ...prevGlobal,
//       organizational3: organizational3,
//     }));
//   }, [organizational3]);

//   const location = useLocation();
//   console.log(location, "location...");

//   const ratingResult = location?.state?.data;
//   console.log(ratingResult, "ratingResult");

//   const { rating } = ratingResult;
//   console.log(rating, "rating");

//   const { potential, performance } = rating;
//   const result = `${potential},${performance}`; // Combine potential and performance as "8,8"
//   console.log(result); // Output: "8,8"

//   // Remove 'rating' from ratingResult and add 'newRating' with the combined 'result'
//   const { rating: _, ...newRatingResult } = ratingResult; // Destructure and omit 'rating'
//   const updatedRatingResult = { ...newRatingResult, newRating: result };

//   console.log(updatedRatingResult, "updatedRatingResult");

//   // Merge the global state with updatedRatingResult
//   useEffect(() => {
//     setGlobal((prevGlobal) => ({
//       ...prevGlobal,
//       ...updatedRatingResult,
//     }));
//   }, [updatedRatingResult]);

//   console.log(global, "global state after merge");

//   return (
//     <div className="p-10">
//       <p
//         className="text-2xl font-semibold  mb-3 text-gray-600 text-center"
//         style={{ marginTop: "-20px" }}
//       >
//         Lateral Movement
//       </p>
//       <div className="internal-lateral">
//         <p className="text-2xl font-semibold  mb-3 text-gray-600">
//           Internal Lateral Movement
//         </p>

//         <div className="grid grid-cols-3 border-2 border-gray-400 p-5 rounded-xl">
//           <div className="col-span-1 mt-2">
//             <p className="text-xl font-semibold border-b-2 border-gray-500 w-1/3 ml-[50px] text-center text-gray-600">
//               Existing Role
//             </p>
//             <div className="existing-role p-6 ml-[40px]">
//               <p className="text-2xl text-gray-600">Junior fsd</p>
//             </div>
//           </div>

//           <div className="col-span-2">
//             <p className="text-xl font-semibold text-center border-b-2 border-gray-500 w-1/4 ml-[280px] mb-5 text-gray-600">
//               Possible Roles
//             </p>

//             <div className="grid grid-cols-3 gap-10">
//               <div className="div border-[1px] border-gray-500 p-2 rounded-md">
//                 <div className="col ml-[50px]">
//                   <p className="mb-1">Possible Role 1</p>
//                   <Dropdown
//                     options={options1}
//                     onChange={handleSelect1}
//                     value={defaultOption1}
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>

//               <div className="div border-[1px] border-gray-500 p-2 rounded-md">
//                 <div className="col ml-[50px]">
//                   <p className="mb-1">Possible Role 2</p>
//                   <Dropdown
//                     options={options2}
//                     onChange={handleSelect2}
//                     value={defaultOption2}
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>

//               <div className="div border-[1px] border-gray-500 p-2 rounded-md">
//                 <div className="col ml-[50px]">
//                   <p className="mb-1">Possible Role 3</p>
//                   <Dropdown
//                     options={options3}
//                     onChange={handleSelect3}
//                     value={defaultOption3}
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="organization-lateral mt-10">
//         <p className="text-2xl font-semibold  mb-3 text-gray-600">
//           Organizational Lateral Movement
//         </p>
//         <div className="grid grid-cols-3 border-2 border-gray-400 p-5 rounded-xl">
//           <div className="col-span-1 mt-2">
//             <p className="text-xl font-semibold border-b-2 border-gray-500 w-1/2 ml-[50px] text-center text-gray-600">
//               Existing Department
//             </p>
//             <div className="existing-role p-3 ml-[50px]">
//               <p className="text-2xl text-gray-600 mt-5">Software</p>
//             </div>
//           </div>

//           <div className="col-span-2">
//             <p className="text-xl font-semibold text-center border-b-2 border-gray-500 w-1/3 ml-[280px] mb-5 text-gray-600">
//               Possible Departments
//             </p>

//             <div className="grid grid-cols-3 gap-10">
//               <div className="div border-[1px] border-gray-500 p-2 rounded-md">
//                 <div className="col ml-[50px]">
//                   <p className="mb-1">Possible Department 1</p>
//                   <Dropdown
//                     options={options4}
//                     onChange={handleSelect4}
//                     value={defaultOption4}
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>

//               <div className="div border-[1px] border-gray-500 p-2 rounded-md">
//                 <div className="col ml-[50px]">
//                   <p className="mb-1">Possible Department 2</p>
//                   <Dropdown
//                     options={options5}
//                     onChange={handleSelect5}
//                     value={defaultOption5}
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>

//               <div className="div border-[1px] border-gray-500 p-2 rounded-md">
//                 <div className="col ml-[50px]">
//                   <p className="mb-1">Possible Department 3</p>
//                   <Dropdown
//                     options={options6}
//                     onChange={handleSelect6}
//                     value={defaultOption6}
//                     placeholder="Select an option"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="submit">
//           <button className="bg-blue-800 p-2 rounded-lg text-center text-white hover:bg-green-700 hover:text-white ml-[570px] mt-7 text-xl">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LateralShift;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { CgCloseO } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function LateralShift() {
  // const [global, setGlobal] = useState({
  //   internal1: "",
  //   internal2: "",
  //   internal3: "",
  //   organizational1: "",
  //   organizational2: "",
  //   organizational3: "",
  // });

  // const [internal1, setInternal1] = useState("");
  // const [internal2, setInternal2] = useState("");
  // const [internal3, setInternal3] = useState("");

  // const [organizational1, setOrganizational1] = useState("");
  // const [organizational2, setOrganizational2] = useState("");
  // const [organizational3, setOrganizational3] = useState("");

  // const options1 = ["Select", "Full Stack Developer", "Senior FSD"];
  // const defaultOption1 = options1[0];

  // const handleSelect1 = (selectedOption) => {
  //   setInternal1(selectedOption.value);
  // };

  // useEffect(() => {
  //   setGlobal((prevGlobal) => ({
  //     ...prevGlobal,
  //     internal1: internal1,
  //   }));
  // }, [internal1]);

  // const options2 = ["Select", "DevOps", "Mentor"];
  // const defaultOption2 = options2[0];

  // const handleSelect2 = (selectedOption) => {
  //   setInternal2(selectedOption.value);
  // };

  // useEffect(() => {
  //   setGlobal((prevGlobal) => ({
  //     ...prevGlobal,
  //     internal2: internal2,
  //   }));
  // }, [internal2]);

  // const options3 = ["Select", "Tech Lead", "Manager"];
  // const defaultOption3 = options3[0];

  // const handleSelect3 = (selectedOption) => {
  //   setInternal3(selectedOption.value);
  // };

  // useEffect(() => {
  //   setGlobal((prevGlobal) => ({
  //     ...prevGlobal,
  //     internal3: internal3,
  //   }));
  // }, [internal3]);

  // const options4 = ["Select", "SSD", "GSD"];
  // const defaultOption4 = options4[0];

  // const handleSelect4 = (selectedOption) => {
  //   setOrganizational1(selectedOption.value);
  // };

  // useEffect(() => {
  //   setGlobal((prevGlobal) => ({
  //     ...prevGlobal,
  //     organizational1: organizational1,
  //   }));
  // }, [organizational1]);

  // const options5 = ["Select", "BSD", "SALES"];
  // const defaultOption5 = options5[0];

  // const handleSelect5 = (selectedOption) => {
  //   setOrganizational2(selectedOption.value);
  // };

  // useEffect(() => {
  //   setGlobal((prevGlobal) => ({
  //     ...prevGlobal,
  //     organizational2: organizational2,
  //   }));
  // }, [organizational2]);

  // const options6 = ["Select", "K1", "G1"];
  // const defaultOption6 = options6[0];

  // const handleSelect6 = (selectedOption) => {
  //   setOrganizational3(selectedOption.value);
  // };

  // useEffect(() => {
  //   setGlobal((prevGlobal) => ({
  //     ...prevGlobal,
  //     organizational3: organizational3,
  //   }));
  // }, [organizational3]);

  // const location = useLocation();
  // const ratingResult = location?.state?.data;
  // const { rating } = ratingResult;
  // const { potential, performance } = rating;
  // const result = `${potential},${performance}`;

  // // Memoize updatedRatingResult to avoid infinite re-renders
  // const updatedRatingResult = useMemo(() => {
  //   const { rating: _, ...newRatingResult } = ratingResult;
  //   return { ...newRatingResult, newRating: result };
  // }, [ratingResult, result]);

  // useEffect(() => {
  //   setGlobal((prevGlobal) => ({
  //     ...prevGlobal,
  //     ...updatedRatingResult,
  //   }));
  // }, [updatedRatingResult]);

  // console.log(global, "global");

  // const handleSubmitManagerRating = () => {
  //   axios
  //     .post("http://localhost:8080/managerRating/create", global)
  //     .then((res) => {
  //       console.log(res.data, "successfully submitted");
  //       Swal.fire({
  //         title: "Sucessfully Submitted",
  //         icon: "success",
  //       });
  //     });
  // };

  const location = useLocation();
  console.log(location, "loc");

  const [global, setGlobal] = useState({
    internal1: "",
    internal2: "",
    internal3: "",
  });

  const [internal1, setInternal1] = useState("");
  const [internal2, setInternal2] = useState("");
  const [internal3, setInternal3] = useState("");

  const [formalRole, setFormalRole] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    console.log(year, "year");
    axios
      .get(`http://localhost:8080/cflRoles/getByYear/${year}`)
      .then((res) => setFormalRole(res.data.roleName));
  }, []);

  const options1 = formalRole?.split(",");
  options1.unshift("select");
  const defaultOption1 = options1[0];

  const handleSelect1 = (selectedOption) => {
    setInternal1(selectedOption.value);
  };

  console.log(internal1, "internal1");

  const [aiModal, setAiModal] = useState(false);

  useEffect(() => {
    if (internal1 != "") {
      setAiModal(true);
      answerFormal(
        "suggest required skills for trainee to become " +
          internal1 +
          "in 5 points in 100 words"
      );
    }
  }, [internal1]);

  useEffect(() => {
    if (internal2 != "") {
      setAiModal(true);
      answerFormal(
        "if a person is trainee and after two to three years if he wants to become " +
          internal2 +
          "  what skills should he required in 5 points in 100 words"
      );
    }
  }, [internal2]);

  const generateAnswer = (question) => {
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAN999X9WQYqsV8mBT5wAaLXJRg-pa-X2g";
    const data = { contents: [{ parts: [{ text: question }] }] };
    axios.post(url, data).then((res) => {
      const rawAnswer =
        res["data"]["candidates"][0]["content"]["parts"][0]["text"];
      const formattedAnswer = rawAnswer.replace(/\n/g, "<br/>");
      setAnswer(formattedAnswer);
    });
  };

  const answerFormal = (question) => {
    generateAnswer(question);
  };

  useEffect(() => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      internal1: internal1,
    }));
  }, [internal1]);

  const options2 = formalRole?.split(",").map((i) => "senior " + i);
  options2.unshift("select");
  const defaultOption2 = options2[0];

  const handleSelect2 = (selectedOption) => {
    setInternal2(selectedOption.value);
  };

  useEffect(() => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      internal2: internal2,
    }));
  }, [internal2]);

  const options3 = ["Select", "yes", "no"];
  const defaultOption3 = options3[0];

  const handleSelect3 = (selectedOption) => {
    setInternal3(selectedOption.value);
  };

  useEffect(() => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      internal3: internal3,
    }));
  }, [internal3]);

  console.log(global, "global");

  const [project, setProject] = useState({
    project1: "",
    project2: "",
    project3: "",
  });
  const handleChangeProject = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const [closeSubmitButton, setCloseSubmitButton] = useState(false);

  const handleSubmitManagerRating = () => {
    const newObj = { ...global, ...project, ...location?.state?.data };
    console.log(newObj, "newObj");
    axios
      .post("http://localhost:8080/managerRating/create", newObj)
      .then((res) => {
        console.log(res.data, "successfully submitted");
        setCloseSubmitButton(true);
        Swal.fire({
          title: "Sucessfully Submitted",
          icon: "success",
        });
      });
  };

  console.log(project, "project");

  return (
    <div className="cms-dashboard p-10" style={{ width: "100vw" }}>
      <p
        className="text-2xl font-semibold  mb-3 text-gray-600 text-center"
        style={{ marginTop: "-20px" }}
      >
        Possible CFL's Role Movement
      </p>
      <div className="internal-lateral">
        <p className="text-2xl font-semibold  mb-3 text-gray-600">
          Internal Lateral Movement
        </p>

        <div className="grid grid-cols-3 border-2 border-gray-400 p-5 rounded-xl">
          <div className="col-span-1 mt-2">
            <p className="text-xl font-semibold border-b-2 border-gray-500 w-1/3 ml-[50px] text-center text-gray-600">
              Existing Role
            </p>
            <div className="existing-role p-6 ml-[40px]">
              <p className="text-2xl text-gray-600">Trainee</p>
            </div>
          </div>

        

          <div className="col-span-2">
            <p className="text-xl font-semibold text-center border-b-2 border-gray-500 w-1/4 ml-[280px] mb-5 text-gray-600">
              Possible Roles
            </p>

            <div className="">
              <div className="div border-[1px] border-gray-500 p-2 rounded-md">
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <p className="text-xl mt-1">Formal Role</p>
                  </div>
                  <div className="col-span-1">
                    <Dropdown
                      options={options1}
                      onChange={handleSelect1}
                      value={defaultOption1}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
              </div>

              <div className="div border-[1px] border-gray-500 p-2 rounded-md my-5">
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <p className="text-xl mt-1">
                      Possible Role Movement in 2-3 yrs
                    </p>
                  </div>
                  <div className="col-span-1">
                    <Dropdown
                      options={options2}
                      onChange={handleSelect2}
                      value={defaultOption2}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
              </div>

              <div className="div border-[1px] border-gray-500 p-2 rounded-md">
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <p className="text-xl mt-1">
                      Can the resource be a backup for anyone in the team ?
                    </p>
                  </div>
                  <div className="col-span-1">
                    <Dropdown
                      options={options3}
                      onChange={handleSelect3}
                      value={defaultOption3}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="organization-lateral mt-10">
        <p className="text-2xl font-semibold  mb-3 text-gray-600">
          Can We Allocate Project ?
        </p>
        <div className="grid grid-cols-3 border-2 border-gray-400 p-5 rounded-xl">
          <div className="col-span-1 mt-2">
            <p className="text-xl font-semibold border-b-2 border-gray-500 w-1/2 ml-[50px] text-center text-gray-600">
              Currently Working
            </p>
            <div className="existing-role p-3 ml-[50px]">
              <p className="text-2xl text-gray-600 mt-5">Software</p>
            </div>
          </div>

          <div className="col-span-2">
            <p className="text-xl font-semibold text-center border-b-2 border-gray-500 w-1/3 ml-[280px] mb-5 text-gray-600">
              Project Might We Can Assign
            </p>

            <div className="grid grid-cols-3 gap-10">
              <div className="div border-[1px] border-gray-500 p-2 rounded-md">
                <div className="col ">
                  <div className="project ml-5">
                    <p className="mb-1 ">Project 1</p>
                    <input
                      type="text"
                      className="p-2 outline-none border-[1px] border-black rounded-xl"
                      name="project1"
                      onChange={handleChangeProject}
                    />
                  </div>
                </div>
              </div>

              <div className="div border-[1px] border-gray-500 p-2 rounded-md">
                <div className="col ">
                  <div className="project ml-5">
                    <p className="mb-1 ">Project 2</p>
                    <input
                      type="text"
                      className="p-2 outline-none border-[1px] border-black rounded-xl"
                      name="project2"
                      onChange={handleChangeProject}
                    />
                  </div>
                </div>
              </div>

              <div className="div border-[1px] border-gray-500 p-2 rounded-md">
                <div className="col ">
                  <div className="project ml-5">
                    <p className="mb-1 ">Project 3</p>
                    <input
                      type="text"
                      className="p-2 outline-none border-[1px] border-black rounded-xl"
                      name="project3"
                      onChange={handleChangeProject}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {closeSubmitButton ? (
          ""
        ) : (
          <>
            <div className="submit">
              <button
                className="bg-blue-800 p-2 rounded-lg text-center text-white hover:bg-green-700 hover:text-white ml-[570px] mt-7 text-xl"
                onClick={handleSubmitManagerRating}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>

      {aiModal ? (
        <>
          {answer && (
            <>
              <div
                className="mx-[200px] mt-14 absolute z-50 ml-72"
                style={{ marginTop: "-750px" }}
              >
                <div className="bg-black text-white font-bold rounded-xl">
                  <CgCloseO
                    className="float-end text-5xl p-2 hover:cursor-pointer"
                    onClick={() => setAiModal(false)}
                  />
                  <p
                    className="p-10"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </div>
              </div>
              <div className=" bg-blue-200 h-10"></div>
            </>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default LateralShift;
