// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// function Cfl_info() {
//   const [cflInfo, setCflInfo] = useState([]);

//   const location = useLocation();
//   const year = location.state?.data;
//   console.log(year, "year ++++");

//   useEffect(() => {
//     if (year) {
//       fetchCflInfo();
//     }
//   }, [year]);

//   const fetchCflInfo = () => {
//     axios
//       .get(`http://localhost:8080/cfl/getAllByYear/${year}`)
//       .then((res) => setCflInfo(res.data))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <p className="text-2xl font-bold ml-6 mt-6 text-blue-900">CFL's {year}</p>
//       <div className="list p-6">
//         <div className="grid grid-cols-1 gap-8 p-4">
//           {cflInfo.map((item, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded-xl flex">
//               <div className="px-16 ">
//                 <div className="image">
//                   <img
//                     src={`data:image/jpeg;base64,${item.fileData}`}
//                     alt="Base64 encoded"
//                     className="w-20 h-20 rounded-full"
//                   />
//                 </div>

//                 <div className="role">
//                   <label className="font-bold">Department</label>
//                   <p>{item.cflDepartment}</p>
//                 </div>
//               </div>
//               <div className="flex-1 p-2">
//                 <div className="cfl-id">
//                   <label className="font-bold">CFL Id</label>
//                   <p>{item.cflId}</p>
//                 </div>

//                 <div className="dept mt-6">
//                   <label className="font-bold">Department</label>
//                   <p>{item.cflDepartment}</p>
//                 </div>
//               </div>

//               <div className="flex-1 p-2">
//                 <div className="reporting">
//                   <label className="font-bold">Reporting To</label>
//                   <p>{item.reportingTo}</p>
//                 </div>

//                 <div className="email mt-6">
//                   <label className="font-bold">Email</label>
//                   <p>{item.cflEmail}</p>
//                 </div>
//               </div>

//               <div className="flex-1 p-2">
//                 <div className="joiningDate">
//                   <label className="font-bold">Joining Date</label>
//                   <p>{item.joiningDate}</p>
//                 </div>

//                 <div className="location mt-6">
//                   <label className="font-bold">Location</label>
//                   <p>{item.cflLocation}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cfl_info;

import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLaptop, FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "../component/ZustandStore";

