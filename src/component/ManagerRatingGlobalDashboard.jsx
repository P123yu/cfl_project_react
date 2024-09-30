import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

function ManagerRatingGlobalDashboard() {
  const [overallData, setOverAllData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/managerRating/getAllManagerRating")
      .then((res) => setOverAllData(res.data))
      .catch((error) => {
        Swal.fire({
          title: "No Any Data Found",
        });
      });
  }, []);

  const columns = [
    {
      name: "Emp Code",
      selector: (row) => row.empId,
    },
    {
      name: "Quarter",
      selector: (row) => row.quarter,
    },
    {
      name: "Potential Level",
      selector: (row) => row.potentialLevel,
      wrap: true,
    },
    {
      name: "Performance Level",
      selector: (row) => row.performanceLevel,
    },
    {
      name: "Talent Pool",
      selector: (row) => row.talentLevel,
    },
    {
      name: "Formal Movement",
      selector: (row) => row.internal1,
    },
    {
      name: "Movement in 2-3 yrs",
      selector: (row) => row.internal2,
    },
    {
      name: "Project Alocation",
      selector: (row) => row.internal3,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1.25rem",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        fontSize: "1.125rem",
      },
    },
  };

  return (
    <div className="">
      <p className="text-2xl font-bold text-center py-3 ">
        CFL Manager Rating Dashboard
      </p>

      <div className="table-container overflow-x-auto border-2 border-gray-500 rounded-xl p-10 px-10">
        <DataTable
          columns={columns}
          data={overallData}
          highlightOnHover
          striped
          pagination
          paginationPerPage={7}
          paginationRowsPerPageOptions={[7, 14, 21, 28]}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default ManagerRatingGlobalDashboard;
