import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ProbationConfirmation = () => {
  const location = useLocation();
  console.log(location, "loc");
  const empId = location?.state?.data;

  const [global, setGlobal] = useState({
    employeeName: "",
    employeeCode: "",
    designation: "",
    location: "",
    department: "",
    project: "",
    dateOfJoining: "",
    dateOfConfirmation: "",
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
    dropdown4: "",
    dropdown5: "",
    dropdown6: "",
    dropdown7: "",
    dropdown8: "",
    dropdown9: "",
    dropdown10: "",
    dropdown11: "",
    dropdown12: "",
    dropdown13: "",
    dropdown14: "",
    dropdown15: "",
    dropdown16: "",
    dropdown17: "",
    dropdown18: "",
    dropdown19: "",
    dropdown20: "",
    remarks3: "",
    remark6: "",
    confirmation: "",
    reportingManagerName: "",
    reportingManagerSignature: "",
    buHeadName: "",
    buHeadSignature: "",
    hrRepresentativeName: "",
    hrRepresentativeSignature: "",
  });

  const [fetchData, setFetchedData] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/probationConfirmation/getByEmpId/${empId}`)
      .then((res) => {
        setFetchedData(res?.data);
      })
      .catch((error) => {
        Swal.fire("No Any Data Found ");
      });
  }, []);

  console.log(fetchData, "fetchData.....");

  function gen(value) {
    if (value === "Excellent") {
      return 1;
    } else if (value === "Very Good") {
      return 2;
    } else if (value === "Good") {
      return 3;
    } else if (value === "Average") {
      return 4;
    } else if (value === "Poor") {
      return 5;
    }
  }

  const options1 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption1 =
    fetchData === "" ? options1[0] : options1[gen(fetchData.dropdown1)];
  const handleSelect1 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown1: selectedOption.value,
    }));
  };

  const options2 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption2 =
    fetchData === "" ? options2[0] : options2[gen(fetchData.dropdown2)];

  const handleSelect2 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown2: selectedOption.value,
    }));
  };

  const options3 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption3 =
    fetchData === "" ? options3[0] : options3[gen(fetchData.dropdown3)];

  const handleSelect3 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown3: selectedOption.value,
    }));
  };

  const options4 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption4 =
    fetchData === "" ? options4[0] : options4[gen(fetchData.dropdown4)];
  const handleSelect4 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown4: selectedOption.value,
    }));
  };

  const options5 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption5 =
    fetchData === "" ? options5[0] : options5[gen(fetchData.dropdown5)];

  const handleSelect5 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown5: selectedOption.value,
    }));
  };

  const options6 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption6 =
    fetchData === "" ? options6[0] : options6[gen(fetchData.dropdown6)];

  const handleSelect6 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown6: selectedOption.value,
    }));
  };

  const options7 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption7 =
    fetchData === "" ? options7[0] : options7[gen(fetchData.dropdown7)];

  const handleSelect7 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown7: selectedOption.value,
    }));
  };

  const options8 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption8 =
    fetchData === "" ? options8[0] : options8[gen(fetchData.dropdown8)];
  const handleSelect8 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown8: selectedOption.value,
    }));
  };

  const options9 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption9 =
    fetchData === "" ? options9[0] : options9[gen(fetchData.dropdown9)];
  const handleSelect9 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown9: selectedOption.value,
    }));
  };

  const options10 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption10 =
    fetchData === "" ? options10[0] : options10[gen(fetchData.dropdown10)];

  const handleSelect10 = (selectedOption) => {
    setGlobal((prevGlobal) => ({
      ...prevGlobal,
      dropdown10: selectedOption.value,
    }));
  };

  const options11 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption11 =
    fetchData === "" ? options11[0] : options11[gen(fetchData.dropdown11)];

  const handleSelect11 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown11: selectedOption.value,
    }));
  };

  const options12 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption12 =
    fetchData === "" ? options12[0] : options12[gen(fetchData.dropdown12)];
  const handleSelect12 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown12: selectedOption.value,
    }));
  };

  const options13 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption13 =
    fetchData === "" ? options13[0] : options13[gen(fetchData.dropdown13)];

  const handleSelect13 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown13: selectedOption.value,
    }));
  };

  const options14 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption14 =
    fetchData === "" ? options14[0] : options14[gen(fetchData.dropdown14)];

  const handleSelect14 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown14: selectedOption.value,
    }));
  };

  const options15 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption15 =
    fetchData === "" ? options15[0] : options15[gen(fetchData.dropdown15)];
  const handleSelect15 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown15: selectedOption.value,
    }));
  };

  const options16 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption16 =
    fetchData === "" ? options16[0] : options16[gen(fetchData.dropdown16)];

  const handleSelect16 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown16: selectedOption.value,
    }));
  };

  const options17 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption17 =
    fetchData === "" ? options17[0] : options17[gen(fetchData.dropdown17)];

  const handleSelect17 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown17: selectedOption.value,
    }));
  };

  const options18 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption18 =
    fetchData === "" ? options18[0] : options18[gen(fetchData.dropdown18)];
  const handleSelect18 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown18: selectedOption.value,
    }));
  };

  const options19 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption19 =
    fetchData === "" ? options19[0] : options19[gen(fetchData.dropdown19)];

  const handleSelect19 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown19: selectedOption.value,
    }));
  };

  const options20 = [
    "Select",
    "Excellent",
    "Very Good",
    "Good",
    "Average",
    "Poor",
  ];

  const defaultOption20 =
    fetchData === "" ? options20[0] : options20[gen(fetchData.dropdown20)];
  const handleSelect20 = (selectedOption) => {
    setFetchedData((prevGlobal) => ({
      ...prevGlobal,
      dropdown20: selectedOption.value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGlobal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitThreeMonth = () => {
    const newGlobal = { ...global, status: "three" };
    axios
      .post("http://localhost:8080/probationConfirmation/create", global)
      .then((res) => {
        Swal.fire({
          title: "Probation Status Saved",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Data Can't be saved",
        });
      });
  };

  const handleSubmitSixMonth = () => {
    axios
      .post("http://localhost:8080/probationConfirmation/create", fetchData)
      .then((res) => {
        Swal.fire({
          title: "Probation Status Saved",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Data Can't be saved",
        });
      });
  };

  const handleRadioChange = (value) => {
    setFetchedData((prev) => ({ ...prev, confirmation: value }));
  };

  const handleChangeRemark3 = (e) => {
    setFetchedData((prev) => ({ ...prev, remark3: e.target.value }));
  };

  const handleChangeRemark6 = (e) => {
    setFetchedData((prev) => ({ ...prev, remark6: e.target.value }));
  };

  const handleChangeHr = (e) => {
    const { name, value } = e.target;
    setFetchedData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-10" style={{ width: "100vw" }}>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Probation Evaluation & Confirmation Form
      </h1>
      <div className="space-y-8">
        <div className="div bg-blue-100 p-10 rounded-xl border-2 border-gray-500">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="block mb-1 font-medium text-xl">
                Employee Name
              </div>
              <input
                type="text"
                name="employeeName"
                value={fetchData?.employeeName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                Employee Code
              </div>
              <input
                type="text"
                name="employeeCode"
                value={fetchData?.employeeCode}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">Designation</div>
              <input
                type="text"
                name="designation"
                value={fetchData?.designation}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">Location</div>
              <input
                type="text"
                name="location"
                value={fetchData?.location}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">Department</div>
              <input
                type="text"
                name="department"
                value={fetchData?.department}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                Project/Division
              </div>
              <input
                type="text"
                name="project"
                value={fetchData?.project}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                Date of Joining
              </div>
              <input
                type="date"
                name="dateOfJoining"
                value={fetchData?.dateOfJoining}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                Date of Confirmation
              </div>
              <input
                type="date"
                name="dateOfConfirmation"
                value={fetchData?.dateOfConfirmation}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
          </div>
        </div>

        <p className="text-xl border-2 border-gray-500 bg-blue-100 p-5 rounded-xl">
          To understand the progress of a new joinee, to support him/her during
          the initial probation period with necessary trainings & to evaluate
          his/her performance, probation evaluation is carried out on completion
          of Third month from the Date of Joining (DOJ) while final employment
          confirmation is carried out on completion of Sixth month from DOJ.
        </p>

        <p className="text-2xl border-b-2 border-gray-500">
          Probation Evaluation: Third Month from DOJ
          <span className="text-sm ml-5">
            (*Rate the employee’s overall performance on the scale given below)
          </span>
        </p>

        <div className="div bg-blue-100 p-10 rounded-xl border-2 border-gray-500">
          <div className="grid grid-cols-2 gap-[300px]">
            <div className="col-span-1">
              <div className="">
                <div className="text-xl">Performance Standard</div>
                <div className="text-xl my-7">Quality of Work</div>
                <div className="text-xl">
                  Subject Knowledge & Competence level
                </div>
                <div className="text-xl my-7">
                  Initiative & willingness to take responsibilities
                </div>
                <div className="text-xl">Attendance & Consistency in work</div>
                <div className="text-xl my-7">Team work & Cooperation</div>
                <div className="text-xl">Organizing & time Management</div>
                <div className="text-xl my-7">Attitude towards Work</div>
                <div className="text-xl">Well versed with Company Policies</div>
                <div className="text-xl my-7">
                  Thorough with Company’s Code of Conduct
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="">
                <Dropdown
                  options={options1}
                  onChange={handleSelect1}
                  value={defaultOption1}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options2}
                  onChange={handleSelect2}
                  value={defaultOption2}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options3}
                  onChange={handleSelect3}
                  value={defaultOption3}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options4}
                  onChange={handleSelect4}
                  value={defaultOption4}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options5}
                  onChange={handleSelect5}
                  value={defaultOption5}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options6}
                  onChange={handleSelect6}
                  value={defaultOption6}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options7}
                  onChange={handleSelect7}
                  value={defaultOption7}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options8}
                  onChange={handleSelect8}
                  value={defaultOption8}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options9}
                  onChange={handleSelect9}
                  value={defaultOption9}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options10}
                  onChange={handleSelect10}
                  value={defaultOption10}
                  placeholder="Select an option"
                  className="my-3"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl border-b-2 border-gray-500">
          Additional Remark(s) and Improvement Plan (Training) if Needed
        </p>
        <textarea
          className="border-2 border-gray-500 rounded-xl p-5 text-xl outline-none"
          cols={120}
          rows={5}
          name="remarks3"
          onChange={handleChangeRemark3}
          value={fetchData?.remark3}
        ></textarea>

        <p className="text-2xl border-b-2 border-gray-500">
          Employment Confirmation Evaluation
          <span className="text-sm ml-5">
            (*Rate the employee’s overall performance on the scale given below)
            After 6 Month From DOJ
          </span>
        </p>

        <div className="div bg-blue-100 p-10 rounded-xl border-2 border-gray-500">
          <div className="grid grid-cols-2 gap-[300px]">
            <div className="col-span-1">
              <div className="">
                <div className="text-xl">Performance Standard</div>
                <div className="text-xl my-7">Quality of Work</div>
                <div className="text-xl">
                  Subject Knowledge & Competence level
                </div>
                <div className="text-xl my-7">
                  Initiative & willingness to take responsibilities
                </div>
                <div className="text-xl">Attendance & Consistency in work</div>
                <div className="text-xl my-7">Team work & Cooperation</div>
                <div className="text-xl">Organizing & time Management</div>
                <div className="text-xl my-7">Attitude towards Work</div>
                <div className="text-xl">Well versed with Company Policies</div>
                <div className="text-xl my-7">
                  Thorough with Company’s Code of Conduct
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="">
                <Dropdown
                  options={options11}
                  onChange={handleSelect11}
                  value={defaultOption11}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options12}
                  onChange={handleSelect12}
                  value={defaultOption12}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options13}
                  onChange={handleSelect13}
                  value={defaultOption13}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options14}
                  onChange={handleSelect14}
                  value={defaultOption14}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options15}
                  onChange={handleSelect15}
                  value={defaultOption15}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options16}
                  onChange={handleSelect16}
                  value={defaultOption16}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options17}
                  onChange={handleSelect17}
                  value={defaultOption17}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options18}
                  onChange={handleSelect18}
                  value={defaultOption18}
                  placeholder="Select an option"
                  className="my-3"
                />

                <Dropdown
                  options={options19}
                  onChange={handleSelect19}
                  value={defaultOption19}
                  placeholder="Select an option"
                />

                <Dropdown
                  options={options20}
                  onChange={handleSelect20}
                  value={defaultOption20}
                  placeholder="Select an option"
                  className="my-3"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl border-b-2 border-gray-500">
          Please mention key achievements or scope for further improvements.
        </p>
        <textarea
          className="border-2 border-gray-500 rounded-xl p-5 text-xl outline-none"
          cols={120}
          rows={5}
          value={fetchData?.remark6}
          onChange={handleChangeRemark6}
        ></textarea>

        <p className="text-2xl border-b-2 border-gray-500">
          Based on the performance of the employee, I recommend the following:-
        </p>
        <div className="radio flex items-center justify-around text-xl">
          <div className="confirm">
            <label>Confirm</label>
            <input
              type="radio"
              checked={fetchData.confirmation === "Confirm"}
              onChange={() => handleRadioChange("Confirm")}
              style={{
                transform: "scale(1.8)",
                marginTop: "5px",
                marginLeft: "20px",
              }}
            />
          </div>
          <div className="extend-probation">
            <label>Extend Probation</label>
            <input
              type="radio"
              checked={fetchData.confirmation === "Extend Probation"}
              onChange={() => handleRadioChange("Extend Probation")}
              style={{
                transform: "scale(1.8)",
                marginTop: "5px",
                marginLeft: "20px",
              }}
            />
          </div>
          <div className="terminate-service">
            <label>Terminate Service</label>
            <input
              type="radio"
              checked={fetchData.confirmation === "Terminate Service"}
              onChange={() => handleRadioChange("Terminate Service")}
              style={{
                transform: "scale(1.8)",
                marginTop: "5px",
                marginLeft: "20px",
              }}
            />
          </div>
        </div>

        <p className="text-2xl border-b-2 border-gray-500">
          For use of HR Department
        </p>
        <div className="div bg-blue-100 p-10 rounded-xl border-2 border-gray-500">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="block mb-1 font-medium text-xl">
                Reporting Manager (Name)
              </div>
              <input
                type="text"
                name="reportingManagerName"
                value={fetchData?.reportingManagerName}
                onChange={handleChangeHr}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                Reporting Manager (Signature)
              </div>
              <input
                type="text"
                name="reportingManagerSignature"
                value={fetchData?.reportingManagerSignature}
                onChange={handleChangeHr}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                BU/Division Head (Name)
              </div>
              <input
                type="text"
                name="buHeadName"
                value={fetchData?.buHeadName}
                onChange={handleChangeHr}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                BU/Division Head (Signature)
              </div>
              <input
                type="text"
                name="buHeadSignature"
                value={fetchData?.buHeadSignature}
                onChange={handleChangeHr}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                HR Representative (Name)
              </div>
              <input
                type="text"
                name="hrRepresentativeName"
                value={fetchData?.hrRepresentativeName}
                onChange={handleChangeHr}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
            <div>
              <div className="block mb-1 font-medium text-xl">
                HR Representative (Signature)
              </div>
              <input
                type="text"
                name="hrRepresentativeSignature"
                value={fetchData?.hrRepresentativeSignature}
                onChange={handleChangeHr}
                className="w-full border border-gray-300 p-2 rounded-md outline-none"
              />
            </div>
          </div>
        </div>

        {fetchData?.status === "three" ? (
          <div>
            <button
              type="submit"
              className="bg-blue-700 text-white text-xl p-3 tracking-wider rounded-md hover:bg-blue-600 ml-[580px] hover:bg-red-500 hover:cursor-pointer"
              onClick={handleSubmitSixMonth}
            >
              Confirm
            </button>
          </div>
        ) : (
          <div>
            <button
              type="submit"
              className="bg-blue-700 text-white text-xl p-3 tracking-wider rounded-md hover:bg-blue-600 ml-[600px] hover:bg-red-500 hover:cursor-pointer"
              onClick={handleSubmitThreeMonth}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProbationConfirmation;
