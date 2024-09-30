import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import WorldOfThanksImage from "../image/WorldOfThanks.png";


function WorldOfThanks() {

  const location=useLocation();
  console.log(location,"location mp");

  const options1 = [
    "Select",
    "Go-Getter",
    "Josh-Machine",
    "Kudos",
    "Pat-on-the-back",
    "Team-Player",
  ];
  const defaultOption1 = options1[0];
  const [category, setCategory] = useState("");

  const handleSelect = (selectedOption) => {
    setCategory(`${selectedOption.value}`);
  };

  const [rewardedPersonName, setRewardedPersonName] = useState("");
  const handleRewardedPersonName = (e) => {
    setRewardedPersonName(e.target.value);
  };

  const [rewardedMessage, setRewardedMessage] = useState("");
  const handleRewardedMessage = (e) => {
    setRewardedMessage(e.target.value);
  };
  const navigate = useNavigate();
  const handleChooseTemplate = () => {
    if (
      category !== "" &&
      rewardedPersonName !== "" &&
      rewardedMessage !== ""
    ) {
      navigate("/template", {
        state: {
          data1: category,
          data2: rewardedPersonName,
          data3: rewardedMessage,
        },
      });
    } else {
      Swal.fire({
        title: "Please fill all the fields",
      });
    }
  };

  return (
    <div className="cms-dashboard">
      <div className="grid grid-cols-2">
        <div className="col">
          <img src={WorldOfThanksImage} style={{ height: "100vh" }} />
        </div>
        <div className="col p-10">
          <p className="text-3xl font-bold text-center mb-5">
            Hats Off - World Of Thanks
          </p>
          <div className="thanks-form bg-yellow-200 p-20 w-[480px] ml-16  rounded-xl border-2 border-gray-600">
            <div className="grid grid-cols-2">
              <div className="col text-xl">
                <div>Category*</div>
                <div className="my-8">Employee Name*</div>
                <div>Message*</div>
              </div>

              <div className="col ml-2">
                <div className="cursor-pointer">
                  <Dropdown
                    options={options1}
                    onChange={handleSelect}
                    value={defaultOption1}
                    placeholder="Select an option"
                  />
                </div>

                <div className="emp-name my-4">
                  <input
                    type="text"
                    placeholder="employee name"
                    required
                    className="rounded-md outline-none p-2 "
                    onChange={handleRewardedPersonName}
                  />
                </div>

                <div className="message">
                  <textarea
                    type="text"
                    placeholder="write your message here"
                    required
                    className="rounded-md outline-none p-2"
                    onChange={handleRewardedMessage}
                  />
                </div>
              </div>
            </div>

            <div className="template">
              <button
                className="text-xl p-2 bg-blue-900 text-white rounded-md mt-5 ml-20 hover:bg-green-700"
                onClick={handleChooseTemplate}
              >
                Choose Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldOfThanks;
