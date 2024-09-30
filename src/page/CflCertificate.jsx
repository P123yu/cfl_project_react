import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";

function CflCertificate() {
  const location = useLocation();
  const empId = location?.state?.data;

  const columns = [
    {
      name: "Employee ID",
      selector: (row) => row.empId,
    },
    {
      name: "CFL's Certificate",
      cell: (row) => (
        <a
          href={`data:application/octet-stream;base64,${row.certificateFileData}`}
          download={row.certificateFileName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {row.certificateFileName}
        </a>
      ),
    },
    {
      name: "Submitted Date",
      selector: (row) => row.date,
    },
    {
      name: "Submitted Time",
      selector: (row) => row.time,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    if (empId) {
      axios
        .get(`http://localhost:8080/certificate/download/${empId}`)
        .then((res) => setData(res.data))
        .catch((error) => {
          console.error("Error fetching logbook data:", error);
        });
    }
  }, [empId]);

  return (
    <div className="p-10">
      <p className="text-center mb-5 text-2xl font-bold text-gray-600">
        Download CFL's Certificate
      </p>
      <div className="border-2 border-gray-600 rounded-lg">
        <DataTable
          data={data}
          columns={columns}
          highlightOnHover
          pagination
          customStyles={{
            headCells: {
              style: {
                fontSize: "18px",
                fontWeight: "bold",
              },
            },
            cells: {
              style: {
                fontSize: "16px",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default CflCertificate;
