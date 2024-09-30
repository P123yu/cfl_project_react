import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import animationData from "../image/ManagerRating.png";
import ManagerRoleReview from "../image/ManagerRoleReview.png";
import Project from "../image/Project.png";

function ManagerReview({ empId, quarter }) {
  const [ratingAndLevel, setRatingAndLevel] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/managerRating/get/${empId}/${quarter}`)
      .then((res) => setRatingAndLevel(res.data))
      .catch((error) => {
        Swal.fire({
          title: "No Rating For This Quarter Exist",
        });
      });
  }, []);

  console.log(ratingAndLevel, "ratingAndLevel");

  // table

  const columns = [
    {
      name: "Consistent excellence",
      selector: (row) => row.question1,
    },
    {
      name: "Adaptability",
      selector: (row) => row.question2,
    },
    {
      name: "Leadership initiative",
      selector: (row) => row.question3,
    },
    {
      name: "Innovative problem solver",
      selector: (row) => row.question4,
    },
    {
      name: "Future-oriented",
      selector: (row) => row.question5,
    },
  ];

  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/questionRadio/get/${empId}/${quarter}`)
      .then((res) => setAnswer([res?.data]))
      .catch((error) => {
        Swal.fire({
          title: "No Competancy For This Quarter Exist",
        });
      });
  }, []);

  console.log(answer, "answer");

  return (
    <div className="p-10 cms-dashboard" style={{ width: "100vw" }}>
      <div className="manager-rating">
        <p className="text-3xl my-1">CFL's quarterly result</p>
      </div>
      <div className="rating border-2 border-gray-500  rounded-xl p-5 bg-blue-100">
        <div className="grid grid-cols-3 ">
          <div className="col-span-1">
            <img
              src={animationData}
              className="w-[300px] h-[220px] ml-2 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 space-x-10 pt-12">
              <div className="col">
                <p className="text-2xl text-gray-700 ">Potential Rating</p>
                <p className="text-7xl ml-16">
                  {ratingAndLevel?.potentialLevel}
                </p>
              </div>

              <div className="col">
                <p className="text-2xl text-gray-700 ">Performance Rating</p>
                <p className="text-7xl ml-16">
                  {ratingAndLevel?.performanceLevel}
                </p>
              </div>

              <div className="col">
                <p className="text-2xl text-gray-700 ">Talent Level</p>
                <p className="text-3xl ">{ratingAndLevel?.talentLevel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="manager-rating">
        <p className="text-3xl my-1 mt-10">Competancy</p>
      </div>
      <div className="table border-2 border-gray-500 rounded-xl mt-2">
        <DataTable
          data={answer}
          columns={columns}
          highlightOnHover
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
                backgroundColor: "rgba(0,0,255,.5)",
                color: "white",
              },
            },
          }}
        />
      </div>
      <div className="manager-rating">
        <p className="text-3xl my-2 mt-10">Possible CFL's Role Movement</p>
      </div>
      <div className="rating border-2 border-gray-500  rounded-xl p-5 bg-blue-100">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <img
              src={ManagerRoleReview}
              className="w-[300px] h-[220px] ml-2 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 space-x-3 pt-2">
              <div className="col">
                <p className="text-2xl text-gray-700 ">Formal Role</p>
                <p className="text-2xl ">{ratingAndLevel?.internal1}</p>
              </div>

              <div className="col ">
                <p className="text-2xl text-gray-700 ">
                  Possible Role Movement in 2-3 yrs
                </p>
                <p className="text-2xl">{ratingAndLevel?.internal2}</p>
              </div>

              <div className="col">
                <p className="text-2xl text-gray-700 ">
                  Can the resource be a backup for anyone in the team ?
                </p>
                <p className="text-3xl">{ratingAndLevel?.internal3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="manager-rating">
        <p className="text-3xl my-2 mt-10">Can We Allocate Project ?</p>
      </div>
      <div className="rating border-2 border-gray-500  rounded-xl p-5 bg-blue-100">
        <div className="grid grid-cols-3 ">
          <div className="col-span-1">
            <img
              src={Project}
              className="w-[300px] h-[220px] ml-2 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 space-x-3 pt-2">
              <div className="col">
                <p className="text-2xl text-gray-700 ">Project1</p>
                <p className="text-2xl">{ratingAndLevel?.project1}</p>
              </div>

              <div className="col">
                <p className="text-2xl text-gray-700 ">Project2</p>
                <p className="text-2xl">{ratingAndLevel?.project2}</p>
              </div>

              <div className="col">
                <p className="text-2xl text-gray-700 ">Project3</p>
                <p className="text-2xl">{ratingAndLevel?.project3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerReview;
