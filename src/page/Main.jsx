import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { IoPaperPlane } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import CflLogo from "../image/CflLogo.png";
import MainImage from "../image/CmsFrontImage.jpg";
import CompanyLogo from "../image/CompanyLogo.png";

function Main() {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const buttonContainerRef = useRef(null); // Use this ref for the button container

  useEffect(() => {
    // Animation for the welcome text
    gsap.fromTo(
      textRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, delay: 1, ease: "power2.out" }
    );

    // Yoyo animation for the button container (moving it up and down)
    gsap.to(buttonContainerRef.current, {
      y: -10, // Controls how much the button moves up
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="main">
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-blue-50 cms-main-page">
            <img
              src={CompanyLogo}
              className="w-[200px] h-[80px] mt-28 ml-[120px] rounded-md"
            />
            <p
              ref={textRef}
              className="mt-[20px] text-4xl mt-5 ml-[30px] text-gray-800"
            >
              <div className="div font-semibold">Welcome To CMS Future</div>
              <div className="leader ml-[40px] font-semibold">
                Leaders Program
              </div>
            </p>

            <img
              src={CflLogo}
              className="w-[200px] h-[200px]  ml-[120px] rounded-md"
              style={{ marginTop: "-20px" }}
            />

            <div
              ref={buttonContainerRef} // Animation applies to this button container
              className="flex items-center space-x-2 p-2 bg-blue-900 text-white w-[160px] rounded-md ml-[140px] cursor-pointer hover:bg-green-800"
              style={{ marginTop: "-10px" }}
              onClick={handleStart}
            >
              <p className="ml-2 text-xl">Get Started</p>
              <IoPaperPlane
                className="text-2xl"
                style={{ marginTop: "-5px" }}
              />
            </div>
          </div>
          <div className="col-span-2">
            <img src={MainImage} className="h-screen w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
