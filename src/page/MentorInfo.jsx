// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "react-calendar/dist/Calendar.css";
// import "react-date-picker/dist/DatePicker.css";
// import { FaUpload } from "react-icons/fa";
// import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
// import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// function MentorInfo() {
//   const [formFieldChange, setFormFieldChange] = useState({
//     mentorId: "",
//     empId: "",
//     mentorName: "",
//     mentorEmail: "",
//     mentorDepartment: "",
//     mentorDesignation: "",
//     mentorLocation: "",
//     mentorFile: null,
//   });

//   const [imageSrc, setImageSrc] = useState(""); // Base64 image string
//   const [fileName, setFileName] = useState(""); // File name to use
//   const [fileInfo, setFileInfo] = useState(null); // File object created from Base64

//   const location = useLocation();
//   const particularCflInfo = location.state?.data;
//   console.log(particularCflInfo, "particularCflInfo ++++");

//   //   console.log(dateValue, "dateValue..");
//   //   console.log(imageSrc, "imageSrc???");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     console.log(file);

//     if (file) {
//       setFileName(file.name);
//       console.log("Uploaded file.........:", file);
//       // Convert the file to an image
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setImageSrc(reader.result);
//       };
//       setFileInfo(file);
//     }
//   };
//   useEffect(() => {
//     if (fileInfo) {
//       setFormFieldChange((prevData) => ({
//         ...prevData,
//         mentorFile: fileInfo,
//       }));
//     }
//   }, [fileInfo]); // Dependency: file

//   console.log(fileInfo, "fileInfo");

//   const handleOnChange = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setFormFieldChange((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };
//   console.log(formFieldChange, "formFieldChange");

//   const [cflId, setCflId] = useState({
//     Cfl_Id1: "",
//   });

//   const handleAddCflRow = () => {
//     const nextSkillIndex = Object.keys(cflId).length + 1;
//     const newSkillKey = `Cfl_Id${nextSkillIndex}`;

//     // Add new skill with an empty value
//     setCflId({
//       ...cflId,
//       [newSkillKey]: "",
//     });
//   };

//   const handleRemoveTechnicalRow = (key) => {
//     const updatedSkills = { ...cflId };
//     delete updatedSkills[key];
//     setCflId(updatedSkills);
//   };

//   const handleInputTechnicalChange = (key, event) => {
//     const { value } = event.target;

//     setCflId({
//       ...cflId,
//       [key]: value,
//     });
//   };

//   console.log(cflId, "cflId...");

//   useEffect(() => {
//     if (cflId) {
//       setFormFieldChange((prevData) => ({
//         ...prevData,
//         empId: Object.values(cflId).join(","),
//       }));
//     }
//   }, [cflId]);

//   console.log(cflId, "cflId...???");
//   const [submitClose, setSubmitClose] = useState("");

//   const handleSubmit = async () => {
//     const data = new FormData();
//     data.append("mentorId", formFieldChange.mentorId);
//     data.append("empId", formFieldChange.empId);
//     data.append("mentorName", formFieldChange.mentorName);
//     data.append("mentorEmail", formFieldChange.mentorEmail);
//     data.append("mentorDepartment", formFieldChange.mentorDepartment);
//     data.append("mentorDesignation", formFieldChange.mentorDesignation);
//     data.append("mentorLocation", formFieldChange.mentorLocation);
//     data.append("mentorFile", formFieldChange.mentorFile);

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/mentor/create",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       if (response) {
//         setSubmitClose(true);
//         Swal.fire({
//           title: "Sucessfully Submitted",
//           icon: "success",
//         });
//         localStorage.setItem("mentorAssign", "true");
//         // window.location.reload();
//       } else {
//         console.log("sdfg");
//       }
//     } catch (error) {
//       Swal.fire({
//         text: "File Upload Or Any Important* Fields Is Missing  Or if file is uploaded reduce the Size(kb) of image format",
//       });
//     }
//   };

//   // const TechnicalSkills = particularCflInfo?.technicalSkills;
//   // let listOfTechnicalSkills;
//   // if (TechnicalSkills) {
//   //   listOfTechnicalSkills = TechnicalSkills.split(",");
//   // }

