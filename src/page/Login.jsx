// // import axios from "axios";
// // import Lottie from "lottie-react";
// // import React, { useState } from "react";
// // import { FaUser } from "react-icons/fa";
// // import { FaLock } from "react-icons/fa6";
// // import { IoEye, IoEyeOff } from "react-icons/io5";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import Swal from "sweetalert2";
// // import animationData from "../animation/Cfl_login.json";
// // import useStore from "../component/ZustandStore";

// // function Login() {
// //   const [eye, setEye] = useState(true);
// //   const location = useLocation();
// //   console.log(location, "location....");
// //   // const particularCflInfo = location?.state.data;
// //   // console.log(particularCflInfo, "particularCflInfo");

// //   const navigate = useNavigate();
// //   // const handleParticularCfl = () => {
// //   //   navigate("/particular_cfl_info", { state: { data: particularCflInfo } });
// //   // };

// //   const [login, setLogin] = useState({ userName: "", userPassword: "" });

// //   const handleOnChange = (e) => {
// //     const { name, value } = e.target;
// //     setLogin((prev) => ({ ...prev, [name]: value }));
// //   };

// //   console.log(login, "login");

// //   const { jwtData } = useStore();
// //   console.log(jwtData, "jwtData");
// //   console.log(login, "login...");
// //   const handleLogin = () => {
// //     if (login?.userName !== "" && login?.userPassword !== "") {
// //       axios
// //         .post("http://localhost:8080/login", login, {
// //           headers: {
// //             Authorization: `Bearer ${jwtData}`, // Adding the JWT token in the Authorization header
// //           },
// //         })
// //         .then((res) => {
// //           Swal.fire("Login Successfully");
// //           navigate("/cfl-dashboard");
// //         })
// //         .catch((error) => Swal.fire("Wrong Details Filled !!!"));
// //     } else {
// //       Swal.fire("Please Fill All Fields !!!");
// //     }
// //   };

// //   return (
// //     <div className="bg-blue-100">
// //       <p className="text-2xl text-center border-b-2 border-gray-600 text-gray-700 w-1/5 ml-[520px] pt-5">
// //         Login Account
// //       </p>
// //       <div className="grid grid-cols-2 ">
// //         <div className="col-span-1  h-[544px]">
// //           <Lottie
// //             loop={true}
// //             animationData={animationData}
// //             style={{ height: 440, width: 600, marginTop: "75px" }}
// //           />
// //         </div>
// //         <div className="col-span-1">
// //           <div className="div border-[2px] border-gray-300 rounded-2xl p-5 w-[500px] mt-20 bg-gray-100 ">
// //             <p className="text-2xl text-gray-700 ml-[180px] mb-3">Login Here</p>
// //             <div className="email flex flex-col">
// //               <label className="mb-1 text-gray-700 font-semibold">Email*</label>

// //               <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 tracking-wide">
// //                 <FaUser className="mx-2" />

// //                 <input
// //                   type="text"
// //                   placeholder="Enter Email"
// //                   required
// //                   className="outline-none  bg-gray-100  w-[380px] font-semibold tracking-wider"
// //                   onChange={handleOnChange}
// //                   name="userName"
// //                 />
// //               </div>
// //             </div>
// //             <div className="password flex flex-col mt-4">
// //               <label className="mb-1 text-gray-700 font-semibold">
// //                 Password*
// //               </label>
// //               <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 font-semibold tracking-wide">
// //                 <FaLock className="mx-2" />
// //                 <input
// //                   type={eye ? "text" : "password"}
// //                   placeholder="Enter Password"
// //                   required
// //                   className="outline-none bg-gray-100  w-[380px] mr-5 tracking-wider"
// //                   onChange={handleOnChange}
// //                   name="userPassword"
// //                 />
// //                 {eye ? (
// //                   <IoEye
// //                     className=" text-xl hover:cursor-pointer"
// //                     onClick={() => setEye(false)}
// //                   />
// //                 ) : (
// //                   <IoEyeOff
// //                     className=" text-xl hover:cursor-pointer"
// //                     onClick={() => setEye(true)}
// //                   />
// //                 )}
// //               </div>
// //             </div>

// //             <p className="text-center text-gray-700 mt-5 hover:text-blue-900 hover:cursor-pointer font-semibold">
// //               Forgot Password
// //             </p>
// //             <div className="loginBtn w-1/2 ml-[120px] mt-5 mb-5">
// //               <p
// //                 className="bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer tracking-wide"
// //                 onClick={handleLogin}
// //               >
// //                 Login
// //               </p>
// //             </div>