function Cfl_info() {
  const [cflInfo, setCflInfo] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const location = useLocation();
  const year = location.state?.data;
  console.log(year, "year ++++");

  useEffect(() => {
    if (year) {
      fetchCflInfo();
    }
  }, [year]);

  const fetchCflInfo = () => {
    axios
      .get(`http://localhost:8080/cfl/getAllByYear/${year}`)
      .then((res) => {
        setLoader(false);
        setCflInfo(res.data);
      })
      .catch((error) => console.error(error));
  };

  console.log(cflInfo, "cflInfo");

  const [filteredData, setFilteredData] = useState();
  useEffect(() => {
    setFilteredData(cflInfo);
  }, [cflInfo]);

  console.log(filteredData, "filteredData");
  const handleChangeSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setFilteredData(cflInfo);
    } else {
      const filteredInfo = cflInfo.filter((item) =>
        item.cflFirstName.toLowerCase().includes(searchTerm)
      );
      setFilteredData(filteredInfo);
    }
  };

  // const handleCflInfo = (item) => {
  //   navigate("/particular_cfl_info", { state: { data: item } });
  // };

  const handleCflInfo = (item) => {
    navigate("/particular-cfl-info", { state: { data: item } });
  };

  const handleOverAllDashboard = () => {
    navigate("/overall-dashboard",{ state: { data: year } });
  };

  const { roleName } = useStore();

  return (
    <div className="cms-dashboard">
      <div className="heading flex justify-between px-6 p-2 pt-10 mx-5">
        <p className="text-2xl font-bold ml-6 m text-blue-900">
          List Of CFL's {year}
        </p>

        {(roleName === "ROLE_HR" || roleName === "ROLE_MANAGER") && (
          <div className="btn flex items-center space-x-10">
            <div
              className="overall-dashboard flex items-center space-x-2 bg-blue-800 p-2 rounded-lg text-white hover:bg-red-600 hover:cursor-pointer transition-transform hover:scale-110"
              onClick={handleOverAllDashboard}
            >
              <FaLaptop className="text-xl" />
              <p>OverAll Dashboard</p>
            </div>

            <div className="search flex space-x-2 items-center">
              <FaSearch className="text-2xl ml-2" />
              <input
                type="text"
                className="outline-none border-2 border-gray-400 p-2 rounded-xl pl-6"
                placeholder="search by name"
                onChange={handleChangeSearch}
              />
            </div>
          </div>
        )}
      </div>

      {loader ? (
        <div className="spinner text-center mt-40">
          <CircularProgress size="7rem" />
        </div>
      ) : (
        <div className="p-12">
          <div className="bg-gray-200 p-4 rounded-xl ">
            {filteredData?.map((item, index) => (
              <div
                key={index}
                className="mb-8 bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105"
                onClick={() => handleCflInfo(item)}
              >
                <div className="grid grid-cols-12 ">
                  <div className="col-span-2 flex flex-col items-center gap-4 hover:cursor-pointer">
                    {item.fileData ? (
                      <>
                        <img
                          src={`data:image/jpeg;base64,${item.fileData}`}
                          alt={`${item.cflFirstName || "User"}'s Profile`}
                          className="w-20 h-20 rounded-full border-2 border-gray-500"
                        />
                        <p>{item.cflFirstName || "NA"}</p>
                      </>
                    ) : (
                      <>
                        <img className="w-20 h-20 rounded-full border-2 border-gray-500 bg-blue-100" />
                        <p>{item.cflFirstName || "NA"}</p>
                      </>
                    )}
                  </div>

                  <div className="col-span-5 hover:cursor-pointer">
                    <div className="grid grid-cols-2 ">
                      <div>
                        <div className="mb-4">
                          <label className="font-semibold text-lg text-gray-600">
                            CFL Id
                          </label>
                          <p className="break-words  text-gray-800 ">
                            {item.empId || "NA"}
                          </p>
                        </div>
                        <p className="border-[1px] border-gray-500 mb-3"></p>
                        <div>
                          <label className="font-semibold text-lg text-gray-600">
                            Department
                          </label>
                          <p className="break-words   text-gray-800">
                            {item.cflDepartment || "NA"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-4">
                          <label className="font-semibold text-lg text-gray-600">
                            Reporting Manager
                          </label>
                          <p className="break-words  text-gray-800 ">
                            {item.reportingManager || "NA"}
                          </p>
                        </div>
                        <p className="border-[1px] border-gray-500 mb-3"></p>
                        <div>
                          <label className="font-semibold text-lg text-gray-600">
                            Designation
                          </label>
                          <p className="break-words  text-gray-800 ">
                            {item.cflDesignation || "NA"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-5">
                    <div className="grid grid-cols-2 ">
                      <div>
                        <div className="mb-4">
                          <label className="font-semibold text-lg text-gray-600">
                            Email
                          </label>
                          <p className="break-words  text-gray-800 ">
                            {item.cflEmail || "NA"}
                          </p>
                        </div>
                        <p className="border-[1px] border-gray-500 mb-3"></p>
                        <div>
                          <label className="font-semibold text-lg text-gray-600">
                            College Name
                          </label>
                          <p className="break-words  text-gray-800 ">
                            {item.collegeName || "NA"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-4">
                          <label className="font-semibold text-lg text-gray-600">
                            Joining Date
                          </label>
                          <p className="break-words  text-gray-800 ">
                            {item.joiningDate || "NA"}
                          </p>
                        </div>
                        <p className="border-[1px] border-gray-500 mb-3"></p>
                        <div>
                          <label className="font-semibold text-lg text-gray-600">
                            Location
                          </label>
                          <p className="break-words  text-gray-800 ">
                            {item.cflLocation || "NA"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cfl_info;
