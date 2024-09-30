// import axios from "axios";
// import { decodeJwt } from "jose";
// import Lottie from "lottie-react";
// import React, { useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa6";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import animationData from "../animation/Add_cfl_login.json";
// import useStore from "../component/ZustandStore";
// import googleImage from "../image/Google.jpeg";

// function SignUp() {
//   const [eye, setEye] = useState(true);
//   //   const location = useLocation();
//   //   console.log(location, "location....");
//   //   const particularCflInfo = location?.state.data;
//   //   console.log(particularCflInfo, "particularCflInfo");

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/login");
//   };
//   //   const handleCreateCfl = () => {
//   //     navigate("/add_new_cfl");
//   //   };

//   const [register, setRegister] = useState({
//     userName: "",
//     userPassword: "",
//     role: "USER",
//   });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setRegister((prev) => ({ ...prev, [name]: value }));
//   };

//   console.log(register, "register.......");

//   const [jwtToken, setJwtToken] = useState("");

//   const handleRegister = () => {
//     console.log(register.userName, "register.userName...");
//     if (register?.userName !== "" && register?.userPassword !== "") {
//       console.log(register.userName, "register.userName...");
//       axios
//         .get(`http://localhost:8080/getMail/${register.userName}`)
//         .then((res) => {
//           console.log(res.data);
//           if (!res.data) {
//             axios
//               .post("http://localhost:8080/register", register)
//               .then((res) => {
//                 Swal.fire("Registered Successfully");
//                 setJwtToken(res.data);
//                 console.log(res.data, "res.data !!!");
//                 setRegister({ userName: "", userPassword: "", role: "" });
//               })
//               .catch((error) => {
//                 console.log("error:", error);
//                 Swal.fire("Registration Failed. Please try again.");
//               });
//           } else {
//             Swal.fire("Email Already Exists !!!.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching email:", error);
//           Swal.fire(
//             "An error occurred while fetching email. Please try again."
//           );
//         });
//     } else {
//       Swal.fire("Please fill in all fields.");
//     }
//   };

//   const { jwtData, setJwtData } = useStore();

//   useEffect(() => {
//     if (jwtToken) {
//       console.log(jwtToken, "jwtToken");
//       setJwtData(jwtToken);
//       navigate("/cfl-dashboard");
//       const decoded = decodeJwt(jwtToken);
//       console.log(decoded, "decoded.......");
//     }
//   }, [jwtToken]);

//   console.log(jwtData, "data......");

//   return (
//     <div className="bg-blue-100">
//       <p className="text-2xl text-center border-b-2 border-gray-500 text-gray-700 w-1/4 ml-[500px] pt-5">
//         Create Account
//       </p>
//       <div className="grid grid-cols-2 h-[544px]">
//         <div className="col-span-1 ">
//           <Lottie
//             loop={true}
//             animationData={animationData}
//             style={{ height: 520, width: 600, marginTop: "25px" }}
//           />
//         </div>
//         <div className="col-span-1">
//           <div className="div border-[2px] border-gray-300 rounded-2xl p-5 w-[500px] mt-20 bg-gray-100 ">
//             <p className="text-2xl text-gray-700 ml-[160px] mb-3">
//               Register Here
//             </p>
//             <div className="email flex flex-col">
//               <label className="mb-1 text-gray-700 font-semibold">Email*</label>

//               <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 tracking-wide">
//                 <FaUser className="mx-2" />