// //             <div className="signup text-center">
// //               Not a Member ?
// //               <Link
// //                 to="/signup"
// //                 className="text-blue-700 text-xl font-semibold ml-2"
// //               >
// //                 Sign up
// //               </Link>
// //             </div>

// //             {/* <div className="google-auth flex items-center bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer w-1/2 ml-[120px] mb-5">
// //               <img src={googleImage} className="h-5 w-5 ml-5 mr-5" />
// //               <p className="tracking-wide">Sign in with Google</p>
// //             </div> */}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import axios from "axios";
// import Lottie from "lottie-react";
// import React, { useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa6";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import * as Yup from "yup";
// import animationData from "../animation/Cfl_login.json";
// import useStore from "../component/ZustandStore";

// function Login() {
//   const [eye, setEye] = useState(true);
//   const navigate = useNavigate();

//   const [login, setLogin] = useState({ userName: "", userPassword: "" });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setLogin((prev) => ({ ...prev, [name]: value }));
//   };

//   const { jwtData, setJwtData, setIsAuthenticated } = useStore();

//   // Define Yup validation schema
//   const loginSchema = Yup.object().shape({
//     userName: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     userPassword: Yup.string().required("Password is required"),
//   });

//   const handleLogin = async () => {
//     try {
//       // Validate the form data
//       await loginSchema.validate(login);

//       // Proceed with the API call if validation passes
//       axios
//         .post("http://localhost:8080/login", login, {
//           headers: {
//             Authorization: `Bearer ${jwtData}`,
//           },
//         })
//         .then((res) => {
//           console.log(res.data, "logindata");
//           setIsAuthenticated(true);
//           Swal.fire("Login Successfully");
//           navigate("/cfl-dashboard");
//         })
//         .catch((error) => Swal.fire("Wrong Details Filled !!!"));
//     } catch (err) {
//       // Show validation errors
//       Swal.fire(err.errors[0]);
//     }
//   };

//   useEffect(() => {
//     if (jwtData) {
//       setJwtData(jwtData);
//     }
//   }, [jwtData]);

//   return (
//     <div className="bg-blue-100">
//       <p className="text-2xl text-center border-b-2 border-gray-600 text-gray-700 w-1/5 ml-[520px] pt-5">
//         Login Account
//       </p>
//       <div className="grid grid-cols-2 ">
//         <div className="col-span-1  h-[544px]">
//           <Lottie
//             loop={true}
//             animationData={animationData}
//             style={{ height: 440, width: 600, marginTop: "75px" }}
//           />
//         </div>
//         <div className="col-span-1">
//           <div className="div border-[2px] border-gray-300 rounded-2xl p-5 w-[500px] mt-20 bg-gray-100 ">
//             <p className="text-2xl text-gray-700 ml-[180px] mb-3">Login Here</p>
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
//                 />
//               </div>
//             </div>
//             <div className="password flex flex-col mt-4">
//               <label className="mb-1 text-gray-700 font-semibold">
//                 Password*
//               </label>
//               <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 font-semibold tracking-wide">
//                 <FaLock className="mx-2" />
//                 <input
//                   type={eye ? "text" : "password"}
//                   placeholder="Enter Password"
//                   required
//                   className="outline-none bg-gray-100  w-[380px] mr-5 tracking-wider"
//                   onChange={handleOnChange}
//                   name="userPassword"
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

//             <p className="text-center text-gray-700 mt-5 hover:text-blue-900 hover:cursor-pointer font-semibold">
//               Forgot Password
//             </p>
//             <div className="loginBtn w-1/2 ml-[120px] mt-5 mb-5">
//               <p
//                 className="bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer tracking-wide"
//                 onClick={handleLogin}
//               >
//                 Login
//               </p>
//             </div>

//             <div className="signup text-center">
//               Not a Member ?
//               <Link
//                 to="/signup"
//                 className="text-blue-700 text-xl font-semibold ml-2"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import axios from "axios";
// import Lottie from "lottie-react";
// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa6";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import animationData from "../animation/Cfl_login.json";
// import useStore from "../component/ZustandStore";

// function Login() {
//   const [eye, setEye] = useState(true);
//   const location = useLocation();
//   console.log(location, "location....");
//   // const particularCflInfo = location?.state.data;
//   // console.log(particularCflInfo, "particularCflInfo");

//   const navigate = useNavigate();
//   // const handleParticularCfl = () => {
//   //   navigate("/particular_cfl_info", { state: { data: particularCflInfo } });
//   // };

//   const [login, setLogin] = useState({ userName: "", userPassword: "" });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setLogin((prev) => ({ ...prev, [name]: value }));
//   };

