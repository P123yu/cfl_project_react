import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ViewWorldOfThanks() {
  const [listOfWorldThanks, setListOfWorldThanks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/rewardsAndRecognition/getType/world-of-thanks"
      )
      .then((res) => setListOfWorldThanks(res.data))
      .catch((error) => {
        Swal.fire({
          title: "Data not fetched",
        });
      });
  }, []);

  return (
    <div className="p-10 cms-dashboard">
      <p className="text-3xl text-center font-bold mb-5 dash-text">
        World Of Thanks
      </p>
      <div className="world-of-thanks-grid grid grid-cols-4 gap-6">
        {listOfWorldThanks.map((item, index) => {
          const cflFileData = item.cfl?.fileData;
          const imageFileData = item.rewardsAndRecognition?.rewardImage;

          return (
            <div
              className="card bg-blue-400 rounded-xl shadow-md p-5 transition-transform hover:scale-110 hover:bg-green-500 hover:cursor-pointer"
              key={index}
            >
           

              <div className="one">
                <div className="image flex justify-between items-center mb-4">
                  <div className="cfl-image">
                    {cflFileData && (
                      <img
                        src={`data:image/jpeg;base64,${cflFileData}`}
                        alt={`CFL Image ${index}`}
                        className="w-[80px] h-[80px] rounded-full"
                      />
                    )}
                  </div>

                  <div className="medal-image">
                    {imageFileData && (
                      <img
                        src={`data:image/jpeg;base64,${imageFileData}`}
                        alt={`Medal Image ${index}`}
                        className="w-[80px] h-[80px] rounded-full"
                      />
                    )}
                  </div>
                </div>

                <div className="mt-2">
                  <div className="rewarded-to mb-2">
                    <label className="font-bold">Rewarded To:</label>
                    <p>{item.rewardsAndRecognition.rewardsPersonName}</p>
                  </div>

                  <div className="rewarded-by">
                    <label className="font-bold">Rewarded By:</label>
                    <p>{item.rewardsAndRecognition.messagedPersonName}</p>
                  </div>
                </div>

               
                <div className="message bg-yellow-200 mt-4 p-3 rounded-lg">
                  <label className="font-bold">Message:</label>
                  <p>{item.rewardsAndRecognition.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewWorldOfThanks;
