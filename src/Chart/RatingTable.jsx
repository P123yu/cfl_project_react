import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function RatingTable({ empId, quarter }) {
  useEffect(() => {
    getCflInfo();
    getCflSkill();
    getCflRating();
  }, []);

  const [cfl, setCfl] = useState("");
  const [cflSkill, setCflSkill] = useState("");
  const [cflRating, setCflRating] = useState("");

  const getCflInfo = () => {
    axios
      .get(`http://localhost:8080/cfl/getAllCflByCflId/${empId}`)
      .then((res) => {
        console.log(res.data, "res");
        setCfl(res.data);
      })
      .catch((error) => alert("error"));
  };

  const getCflSkill = () => {
    axios
      .get(`http://localhost:8080/cflSkill/get/${empId}/${quarter}`)
      .then((res) => {
        console.log(res.data, "res");
        setCflSkill(res.data);
      })
      .catch((error) => alert("error"));
  };

  const getCflRating = () => {
    axios
      .get(`http://localhost:8080/managerRating/get/${empId}/${quarter}`)
      .then((res) => {
        console.log(res.data, "res");
        setCflRating(res.data);
      });
    //   .catch((error) => alert("error"));
  };

  const columns = [
    {
      name: "Emp Name",
      selector: (row) => row.cflFirstName,
      wrap: true,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.cflDepartment,
      wrap: true,
      sortable: true,
    },
    {
      name: "Current Designation",
      selector: (row) => row.cflDesignation,
      wrap: true,
      sortable: true,
    },
    {
      name: "Formal Designation",
      selector: (row) => row.cflDepartment,
      wrap: true,
      sortable: true,
    },
    {
      name: "Performance & Potential",
      selector: (row) => row.newRating,
      wrap: true,
      sortable: true,
    },
    {
      name: "Talent Category",
      selector: (row) => row.talentLevel,
      wrap: true,
      sortable: true,
    },
    {
      name: "Project Allotment",
      selector: (row) => row.talentLevel,
      wrap: true,
      sortable: true,
    },
  ];

  const combinedObject = { ...cfl, ...cflSkill, ...cflRating };
  const arrayOfObjects = [combinedObject];

  console.log(arrayOfObjects);

  // Custom styles for larger font
  const customStyles = {
    headCells: {
      style: {
        fontSize: "18px", // Set header font size
      },
    },
    cells: {
      style: {
        fontSize: "16px", // Set body font size
      },
    },
  };

  return (
    <div>
      <DataTable
        data={arrayOfObjects}
        columns={columns}
        className="w-full"
        highlightOnHover
        customStyles={customStyles} // Apply custom styles
      />
    </div>
  );
}

export default RatingTable;