//   console.log(login, "login");

//   const { jwtData } = useStore();
//   console.log(jwtData, "jwtData");
//   console.log(login, "login...");
//   const handleLogin = () => {
//     if (login?.userName !== "" && login?.userPassword !== "") {
//       axios
//         .post("http://localhost:8080/login", login, {
//           headers: {
//             Authorization: `Bearer ${jwtData}`, // Adding the JWT token in the Authorization header
//           },
//         })
//         .then((res) => {
//           Swal.fire("Login Successfully");
//           navigate("/cfl-dashboard");
//         })
//         .catch((error) => Swal.fire("Wrong Details Filled !!!"));
//     } else {
//       Swal.fire("Please Fill All Fields !!!");
//     }
//   };

//   return (
//     <div className="bg-blue-100">
//       <p className="text-2xl text-center border-b-2 border-gray-600 text-gray-700 w-1/5 ml-[520px] pt-5">
//         Login Account
//       </p>
//       <div className="grid grid-cols-2 ">
//         <div className="col-span-1  h-[544px]">
//           <Lottie
//             loop={true}
//             animationData={animationData}
//             style={{ height: 440, width: 600, marginTop: "75px" }}
//           />
//         </div>
//         <div className="col-span-1">
//           <div className="div border-[2px] border-gray-300 rounded-2xl p-5 w-[500px] mt-20 bg-gray-100 ">
//             <p className="text-2xl text-gray-700 ml-[180px] mb-3">Login Here</p>
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
//                 />
//               </div>
//             </div>
//             <div className="password flex flex-col mt-4">
//               <label className="mb-1 text-gray-700 font-semibold">
//                 Password*
//               </label>
//               <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 font-semibold tracking-wide">
//                 <FaLock className="mx-2" />
//                 <input
//                   type={eye ? "text" : "password"}
//                   placeholder="Enter Password"
//                   required
//                   className="outline-none bg-gray-100  w-[380px] mr-5 tracking-wider"
//                   onChange={handleOnChange}
//                   name="userPassword"
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

//             <p className="text-center text-gray-700 mt-5 hover:text-blue-900 hover:cursor-pointer font-semibold">
//               Forgot Password
//             </p>
//             <div className="loginBtn w-1/2 ml-[120px] mt-5 mb-5">
//               <p
//                 className="bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer tracking-wide"
//                 onClick={handleLogin}
//               >
//                 Login
//               </p>
//             </div>

//             <div className="signup text-center">
//               Not a Member ?
//               <Link
//                 to="/signup"
//                 className="text-blue-700 text-xl font-semibold ml-2"
//               >
//                 Sign up
//               </Link>
//             </div>

//             {/* <div className="google-auth flex items-center bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer w-1/2 ml-[120px] mb-5">
//               <img src={googleImage} className="h-5 w-5 ml-5 mr-5" />
//               <p className="tracking-wide">Sign in with Google</p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import axios from "axios";
import { decodeJwt } from "jose";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import animationData from "../animation/Cfl_login.json";
import useStore from "../component/ZustandStore";
import CflLogo from "../image/CflLogo.png";
import CompanyLogo from "../image/CompanyLogo.png";

