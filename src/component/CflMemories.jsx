// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import Dropdown from "react-dropdown";
// // import "react-dropdown/style.css";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick-theme.css";
// // import "slick-carousel/slick/slick.css";

// // function CflMemories() {
// //   const [imageData, setImageData] = useState([]);
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2000,
// //   };

// //   const options1 = ["Select", "2023", "2024", "2025"];
// //   const defaultOption1 = options1[0];

// //   const [year, setYear] = useState("");
// //   const handleSelect = (selectedOption) => {
// //     setYear(`${selectedOption.value}`);
// //   };

// //   console.log(year, "year");

// //   // Fetch images based on the selected year
// //   useEffect(() => {
// //     axios
// //       .get(`http://localhost:8080/memories/getMemoriesByYear/${year}`)
// //       .then((res) => setImageData(res.data))
// //       .catch((error) => console.error("Error fetching data:", error));
// //   }, [year]);

// //   console.log(imageData, "imageData");

// //   const imageStyle = {
// //     width: "100%",
// //     height: "400px",
// //     objectFit: "contain",
// //   };

// //   return (
// //     <div>
// //       <>
// //         <Dropdown
// //           options={options1}
// //           onChange={handleSelect}
// //           value={defaultOption1}
// //           placeholder="Select an option"
// //         />
// //       </>
// //       <Slider {...settings}>
// //         {imageData?.map((image, index) => (
// //           <div key={index}>
// //             <img
// //               src={`data:image/jpeg;base64,${image.fileData}`}
// //               alt={`Slide ${index + 1}`}
// //               style={imageStyle}
// //             />
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // }

// // export default CflMemories;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// function CflMemories() {
//   const [imageData, setImageData] = useState([]);
//   const [year, setYear] = useState("");

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerMode: true, // Center the active slide
//     centerPadding: "30px", // Add padding around the active slide
//   };

//   const options1 = ["Select", "2023", "2024", "2025"];
//   const defaultOption1 = options1[0];

//   const handleSelect = (selectedOption) => {
//     setYear(`${selectedOption.value}`);
//   };

//   // Fetch images based on the selected year
//   useEffect(() => {
//     if (year !== "") {
//       axios
//         .get(`http://localhost:8080/memories/getMemoriesByYear/${year}`)
//         .then((res) => setImageData(res.data))
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   }, [year]);

//   const imageContainerStyle = {
//     padding: "10px", // Space between images
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "300px", // Fixed height for consistency
//     objectFit: "cover", // Ensures the image covers the entire area without distortion
//     borderRadius: "10px", // Optional: Add rounded corners
//   };

//   return (
//     <div>
//       <Dropdown
//         options={options1}
//         onChange={handleSelect}
//         value={defaultOption1}
//         placeholder="Select an option"
//       />
//       <Slider {...settings}>
//         {imageData?.map((image, index) => (
//           <div key={index} style={imageContainerStyle}>
//             <img
//               src={`data:image/jpeg;base64,${image.fileData}`}
//               alt={`Slide ${index + 1}`}
//               style={imageStyle}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default CflMemories;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// function CflMemories() {
//   const [imageData, setImageData] = useState([]);
//   const [year, setYear] = useState("");

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   const options1 = ["Select", "2023", "2024", "2025"];
//   const defaultOption1 = options1[0];

//   const handleSelect = (selectedOption) => {
//     setYear(`${selectedOption.value}`);
//   };

//   useEffect(() => {
//     if (year !== "") {
//       axios
//         .get(`http://localhost:8080/memories/getMemoriesByYear/${year}`)
//         .then((res) => setImageData(res.data))
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   }, [year]);

//   const imageStyle = {
//     width: "100%",
//     height: "320px", // Fixed height for consistency
//     objectFit: "cover", // Ensures the image covers the entire area without distortion
//     borderRadius: "10px", // Optional: Add rounded corners
//   };

//   console.log(imageData, "imageData");

//   return (
//     <div className="p-10 cms-dashboard">
//       <p className="text-5xl text-center font-bold text-blue-800">
//         Memorable Moments
//       </p>
//       <div className="dropdown flex items-center gap-10 ml-[500px] mt-5">
//         <p className="text-2xl text-gray-700">Select Year</p>
//         <Dropdown
//           options={options1}
//           onChange={handleSelect}
//           value={defaultOption1}
//           placeholder="Select an option"
//         />
//       </div>

//       <div className="slider mt-10">
//         {imageData.length > 0 ? (
//           <>
//             <Slider {...settings}>
//               {imageData?.map((image, index) => (
//                 <div key={index}>
//                   <img
//                     src={`data:image/jpeg;base64,${image.fileData}`}
//                     alt={`Slide ${index + 1}`}
//                     style={imageStyle}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </>
//         ) : (
//           <>
//             <div className="div">
//               <p className="text-4xl text-gray-700 ml-[410px] mt-20 border-b-2 border-blue-900 w-[485px]">
//                 Please Select Memorable Year
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CflMemories;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaVideo } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Swal from "sweetalert2";

function CflMemories() {
  const [imageData, setImageData] = useState([]);
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const options1 = [
    "Select",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const defaultOption1 = options1[0];

  const handleSelect = (selectedOption) => {
    setYear(`${selectedOption.value}`);
  };

  useEffect(() => {
    if (year !== "") {
      axios
        .get(`http://localhost:8080/memories/getMemoriesByYear/${year}`)
        .then((res) => setImageData(res.data))
        .catch((error) => {
          console.error("Error fetching data:", error);
          Swal.fire({
            title: "Not Any Memory Found for " + `${year}`,
          });
        });
    }
  }, [year]);

  const imageStyle = {
    width: "100%",
    height: "320px",
    objectFit: "contain",
    borderRadius: "10px",
  };

  const navigate = useNavigate();
  const handleNavigateVideo = () => {
    navigate("/video");
  };

  return (
    <div className="p-10 cms-dashboard">
      <div className="head flex items-center">
        <p className="text-5xl  font-bold text-blue-800 ml-[400px]">
          Memorable Moments
        </p>
        <div
          className="btn flex items-center space-x-2 ml-[250px] p-2 bg-indigo-900 text-white rounded-md hover:bg-zinc-700 hover:cursor-pointer"
          onClick={handleNavigateVideo}
        >
          <p className="text-xl">View Video</p>
          <FaVideo className="text-2xl" />
        </div>
      </div>

      <div className="dropdown flex items-center gap-10 ml-[500px] mt-5">
        <p className="text-2xl text-gray-700">Select Year</p>
        <Dropdown
          options={options1}
          onChange={handleSelect}
          value={defaultOption1}
          placeholder="Select an option"
        />
      </div>

      <div className="slider mt-10">
        {imageData.length > 0 ? (
          <>
            {imageData.length === 1 ? (
              <img
                src={`data:image/jpeg;base64,${imageData[0].fileData}`}
                alt={`Slide 1`}
                style={imageStyle}
              />
            ) : (
              <Slider {...settings}>
                {imageData.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`data:image/jpeg;base64,${image.fileData}`}
                      alt={`Slide ${index + 1}`}
                      style={imageStyle}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </>
        ) : (
          <div className="div">
            <p className="text-4xl text-gray-700 ml-[410px] mt-20 border-b-2 border-blue-900 w-[485px]">
              Please Select Memorable Year
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CflMemories;