//   // console.log(listOfTechnicalSkills, "listOfTechnicalSkills");

//   const navigate = useNavigate();

//   const handleMeetingResponse = () => {
//     navigate("/fix_meeting_schedule");
//   };

//   //, { state: { data: particularCflInfo } }

//   useEffect(() => {
//     const handleClose = (e) => {
//       if (
//         formFieldChange.mentorId ||
//         formFieldChange.empId ||
//         formFieldChange.mentorName ||
//         formFieldChange.mentorEmail ||
//         formFieldChange.mentorDepartment ||
//         formFieldChange.mentorDesignation ||
//         formFieldChange.mentorLocation ||
//         formFieldChange.mentorFile
//       ) {
//         e.preventDefault();
//         e.returnValue = ""; // This is required for some browsers to show the confirmation dialog
//       }
//     };

//     window.addEventListener("beforeunload", handleClose);

//     return () => {
//       window.removeEventListener("beforeunload", handleClose);
//     };
//   }, [formFieldChange]);

//   return (
//     <div className="p-10 cms-dashboard" style={{ width: "100vw" }}>
//       <p className="text-2xl text-gray-600 mb-5 font-bold text-center border-b-2 border-gray-600 w-1/5 ml-[480px]">
//         Mentor Details
//       </p>
//       <div className="cfl-info">
//         <div className="image flex space-x-10 items-center">
//           <div
//             className="rounded-full w-32 h-32 border-2 border-gray-500"
//             style={{
//               backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundColor: imageSrc ? "transparent" : "#bfdbfe",
//             }}
//           />
//           <div className="icons flex space-x-4 items-center mt-20">
//             <div className="upload">
//               <input
//                 type="file"
//                 id="file-input1"
//                 hidden
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="file-input1" className="file-label">
//                 <div>
//                   <FaUpload className="text-2xl text-gray-700 hover:text-blue-700 hover:cursor-pointer" />
//                 </div>
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="info mt-5">
//           <p className="text-2xl font-semibold text-gray-700 mt-5">
//             Mentor's Detail
//           </p>
//           <p className="border-[1px] border-gray-600 mt-2"></p>
//           <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
//             <div className="col-span-1 ">
//               <div className="firstName flex flex-col">
//                 <label className="mb-1 font-semibold text-lg text-gray-600">
//                   Employee Id*
//                 </label>
//                 <input
//                   type="text"
//                   className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
//                   onChange={handleOnChange}
//                   name="mentorId"
//                   //   value={particularCflInfo?.cflFirstName}
//                 />
//               </div>
//               <div className="cflEmail flex flex-col my-3">
//                 <label className="mb-1 font-semibold text-lg text-gray-600">
//                   Department*
//                 </label>
//                 <input
//                   type="text"
//                   className="outline-none border-[2px] border-gray-500 rounded-md p-1"
//                   onChange={handleOnChange}
//                   name="mentorDepartment"
//                   value={particularCflInfo?.cflEmail}
//                 />
//               </div>
//             </div>
//             <div className="col-span-1">
//               <div className="middle-name flex flex-col">
//                 <label className="mb-1 font-semibold text-lg text-gray-600">
//                   Mentor Name*
//                 </label>
//                 <input
//                   type="text"
//                   className="outline-none border-[2px] border-gray-500 rounded-md p-1"
//                   onChange={handleOnChange}
//                   name="mentorName"
//                   value={particularCflInfo?.cflMiddleName}
//                 />
//               </div>
//               <div className="empId flex flex-col my-3">
//                 <label className="mb-1 font-semibold text-lg text-gray-600">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   className="outline-none border-[2px] border-gray-500 rounded-md p-1"
//                   onChange={handleOnChange}
//                   name="mentorLocation"
//                   value={particularCflInfo?.empId}
//                 />
//               </div>
//             </div>
//             <div className="col-span-1">
//               <div className="last-name flex flex-col ">
//                 <label className="mb-1 font-semibold text-lg text-gray-600">
//                   Mentor Email*
//                 </label>
//                 <input
//                   type="text"
//                   className="outline-none border-[2px] border-gray-500 rounded-md p-1"
//                   onChange={handleOnChange}
//                   name="mentorEmail"
//                   value={particularCflInfo?.cflLastName}
//                 />
//                 <div className="deptName flex flex-col my-3">
//                   <label className="mb-1 font-semibold text-lg text-gray-600">
//                     Designation
//                   </label>
//                   <input
//                     type="text"
//                     className="outline-none border-[2px] border-gray-500 rounded-md p-1"
//                     onChange={handleOnChange}
//                     name="mentorDesignation"
//                     value={particularCflInfo?.cflDepartment}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <p className="text-2xl font-semibold text-gray-700 mt-6">
//           Enter CFL's ID assigned to this mentor
//         </p>
//         <p className="border-[1px] border-gray-600 mt-2"></p>

