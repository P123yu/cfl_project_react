
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Swal from "sweetalert2";

function CflFeedBack() {
  const location = useLocation();
  const mentorMail = location?.state?.data;

  const [listCfl, setListCfl] = useState([]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/menteeToMentorFeedBack/getAllByHr")
      .then((res) => setListCfl(res.data))
      .catch((error) => {
        Swal.fire({
          title: "No Any CFL's Found ",
        });
      });
  }, []);

  const flattenedArray = listCfl.flat();
  
  const filteredCfl = flattenedArray.filter((item) => {
    const feedbackDate = dayjs(item.feedbackDate); 
    const feedbackMonth = feedbackDate.format("MM"); 
    const feedbackYear = feedbackDate.format("YYYY"); 

    return (
      (!month || feedbackMonth === month) && 
      (!year || feedbackYear === year)
    );
  });

  return (
    <div>
      <div className="bg-gray-100 pt-5 rounded-2xl">
        <p className="text-3xl text-center tracking-wide">
          CFL's Feedback To Mentor
        </p>

      
        <div className="flex justify-center space-x-4 py-4">
          <div>
            <label className="text-lg mr-2">Month:</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border border-gray-400 rounded px-3 py-1"
            >
              <option value="">All</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div>
            <label className="text-lg mr-2">Year:</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="YYYY"
              className="border border-gray-400 rounded px-3 py-1"
            />
          </div>
        </div>

        {filteredCfl.length > 0 ? (
          filteredCfl.map((item, index) => (
            <div key={index}>
              <VerticalTimeline lineColor="blue">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    width: "350px",
                    marginLeft: "180px",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  iconStyle={{
                    background: "#3f51b5",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  date={item.feedbackDate}
                >
                  <h3 className="vertical-timeline-element-title">
                    <div className="flex items-center space-x-5">
                      <label className="text-lg">Emp Id =</label>
                      <p className="" style={{ marginTop: "-2px" }}>
                        {item.menteeId}
                      </p>
                    </div>
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    <div className="flex items-center space-x-5">
                      <label className="text-lg">CFL Name =</label>
                      <p className="" style={{ marginTop: "-2px" }}>
                        {item.menteeName}
                      </p>
                    </div>
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    <div className="flex items-center space-x-5">
                      <label className="text-lg">Mentor Name =</label>
                      <p className="" style={{ marginTop: "-2px" }}>
                        {item.mentorName}
                      </p>
                    </div>
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle mt-2">
                    <div className="flex items-center space-x-5">
                      <label className="text-md ">CFL's Feedback = </label>
                      <p style={{ marginTop: "-2px" }}>{item.feedbackMessage}</p>
                    </div>
                  </h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          ))
        ) : (
          <p className="text-center text-lg">No feedbacks available for the selected month and year.</p>
        )}
      </div>
    </div>
  );
}

export default CflFeedBack;
