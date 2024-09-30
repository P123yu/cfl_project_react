import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function CflMentorMeetingHistory() {
  const location = useLocation();
  const data = location?.state.data;
  const cflId = data.empId;
  let cflName = data.cflFirstName;

  const [cflMentorMeetingHistory, setCflMentorMeetingHistory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchMonth, setSearchMonth] = useState("");
  const [searchDay, setSearchDay] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cfl/getByMailHistoryByEmpId/${cflId}`)
      .then((res) => {
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setCflMentorMeetingHistory(res.data);
          setFilteredData(res.data);
        } else if (res.data) {
          setCflMentorMeetingHistory([res.data]);
          setFilteredData([res.data]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [cflId]);

  useEffect(() => {
    const filterData = cflMentorMeetingHistory.filter((row) => {
      const date = new Date(row.mailDate);
      const month = date.getMonth() + 1; // Months are zero-based
      const day = date.getDate();

      return (
        (searchMonth === "" || month === parseInt(searchMonth)) &&
        (searchDay === "" || day === parseInt(searchDay))
      );
    });
    setFilteredData(filterData);
  }, [searchMonth, searchDay, cflMentorMeetingHistory]);

  const columns = [
    {
      name: "Employee Id",
      selector: (row) => row.empId,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) =>
        new Date(row.mailDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) =>
        row.mailTime && row.mailTime.length >= 8
          ? row.mailTime.substring(0, 8)
          : row.mailTime,
      sortable: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "18px", // Increase font size for header cells
        textAlign: "center",
      },
    },
    cells: {
      style: {
        fontSize: "16px", // Increase font size for data cells
        textAlign: "center",
      },
    },
  };

  return (
    <div>
      <div className="p-10">
        <div className="heading flex justify-between center">
          <p className="text-2xl text-gray-700 mb-5">
            {cflName?.toUpperCase()} E-MAIL HISTORY
          </p>

          <div className="search" style={{ marginTop: "-15px" }}>
            <div className="mb-4 flex items-center space-x-5 border-[1px] border-gray-300 p-2 rounded-xl">
              <FaSearch className="text-2xl mt-5" />
              <div className="flex flex-col  items-center">
                <label className="">Month</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={searchMonth}
                  onChange={(e) => setSearchMonth(e.target.value)}
                  className="border p-2 outline-none rounded-xl"
                />
              </div>

              <div className="flex flex-col items-center">
                <label className="">Day</label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={searchDay}
                  onChange={(e) => setSearchDay(e.target.value)}
                  className="border p-2 outline-none rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <DataTable
          data={filteredData}
          columns={columns}
          pagination
          customStyles={customStyles}
          highlightOnHover={true}
          className="border-2 border-gray-300"
        />
      </div>
    </div>
  );
}

export default CflMentorMeetingHistory;