//         <div className="TechnicalSkills">
//           <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
//             {Object.keys(cflId).map((key) => (
//               <div key={key} className="col-span-1 ml-2">
//                 <label className="mb-1 font-semibold text-lg text-gray-600">
//                   {key}
//                 </label>

//                 <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
//                   <input
//                     type="text"
//                     value={cflId[key]}
//                     onChange={(event) => handleInputTechnicalChange(key, event)}
//                     className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide w-full"
//                   />

//                   <FaCircleMinus
//                     onClick={() => handleRemoveTechnicalRow(key)}
//                     className="text-red-500 text-2xl hover:cursor-pointer"
//                   />
//                 </div>
//               </div>
//             ))}
//             <FaCirclePlus
//               onClick={handleAddCflRow}
//               className="text-blue-700 text-2xl hover:cursor-pointer mt-10"
//             />
//           </div>
//         </div>
//       </div>

//       {submitClose ? (
//         ""
//       ) : (
//         <div className="submit">
//           <p
//             className="bg-green-700 text-white text-center p-2 w-1/6 ml-[520px] mt-7 rounded-xl hover:bg-blue-700 hover:cursor-pointer"
//             onClick={handleSubmit}
//           >
//             Submit
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MentorInfo;

import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { FaUpload } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const StyledMultiselect = styled(Multiselect)`
  background-color: white;
  border: 2px solid gray;
  border-radius: 10px;
`;