//                 <input
//                   type="text"
//                   placeholder="Enter Email"
//                   required
//                   className="outline-none  bg-gray-100  w-[380px] font-semibold tracking-wider"
//                   onChange={handleOnChange}
//                   name="userName"
//                   value={register.userName}
//                 />
//               </div>
//             </div>
//             <div className="password flex flex-col mt-4">
//               <label className="mb-1 text-gray-700 font-semibold">
//                 Password*
//               </label>
//               <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 tracking-wide">
//                 <FaLock className="mx-2" />
//                 <input
//                   type={eye ? "text" : "password"}
//                   placeholder="Enter Password"
//                   required
//                   className="outline-none bg-gray-100  w-[380px] mr-5 font-semibold tracking-wider"
//                   onChange={handleOnChange}
//                   name="userPassword"
//                   value={register.userPassword}
//                 />
//                 {eye ? (
//                   <IoEye
//                     className=" text-xl hover:cursor-pointer"
//                     onClick={() => setEye(false)}
//                   />
//                 ) : (
//                   <IoEyeOff
//                     className=" text-xl hover:cursor-pointer"
//                     onClick={() => setEye(true)}
//                   />
//                 )}
//               </div>
//             </div>

//             <p
//               className="text-center text-gray-700 mt-5 hover:text-blue-900 hover:cursor-pointer font-semibold"
//               onClick={handleLogin}
//             >
//               Login
//             </p>
//             <div className="loginBtn w-1/2 ml-[120px] mt-5 mb-5">
//               <p
//                 className="bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer tracking-wide"
//                 onClick={handleRegister}
//               >
//                 Register
//               </p>
//             </div>

//             <div className="google-auth flex items-center bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer w-1/2 ml-[120px] mb-5">
//               <img src={googleImage} className="h-5 w-5 ml-5 mr-5" />
//               <p className="tracking-wide">Sign in with Google</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import axios from "axios";
import { decodeJwt } from "jose";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import animationData from "../animation/Add_cfl_login.json";
import useStore from "../component/ZustandStore";
import CflLogo from "../image/CflLogo.png";
import CompanyLogo from "../image/CompanyLogo.png";