function Login() {
  const [eye, setEye] = useState(true);
  const navigate = useNavigate();

  const [login, setLogin] = useState({ userName: "", userPassword: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const { jwtData, setJwtData, setIsAuthenticated, setRoleName, roleName } =
    useStore();

  console.log(roleName, "myRoleName....");

  // Define Yup validation schema
  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    userPassword: Yup.string().required("Password is required"),
  });

  useEffect(() => {
    if (jwtData) {
      setJwtData(jwtData);
    }
  }, [jwtData]);

  const handleLogin = () => {
    console.log(jwtData, "jwtdata ppppp");
    console.log(Object.values(jwtData), "jwtdata ppppp");

    const loginWithJwt = (jwtToken) => {
      // Validate the form data
      loginSchema
        .validate(login)
        .then(() => {
          // Proceed with the API call if validation passes
          console.log(login, "login");
          axios
            .post("http://localhost:8080/login", login, {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            })
            .then((res) => {
              console.log(res.data, "logindata");
              setIsAuthenticated(true);
              const decoded = decodeJwt(jwtToken);
              setRoleName(decoded?.authorities || []);
              Swal.fire("Login Successfully");
              navigate("/cfl-dashboard");
            })
            .catch((error) => {
              Swal.fire("Wrong Details Filled !!!");
            });
        })
        .catch((err) => {
          // Show validation errors
          Swal.fire(err.errors[0]);
        });
    };

    if (Object.values(jwtData).length === 0) {
      // JWT data is not available, so refresh it first
      loginSchema
        .validate(login)
        .then(() => {
          axios
            .get(`http://localhost:8080/jwtWithRefreshToken/${login?.userName}`)
            .then((res) => {
              console.log(res.data, "login username");

              axios
                .post(`http://localhost:8080/refresh/${res.data}`)
                .then((res) => {
                  console.log(res.data, "new data");
                  const newJwtData = res.data;
                  setJwtData(newJwtData); // Update jwtData

                  // Use the newJwtData directly for login
                  loginWithJwt(newJwtData);
                })
                .catch((error) => {
                  Swal.fire("Failed to refresh token!");
                });
            })
            .catch((error) => {
              Swal.fire("Your Account Expired Register Again !!!");
            });
        })
        .catch((err) => {
          // Show validation errors
          Swal.fire(err.errors[0]);
        });
    } else {
      // JWT data is already available, use it directly for login
      loginWithJwt(jwtData);
    }
  };

  // const { roleName, setRoleName } = useStore();

  // useEffect(() => {
  //   if (jwtData) {
  //     try {
  //       const decoded = decodeJwt(jwtData);
  //       // setJwtData(jwtToken);
  //       setRoleName(decoded?.authorities || []);
  //       console.log(decoded);
  //       console.log(roleName, "roleName");
  //       // if (roleName === "ROLE_MENTOR") {
  //       //   setMentorEmail(decoded?.sub || []);
  //       // }
  //       // } else {
  //       //   removeMentorEmail();
  //       // }
  //     } catch (error) {
  //       console.error("Failed to decode JWT:", error);
  //       Swal.fire("Invalid JWT Token. Please try logging in again.");
  //     }
  //   }
  // }, [jwtData]);

  return (
    <div className="bg-blue-100  cms-dashboard" style={{ width: "100vw" }}>
      <div
        className="head flex items-center justify-between px-10 pt-1"
        style={{ marginTop: "-4px" }}
      >
        <img src={CompanyLogo} className="w-[200px] h-[80px]   rounded-md" />
        <p className="text-3xl text-center border-b-2 border-gray-600 text-gray-700 w-1/2 font-semibold">
          Login To CMS Future Leaders Program
        </p>
        <img src={CflLogo} className="w-[200px] h-[120px]  rounded-md" />
      </div>

      <div
        className="grid grid-cols-2 gap-8"
        style={{ marginTop: "-65px", height: "544px" }}
      >
        <div className="col-span-1 ">
          <Lottie
            loop={true}
            animationData={animationData}
            style={{
              height: 450,
              width: 700,
              marginTop: "70px",
            }}
          />
        </div>
        <div className="col-span-1 p-1">
          <div className="div border-[2px] border-gray-300 rounded-2xl p-5 w-[500px] mt-20 bg-gray-100 shadow-3xl">
            <p className="text-2xl text-gray-700 ml-[180px] mb-3">Login Here</p>
            <div className="email flex flex-col">
              <label className="mb-1 text-gray-700 font-semibold text-lg">
                Username
                {/* <span className="text-md">(Official E-Mail Id)</span> */}
              </label>

              <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 tracking-wide">
                <FaUser className="mx-2" />

                <input
                  type="text"
                  placeholder="Enter Email"
                  required
                  className="outline-none  bg-gray-100  w-[380px] font-semibold tracking-wider"
                  onChange={handleOnChange}
                  name="userName"
                />
              </div>
            </div>
            <div className="password flex flex-col mt-4">
              <label className="mb-1 text-gray-700 font-semibold text-lg">
                Password
              </label>
              <div className="input flex items-center border-b-2 border-gray-400 p-1 rounded-sm text-gray-700 font-semibold tracking-wide">
                <FaLock className="mx-2" />
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  className="outline-none bg-gray-100  w-[380px] mr-5 tracking-wider"
                  onChange={handleOnChange}
                  name="userPassword"
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

            <p className="text-center text-gray-700 mt-5 hover:text-blue-900 hover:cursor-pointer font-semibold">
              Forgot Password
            </p>
            <div className="loginBtn w-1/2 ml-[120px] mt-5 mb-5">
              <p
                className="bg-blue-700 p-2 text-white rounded-xl text-center hover:bg-green-800 hover:cursor-pointer tracking-wide transition-transform hover:scale-110"
                onClick={handleLogin}
              >
                Login
              </p>
            </div>

            <div className="signup text-center">
              Not a Member ?
              <Link
                to="/signup"
                className="text-blue-700 text-xl font-semibold ml-2"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
