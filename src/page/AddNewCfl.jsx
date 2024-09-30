import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { RiFileExcel2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import * as Yup from "yup";

function AddNewCfl() {
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

  const [formFieldChange, setFormFieldChange] = useState({
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
    cflVertical: "",
    cflGender: "",
    contactNumber: null,
    year: "",
    buHeadName: "",
  });

  const [dateValue, setDateValue] = useState();

  const [cflFile, setCflFile] = useState({
    empId: null,
    file: null,
  });

  const handleOnChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormFieldChange((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  console.log(formFieldChange, "formFieldChange");

  const [technicalSkills, setTechnicalSkills] = useState({
    skill1: "",
  });

  const handleAddTechnicalRow = () => {
    const nextSkillIndex = Object.keys(technicalSkills).length + 1;
    const newSkillKey = `skill${nextSkillIndex}`;

    // Add new skill with an empty value
    setTechnicalSkills({
      ...technicalSkills,
      [newSkillKey]: "",
    });
  };

  const handleRemoveTechnicalRow = (key) => {
    const updatedSkills = { ...technicalSkills };
    delete updatedSkills[key];
    setTechnicalSkills(updatedSkills);
  };

  const handleInputTechnicalChange = (key, event) => {
    const { value } = event.target;

    setTechnicalSkills({
      ...technicalSkills,
      [key]: value,
    });
  };

  console.log(technicalSkills, "TechnicalSkills...");

  useEffect(() => {
    if (technicalSkills) {
      setFormFieldChange((prevData) => ({
        ...prevData,
        technicalSkills: Object.values(technicalSkills).join(","),
      }));
    }
  }, [technicalSkills]);

  // NonTechnical Skills

  const [nonTechnicalSkills, setNonTechnicalSkills] = useState({
    skill1: "",
  });

  const handleAddRow = () => {
    const nextSkillIndex = Object.keys(nonTechnicalSkills).length + 1;
    const newSkillKey = `skill${nextSkillIndex}`;

    // Add new skill with an empty value
    setNonTechnicalSkills({
      ...nonTechnicalSkills,
      [newSkillKey]: "",
    });
  };

  const handleRemoveRow = (key) => {
    const updatedSkills = { ...nonTechnicalSkills };
    delete updatedSkills[key];
    setNonTechnicalSkills(updatedSkills);
  };

  const handleInputChange = (key, event) => {
    const { value } = event.target;
    // Update the specific skill value
    setNonTechnicalSkills({
      ...nonTechnicalSkills,
      [key]: value,
    });
  };

  console.log(nonTechnicalSkills, "nonTechnicalSkills...");

  useEffect(() => {
    if (nonTechnicalSkills) {
      setFormFieldChange((prevData) => ({
        ...prevData,
        nonTechnicalSkills: Object.values(nonTechnicalSkills).join(","),
      }));
    }
  }, [nonTechnicalSkills]);

  useEffect(() => {
    if (dateValue) {
      const year = dateValue.getFullYear();
      const month = String(dateValue.getMonth() + 1).padStart(2, "0");
      const day = String(dateValue.getDate()).padStart(2, "0");
      const newDate = `${year}/${month}/${day}`;
      setFormFieldChange((prevData) => ({
        ...prevData,
        joiningDate: newDate,
      }));
    }
  }, [dateValue]);

  const [gender, setGender] = useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  useEffect(() => {
    if (gender) {
      setFormFieldChange((prev) => ({ ...prev, gender: gender }));
    }
  }, [gender]);

  console.log(formFieldChange, "formFieldChange");

  console.log(dateValue, "dateValue...");

  const [closeSubmitButton, setCloseSubmitButton] = useState(true);

  console.log(formFieldChange, "formFieldChange");

  const validationSchema = Yup.object().shape({
    cflFirstName: Yup.string().trim().required("First Name is required"),
    cflEmail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    year: Yup.number().required("Year is required"),
    empId: Yup.number().required("Employee ID is required"),
    reportingManagerMail: Yup.string()
      .email("Invalid email format")
      .required("Reporting Manager's Email is required"),
    hrMail: Yup.string()
      .email("Invalid email format")
      .required("HR Email is required"),
    reportingManager: Yup.string()
      .trim()
      .required("Reporting Manager is required"),
    joiningDate: Yup.string().trim().required("Joining Date is required"),
  });

  const handleSubmit = async () => {
    const {
      cflFirstName,
      cflEmail,
      year,
      empId,
      reportingManagerMail,
      hrMail,
      reportingManager,
      joiningDate,
    } = formFieldChange;

    try {
      // Validate form data
      await validationSchema.validate(formFieldChange, { abortEarly: false });

      // Proceed with form submission
      const response = await axios.post(
        "http://localhost:8080/cfl/create",
        formFieldChange
      );

      if (response) {
        setCloseSubmitButton(false);
        Swal.fire({
          title: "Successfully Submitted",
          icon: "success",
        });
      }
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      if (error.inner) {
        const errors = error.inner.map((err) => err.message);
        Swal.fire({
          title: "Please Fill All * Fields",
          text: errors.join(", "),
        });
      } else {
        Swal.fire({
          text: "An unexpected error occurred.",
        });
      }
    }
  };
  useEffect(() => {
    const handleClose = (e) => {
      if (
        formFieldChange.empId ||
        formFieldChange.cflFirstName ||
        formFieldChange.cflMiddleName ||
        formFieldChange.cflLastName ||
        formFieldChange.cflEmail ||
        formFieldChange.cflDepartment ||
        formFieldChange.cflDesignation ||
        formFieldChange.reportingManager ||
        formFieldChange.reportingManagerMail ||
        formFieldChange.hrMail ||
        formFieldChange.cflLocation ||
        formFieldChange.joiningDate ||
        formFieldChange.sscResult ||
        formFieldChange.hscResult ||
        formFieldChange.underGraduateResult ||
        formFieldChange.postGraduateResult ||
        formFieldChange.collegeName ||
        formFieldChange.collegeBranch ||
        formFieldChange.technicalSkills ||
        formFieldChange.nonTechnicalSkills
        // formFieldChange.file
      ) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleClose);

    return () => {
      window.removeEventListener("beforeunload", handleClose);
    };
  }, [formFieldChange]);

  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(parsedData);
    };
  };

  console.log(excelData, "excelData");

  // useEffect(() => {
  //   if (excelData.length > 0) {
  //     const list = excelData.map((i) => {
  //       let newItem = { ...i };
  //       if (newItem.empName && typeof newItem.empName === "string") {
  //         const nameParts = newItem.empName.trim().split(" ");
  //         if (nameParts.length === 3) {
  //           newItem.cflFirstName = nameParts[0];
  //           newItem.cflMiddleName = nameParts[1];
  //           newItem.cflLastName = nameParts[2];
  //         } else if (nameParts.length === 2) {
  //           newItem.cflFirstName = nameParts[0];
  //           newItem.cflMiddleName = "";
  //           newItem.cflLastName = nameParts[1];
  //         } else if (nameParts.length === 1) {
  //           newItem.cflFirstName = nameParts[0];
  //           newItem.cflMiddleName = "";
  //           newItem.cflLastName = "";
  //         }
  //         delete newItem.empName;
  //       }
  //       for (let j in newItem) {
  //         if (typeof newItem[j] === "string") {
  //           newItem[j] = newItem[j].toLowerCase();
  //         }
  //         if (j === "joiningDate" && typeof newItem[j] === "string") {
  //           let dateParts = newItem[j].split(".");
  //           if (dateParts.length === 3) {
  //             let [month, day, year] = dateParts;
  //             month = month.padStart(2, "0");
  //             day = day.padStart(2, "0");
  //             newItem[j] = `${year}/${month}/${day}`;
  //           }
  //         }
  //       }

  //       return newItem;
  //     });

  //     console.log(list, "list");

  //     axios
  //       .post("http://localhost:8080/cfl/createAll", list)
  //       .then((res) => {
  //         Swal.fire({
  //           title: "Excel Data Uploaded Sucessfully",
  //           icon: "success",
  //         });
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //         Swal.fire({
  //           title: "Excel Data Not Uploaded",
  //         });
  //       });
  //   }
  // }, [excelData]);

  const [openAssignRoles, setOpenAssignRoles] = useState(false);
  const handleOpenAssignRoles = () => setOpenAssignRoles(true);
  const handleCloseAssignRoles = () => setOpenAssignRoles(false);

  useEffect(() => {
    if (excelData.length > 0) {
      const capitalizeFirstLetter = (str) => {
        if (!str) return str; // Handle empty or undefined strings
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };

      const list = excelData.map((i) => {
        let newItem = { ...i };
        if (newItem.empName && typeof newItem.empName === "string") {
          const nameParts = newItem.empName.trim().split(" ");
          if (nameParts.length === 3) {
            newItem.cflFirstName = capitalizeFirstLetter(nameParts[0]);
            newItem.cflMiddleName = capitalizeFirstLetter(nameParts[1]);
            newItem.cflLastName = capitalizeFirstLetter(nameParts[2]);
          } else if (nameParts.length === 2) {
            newItem.cflFirstName = capitalizeFirstLetter(nameParts[0]);
            newItem.cflMiddleName = "";
            newItem.cflLastName = capitalizeFirstLetter(nameParts[1]);
          } else if (nameParts.length === 1) {
            newItem.cflFirstName = capitalizeFirstLetter(nameParts[0]);
            newItem.cflMiddleName = "";
            newItem.cflLastName = "";
          }
          delete newItem.empName;
        }

        for (let j in newItem) {
          if (typeof newItem[j] === "string") {
            newItem[j] = capitalizeFirstLetter(newItem[j]);
          }
          if (j === "joiningDate" && typeof newItem[j] === "string") {
            let dateParts = newItem[j].split(".");
            if (dateParts.length === 3) {
              let [month, day, year] = dateParts;
              month = month.padStart(2, "0");
              day = day.padStart(2, "0");
              newItem[j] = `${year}/${month}/${day}`;
            }
          }
        }

        return newItem;
      });

      console.log(list, "list");

      axios
        .post("http://localhost:8080/cfl/createAll", list)
        .then((res) => {
          Swal.fire({
            title: "Excel Data Uploaded Successfully",
            icon: "success",
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            title: "Excel Data Not Uploaded",
          });
        });
    }
  }, [excelData]);

  const [roles, setRoles] = useState("");
  const handleAssignRoles = (e) => {
    setRoles(e.target.value);
  };

  console.log(roles);
  const saveAssignRoles = () => {
    axios
      .post("http://localhost:8080/cflRoles/create", { roleName: roles })
      .then((res) => {
        Swal.fire({
          title: "CFL's Role Created Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "CFL's Role Not Created",
        });
      });
  };

  return (
    <div className="p-10 cms-dashboard" style={{ width: "100vw" }}>
      <p className="text-2xl text-gray-600 mb-5 font-bold text-center border-b-2 border-gray-600 w-1/4 ml-[480px]">
        Enter New CFL Details
      </p>
      <div className="cfl-info">
        <div className="head flex items-center space-x-10">
          <div className="uploadExcel">
            <input
              type="file"
              accept=".xlsx,.xls"
              id="file-input3"
              hidden
              onChange={handleFileUpload}
            />
            <label htmlFor="file-input3" className="file-label">
              <div className="p-2 bg-blue-700 flex items-center space-x-2 text-white rounded-lg hover:bg-green-700 hover:cursor-pointer">
                <p>Upload Bulk File From Excel</p>
                <RiFileExcel2Fill className="text-2xl" />
              </div>
            </label>
          </div>

          <p
            onClick={handleOpenAssignRoles}
            className="bg-green-700 p-2 rounded-md text-white w-[150px]"
          >
            Assign CFL Roles
          </p>

          <div className="assignRoles">
            <Modal open={openAssignRoles} onClose={handleCloseAssignRoles}>
              <Box sx={style}>
                <div className="div">
                  <div className="matrix mt-10 px-10">
                    <div className="feedback">
                      <p className="text-2xl textbg-gray-500 text-center mb-2 font-semibold">
                        Please Enter All CFL Roles
                        <p className="text-sm">
                          (roles are seperated by comma)
                        </p>
                      </p>
                      <textarea
                        type="text"
                        rows={4}
                        className="border-2 border-gray-500 w-full rounded-xl p-5 text-xl"
                        name="feedbackMessage"
                        onChange={handleAssignRoles}
                      />
                    </div>
                    <button
                      className="p-3 bg-blue-800 text-center text-white rounded-md ml-[240px] px-5 hover:bg-pink-600 mt-5"
                      onClick={() => {
                        saveAssignRoles();
                        handleCloseAssignRoles();
                      }}
                    >
                      save
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>

        <div className="info mt-5">
          <p className="text-2xl font-semibold text-gray-500 mt-5">
            CFL's Details
          </p>
          <p className="border-[1px] border-gray-600 mt-2"></p>
          <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            <div className="col-span-1 ">
              <div className="firstName flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  First Name*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
                  onChange={handleOnChange}
                  name="cflFirstName"
                />
              </div>
              <div className="cflEmail flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Email*
                </label>
                <input
                  type="email"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="cflEmail"
                />
              </div>
              <div className="cflDesignation flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Designation
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="cflDesignation"
                />
              </div>

              <div className="cflDOJ flex flex-col my-3 ">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Date Of Joining*
                </label>
                <DatePicker
                  onChange={setDateValue}
                  value={dateValue}
                  autoFocus={false}
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Project
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
                  onChange={handleOnChange}
                  name="cflProject"
                />
              </div>
              <div className="cflLocation flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="cflLocation"
                />
              </div>
              <div className="cflContactNumber flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="contact"
                />
              </div>

              <div className="cflContactNumber flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Year*
                </label>
                <input
                  type="number"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="year"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="middle-name flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="cflMiddleName"
                />
              </div>
              <div className="empId flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Employee Id*
                </label>
                <input
                  type="number"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="empId"
                />
              </div>
              <div className="cflReportingManager flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Reporting Manager*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="reportingManager"
                />
              </div>
              <div className="cflReportingManagerMail flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Reporting Manager Mail*
                </label>
                <input
                  type="email"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="reportingManagerMail"
                />
              </div>
              <div className="projetclassification flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Project Classification
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
                  onChange={handleOnChange}
                  name="cflProjectClassification"
                />
              </div>
              <div className="gender flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Gender
                </label>
                <div>
                  <div className="gender flex items-center space-x-5">
                    <div className="male">
                      <label className="text-xl mr-2"> Male</label>
                      <input
                        type="radio"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={handleGenderChange}
                        style={{
                          transform: "scale(1.8)",
                        }}
                      />
                    </div>

                    <div className="female">
                      <label className="text-xl mr-2">Female </label>

                      <input
                        type="radio"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={handleGenderChange}
                        style={{
                          transform: "scale(1.8)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-6">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Sub Area
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="subArea"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="last-name flex flex-col ">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="cflLastName"
                />
                <div className="deptName flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    Department
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    onChange={handleOnChange}
                    name="cflDepartment"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    Sub Department
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    onChange={handleOnChange}
                    name="cflSubDepartment"
                  />
                </div>
                <div className="hrMail flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    HR Mail*
                  </label>
                  <input
                    type="email"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    onChange={handleOnChange}
                    name="hrMail"
                  />
                </div>
                <div className=" flex flex-col ">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    BU Head
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
                    onChange={handleOnChange}
                    name="buHeadName"
                  />
                </div>
                <div className="flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    Vertical
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    onChange={handleOnChange}
                    name="vertical"
                  />
                </div>

                <div className="cflCategory flex flex-col my-1">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    Category
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    onChange={handleOnChange}
                    name="category"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-500 mt-6">
          Qualificational Details
        </p>
        <p className="border-[1px] border-gray-600 mt-2"></p>
        <div className="eductionalDetails">
          <div className="grid grid-cols-3 gap-20 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            <div className="col-span-1 ">
              <div className="SSC flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  SSC/(Xth) (%age)*
                </label>
                <input
                  type="number"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide"
                  onChange={handleOnChange}
                  name="sscResult"
                />
              </div>
              <div className="HSC flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  POST Graduate(UG) (%age)
                </label>
                <input
                  type="number"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="postGraduateResult"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="HSC flex flex-col">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  HSC/(Xll) (%age)*
                </label>
                <input
                  type="number"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="hscResult"
                />
              </div>
              <div className="collegeName flex flex-col my-3">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  College Name*
                </label>
                <input
                  type="text"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="collegeName"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="UG flex flex-col ">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  Under Graduate(UG) (%age)*
                </label>
                <input
                  type="number"
                  className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                  onChange={handleOnChange}
                  name="underGraduateResult"
                />
                <div className="collegeBranch flex flex-col my-3">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    College Branch
                  </label>
                  <input
                    type="text"
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1"
                    onChange={handleOnChange}
                    name="collegeBranch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-500 mt-6">
          Primary Technical Skills
        </p>
        <p className="border-[1px] border-gray-600 mt-2"></p>
        <div className="TechnicalSkills">
          <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            {Object.keys(technicalSkills).map((key) => (
              <div key={key} className="col-span-1 ml-2">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  {key}
                </label>

                <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                  <input
                    type="text"
                    value={technicalSkills[key]}
                    onChange={(event) => handleInputTechnicalChange(key, event)}
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide w-full"
                  />

                  <FaCircleMinus
                    onClick={() => handleRemoveTechnicalRow(key)}
                    className="text-red-500 text-2xl hover:cursor-pointer"
                  />
                </div>
              </div>
            ))}
            <FaCirclePlus
              onClick={handleAddTechnicalRow}
              className="text-blue-700 text-2xl hover:cursor-pointer mt-9"
            />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-500 mt-6">
          Primary NonTechnical Skills
        </p>
        <p className="border-[1px] border-gray-600 mt-2"></p>
        <div className="NonTechnicalSkills">
          <div className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-500 p-6 rounded-xl bg-blue-100">
            {Object.keys(nonTechnicalSkills).map((key) => (
              <div key={key} className="col-span-1 ml-2">
                <label className="mb-1 font-semibold text-lg text-gray-600">
                  {key}
                </label>

                <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                  <input
                    type="text"
                    value={nonTechnicalSkills[key]}
                    onChange={(event) => handleInputChange(key, event)}
                    className="outline-none border-[2px] border-gray-500 rounded-md p-1 tracking-wide w-full"
                  />

                  <FaCircleMinus
                    onClick={() => handleRemoveRow(key)}
                    className="text-red-500 text-2xl hover:cursor-pointer"
                  />
                </div>
              </div>
            ))}
            <FaCirclePlus
              onClick={handleAddRow}
              className="text-blue-700 text-2xl hover:cursor-pointer mt-9"
            />
          </div>
        </div>
      </div>

      {closeSubmitButton && (
        <div className="submit">
          <p
            className="bg-green-700 text-white text-center p-2 w-1/6 ml-[530px] mt-7 rounded-xl hover:bg-blue-700 hover:cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </p>
        </div>
      )}
    </div>
  );
}

export default AddNewCfl;
