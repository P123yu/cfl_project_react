import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ManagerRoleReview from "../image/ManagerRoleReview.png";

function CflRoleMovement({ empId ,quarter}) {
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

  return (
    <div className="p-10">
      <div className="manager-rating">
        <p className="text-2xl my-1 mt-10">Possible CFL's Role Movement</p>
      </div>
      <div className="rating border-2 border-gray-500  rounded-xl p-5">
        <div className="grid grid-cols-3 ">
          <div className="col-span-1">
            <img src={ManagerRoleReview} className="w-[300px] h-[220px] ml-2" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 space-x-3 pt-2">
              <div className="col">
                <p className="text-2xl text-gray-600 ">Formal Role</p>
                <p className="text-2xl">{ratingAndLevel?.internal1}</p>
              </div>

              <div className="col">
                <p className="text-2xl text-gray-600 ">
                  Possible Role Movement in 2-3 yrs
                </p>
                <p className="text-2xl">{ratingAndLevel?.internal2}</p>
              </div>

              <div className="col">
                <p className="text-2xl text-gray-600 ">
                  Can the resource be a backup for anyone in the team ?
                </p>
                <p className="text-3xl">{ratingAndLevel?.internal3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CflRoleMovement;