function SignUp() {
  const [eye, setEye] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const [register, setRegister] = useState({
    userName: "",
    userPassword: "",
    role: "CFL",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  // dropdown

  const options1 = ["CFL", "MENTOR", "HR", "MANAGER"];
  const defaultOption1 = options1[0];

  const handleSelect = (selectedOption) => {
    // console.log(`selectedOption.value`);
    setRegister((prev) => ({ ...prev, role: selectedOption?.value }));
  };

  console.log(register, "register....123");

  const [jwtToken, setJwtToken] = useState("");

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    userPassword: Yup.string().required("Password is required"),
  });

  const handleRegister = async () => {
    try {
      await validationSchema.validate(register);
      if (register?.userName !== "" && register?.userPassword !== "") {
        axios
          .get(`http://localhost:8080/getMail/${register.userName}`)
          .then((res) => {
            if (!res.data) {
              axios
                .post("http://localhost:8080/register", register)
                .then((res) => {
                  Swal.fire("Registered Successfully");
                  setJwtToken(res.data);
                  setRegister({ userName: "", userPassword: "", role: "" });
                })
                .catch((error) => {
                  console.log("error:", error);
                  Swal.fire("Registration Failed. Please try again.");
                });
            } else {
              Swal.fire("Email Already Exists !!!.");
            }
          })
          .catch((error) => {
            console.error("Error fetching email:", error);
            Swal.fire(
              "An error occurred while fetching email. Please try again."
            );
          });
      }
    } catch (error) {
      Swal.fire(error.message);
    }
  };

  const { jwtData, setJwtData } = useStore();
  const { roleName, setRoleName } = useStore();
  const { mentorEmail, setMentorEmail, removeMentorEmail } = useStore();
  console.log(mentorEmail);

  //   useEffect(() => {
  //     if (jwtToken) {
  //       setJwtData(jwtToken);
  // const decoded = decodeJwt(jwtToken);
  // setRoleName(decoded?.authorities || []);
  //       console.log(decoded);
  //       //setMentorEmail(decoded?.sub || []);
  //       navigate("/cfl-dashboard");
  //     }
  //   }, [jwtToken]);

  //   useEffect(() => {
  //     if (roleName === "ROLE_MENTOR") {
  //       const decoded = decodeJwt(jwtToken);
  //       setMentorEmail(decoded?.sub || []);
  //     }
  //   }, [roleName]);

  useEffect(() => {
    if (jwtToken) {
      try {
        const decoded = decodeJwt(jwtToken);
        setJwtData(jwtToken);
        setRoleName(decoded?.authorities || []);
        console.log(decoded);

        if (roleName === "ROLE_MENTOR") {
          setMentorEmail(decoded?.sub || []);
        }
        // } else {
        //   removeMentorEmail();
        // }

        navigate("/login");
      } catch (error) {
        console.error("Failed to decode JWT:", error);
        Swal.fire("Invalid JWT Token. Please try logging in again.");
      }
    }
  }, [jwtToken, roleName]);

  return (
    <div className="bg-blue-100 cms-dashboard">
      <div className="head flex items-center justify-between px-10 ">
        <img src={CompanyLogo} className="w-[200px] h-[80px]   rounded-md" />
        <p className="text-3xl text-center border-b-2 border-gray-600 text-gray-700 w-1/2 font-semibold">
          Sign up To CMS Future Leaders Program
        </p>
        <img src={CflLogo} className="w-[200px] h-[120px]  rounded-md" />
      </div>

      <div className="grid grid-cols-2 gap-10" style={{ marginTop: "-62px" }}>
        <div className="col-span-1 ">
          <Lottie
            loop={true}
            animationData={animationData}
            style={{ height: 520, width: 700, marginTop: "21px" }}
          />
        </div>
        <div className="col-span-1">
          <div className="div border-[2px] border-gray-300 rounded-2xl p-5 w-[500px] mt-20 bg-gray-100 ">
            <p className="text-2xl text-gray-700 ml-[160px] mb-3">
              Register Here
            </p>
            <div className="email flex flex-col">
              <label className="mb-1 text-gray-700 font-semibold text-lg">
                Username <span className="text-md">(Official E-Mail Id)</span>
              </label>

              <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 tracking-wide ">
                <FaUser className="mx-2" />

                <input
                  type="text"
                  placeholder="Enter Email"
                  required
                  className="outline-none  bg-gray-100  w-[380px] font-semibold tracking-wider"
                  onChange={handleOnChange}
                  name="userName"
                  value={register.userName}
                />
              </div>
            </div>
            <div className="password flex flex-col mt-4">
              <label className="mb-1 text-gray-700 font-semibold text-lg">
                Password
              </label>
              <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 tracking-wide">
                <FaLock className="mx-2" />
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  className="outline-none bg-gray-100  w-[380px] mr-5 font-semibold tracking-wider"
                  onChange={handleOnChange}
                  name="userPassword"
                  value={register.userPassword}
                />
                {eye ? (
                  <IoEye
                    className=" text-xl hover:cursor-pointer"
                    onClick={() => setEye(false)}
                  />
                ) : (
                  <IoEyeOff
                    className=" text-xl hover:cursor-pointer"
                    onClick={() => setEye(true)}
                  />
                )}
              </div>
            </div>

            <div className="dropdown flex items-center space-x-5 mt-5 ml-[110px]">
              <p className="text-xl">Select Role</p>
              <Dropdown
                options={options1}
                onChange={handleSelect}
                value={defaultOption1}
                placeholder="Select an option"
              />
            </div>

            <p
              className="text-center text-gray-700 mt-3 hover:text-blue-900 hover:cursor-pointer font-semibold text-xl"
              onClick={handleLogin}
            >
              Login
            </p>

            <div className="loginBtn w-1/2 ml-[120px] mt-3">
              <p
                className="bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer tracking-wide transition-transform hover:scale-110"
                onClick={handleRegister}
              >
                Register
              </p>
            </div>

            {/* <div className="google-auth flex items-center bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer w-1/2 ml-[120px] mb-5">
              <img src={googleImage} className="h-5 w-5 ml-5 mr-5" />
              <p className="tracking-wide">Sign in with Google</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
