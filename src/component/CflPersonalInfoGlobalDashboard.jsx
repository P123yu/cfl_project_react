// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { useLocation } from "react-router-dom";
// import Swal from "sweetalert2";

// function CflPersonalInfoGlobalDashboard() {
//   const location = useLocation();
//   const year = location?.state?.data;
//   const [overallData, setOverAllData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/cfl/getAllByYear/${year}`)
//       .then((res) => setOverAllData(res.data))
//       .catch((error) => {
//         Swal.fire({
//           title: "No Any Data Found",
//         });
//       });
//   }, [year]);

//   const columns = [
//     {
//       name: "Emp Code",
//       selector: (row) => row.empId,
//     },
//     {
//       name: "Name",
//       selector: (row) => row.cflFirstName + " " + row?.cflLastName || "",
//     },
//     {
//       name: "Email Id",
//       selector: (row) => row.cflEmail,
//     },
//     {
//       name: "Department",
//       selector: (row) => row.cflDepartment,
//     },
//     {
//       name: "Location",
//       selector: (row) => row.cflLocation,
//     },
//     {
//       name: "Manager",
//       selector: (row) => row.reportingManager,
//     },
//     {
//       name: "BU Head",
//       selector: (row) => row.buHeadName,
//     },
//     {
//       name: "Contact Number",
//       selector: (row) => row.contact,
//     },
//     {
//       name: "Probation Status",
//       selector: (row) => row.probationStatus.toString(),
//     },
//   ];

//   const customStyles = {
//     headCells: {
//       style: {
//         fontSize: "1.25rem",
//         fontWeight: "bold",
//       },
//     },
//     cells: {
//       style: {
//         fontSize: "1.125rem",
//       },
//     },
//   };

//   return (
//     <div className="">
//       <p className="text-2xl font-bold text-center py-3 ">CFL Info Dashboard</p>
//       <div className="table border-2 border-gray-500 rounded-xl p-10 px-10">
//         <DataTable
//           columns={columns}
//           data={overallData}
//           highlightOnHover
//           striped
//           pagination
//           paginationPerPage={7}
//           paginationRowsPerPageOptions={[7, 14, 21, 28]}
//           customStyles={customStyles}
//         />
//       </div>
//     </div>
//   );
// }

// export default CflPersonalInfoGlobalDashboard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function CflPersonalInfoGlobalDashboard() {
  const location = useLocation();
  const year = location?.state?.data;
  const [overallData, setOverAllData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cfl/getAllByYear/${year}`)
      .then((res) => setOverAllData(res.data))
      .catch((error) => {
        Swal.fire({
          title: "No Any Data Found",
        });
      });
  }, [year]);

  const columns = [
    {
      name: "Emp Code",
      selector: (row) => row.empId,
    },
    {
      name: "Name",
      selector: (row) => row.cflFirstName + " " + row?.cflLastName || "",
    },
    {
      name: "Email Id",
      selector: (row) => row.cflEmail,
    },
    {
      name: "Department",
      selector: (row) => row.cflDepartment,
    },
    {
      name: "Location",
      selector: (row) => row.cflLocation,
    },
    {
      name: "Manager",
      selector: (row) => row.reportingManager,
    },
    {
      name: "BU Head",
      selector: (row) => row.buHeadName,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contact,
    },
    {
      name: "Probation Status",
      selector: (row) => row.probationStatus.toString(),
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
      <p className="text-2xl font-bold text-center py-3 ">CFL Info Dashboard</p>
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

export default CflPersonalInfoGlobalDashboard;