function MentorInfo() {
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

  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileInfo, setFileInfo] = useState(null);

  const location = useLocation();
  const particularCflInfo = location.state?.data;
  console.log(particularCflInfo, "particularCflInfo ++++");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      setFileName(file.name);
      console.log("Uploaded file.........:", file);
      // Convert the file to an image
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      setFileInfo(file);
    }
  };
  useEffect(() => {
    if (fileInfo) {
      setFormFieldChange((prevData) => ({
        ...prevData,
        mentorFile: fileInfo,
      }));
    }
  }, [fileInfo]); // Dependency: file

  console.log(fileInfo, "fileInfo");

  const handleOnChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormFieldChange((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  console.log(formFieldChange, "formFieldChange");

  const [cflList, setCflList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/cfl/getAllCfl")
      .then((res) => setCflList(res?.data));
  }, []);

  const [options, setUpdatedCflList] = useState([{ name: "", empId: "" }]);

  useEffect(() => {
    if (cflList && cflList.length > 0) {
      const newCflList = cflList?.map(({ cflFirstName, empId }) => ({
        name: cflFirstName,
        empId: empId,
      }));

      setUpdatedCflList(newCflList);
    }
  }, [cflList]);

  const [selectedValue, setSelectedValue] = useState([]);

  console.log(selectedValue);

  const onSelect = (selectedList, selectedItem) => {
    setSelectedValue(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedValue(selectedList);
  };

  useEffect(() => {
    if (cflList) {
      setFormFieldChange((prevData) => ({
        ...prevData,
        empId: cflList?.map(({ empId }) => empId).join(","),
      }));
    }
  }, [cflList]);

  const [submitClose, setSubmitClose] = useState("");

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("mentorId", formFieldChange.mentorId);
    data.append("empId", formFieldChange.empId);
    data.append("mentorName", formFieldChange.mentorName);
    data.append("mentorEmail", formFieldChange.mentorEmail);
    data.append("mentorDepartment", formFieldChange.mentorDepartment);
    data.append("mentorDesignation", formFieldChange.mentorDesignation);
    data.append("mentorLocation", formFieldChange.mentorLocation);
    data.append("mentorFile", formFieldChange.mentorFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/mentor/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        setSubmitClose(true);
        Swal.fire({
          title: "Sucessfully Submitted",
          icon: "success",
        });
        localStorage.setItem("mentorAssign", "true");
        // window.location.reload();
      } else {
        console.log("sdfg");
      }
    } catch (error) {
      Swal.fire({
        text: "File Upload Or Any Important* Fields Is Missing  Or if file is uploaded reduce the Size(kb) of image format",
      });
    }
  };

  const navigate = useNavigate();

  const handleMeetingResponse = () => {
    navigate("/fix_meeting_schedule");
  };

  //, { state: { data: particularCflInfo } }

  useEffect(() => {
    const handleClose = (e) => {
      if (
        formFieldChange.mentorId ||
        formFieldChange.empId ||
        formFieldChange.mentorName ||
        formFieldChange.mentorEmail ||
        formFieldChange.mentorDepartment ||
        formFieldChange.mentorDesignation ||
        formFieldChange.mentorLocation ||
        formFieldChange.mentorFile
      ) {
        e.preventDefault();
        e.returnValue = ""; // This is required for some browsers to show the confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleClose);

    return () => {
      window.removeEventListener("beforeunload", handleClose);
    };
  }, [formFieldChange]);

  return (
    <div className="p-10 cms-dashboard" style={{ width: "100vw" }}>
      <p className="text-2xl text-gray-600 mb-5 font-bold text-center border-b-2 border-gray-600 w-1/5 ml-[480px]">
        Mentor Details
      </p>
      <div className="cfl-info">
        <div className="image flex space-x-10 items-center">
          <div
            className="rounded-full w-32 h-32 border-2 border-gray-500"
            style={{
              backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: imageSrc ? "transparent" : "#bfdbfe",
            }}
          />
          <div className="icons flex space-x-4 items-center mt-20">
            <div className="upload">
              <input
                type="file"
                id="file-input1"
                hidden
                onChange={handleFileChange}
              />
              <label htmlFor="file-input1" className="file-label">
                <div>
                  <FaUpload className="text-2xl text-gray-700 hover:text-blue-700 hover:cursor-pointer" />
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="info mt-5">
          <p className="text-2xl font-semibold text-gray-700 mt-5">
            Mentor's Detail
          </p>
          <p className="border-[1px] border-gray-600 mt-2"></p>
          <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            <div className="col-span-1 ">
              <div className="firstName flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Employee Id*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
                  onChange={handleOnChange}
                  name="mentorId"
                  //   value={particularCflInfo?.cflFirstName}
                />
              </div>
              <div className="cflEmail flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Department
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="mentorDepartment"
                  value={particularCflInfo?.cflEmail}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="middle-name flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Mentor Name*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="mentorName"
                  value={particularCflInfo?.cflMiddleName}
                />
              </div>
              <div className="empId flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="mentorLocation"
                  value={particularCflInfo?.empId}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="last-name flex flex-col ">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Mentor Email*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="mentorEmail"
                  value={particularCflInfo?.cflLastName}
                />
                <div className="deptName flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    onChange={handleOnChange}
                    name="mentorDesignation"
                    value={particularCflInfo?.cflDepartment}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold text-gray-700 mt-6">
          Enter CFL's ID assigned to this mentor
        </p>
        <p className="border-[1px] border-gray-600 mt-2"></p>

        <div className="cfl-list">
          <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            <div className="flex-col items-center">
              <p className="text-lg text-gray-600">Add CFL's*</p>
              <div>
                <StyledMultiselect
                  options={options}
                  selectedValues={selectedValue}
                  onSelect={onSelect}
                  onRemove={onRemove}
                  showCheckbox={true}
                  displayValue="name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {submitClose ? (
        ""
      ) : (
        <div className="submit">
          <p
            className="bg-green-700 text-white text-center p-2 w-1/6 ml-[520px] mt-7 rounded-xl hover:bg-blue-700 hover:cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </p>
        </div>
      )}
    </div>
  );
}

export default MentorInfo;
