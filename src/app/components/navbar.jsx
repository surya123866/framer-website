"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuScrollToSection = (id) => {
    setMobileMenu(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed flex flex-col justify-center items-center w-full mb-20 z-50 mt-8">
      <div className="flex justify-around items-center lg:bg-gradient-to-b bg-[#FBF4EC] from-[#FBF4EC] to-transparent rounded-3xl p-5 mx-auto w-3/4">
        <nav className="flex justify-between w-full">
          <div className="flex items-center text-2xl text-[#212425] font-bold">
            LOGO
          </div>
          <div className="hidden lg:flex gap-20 text-xl text-[#212425] font-normal">
            <p onClick={() => scrollToSection("Home")}>Home</p>
            <p onClick={() => scrollToSection("AboutMe")}>About me</p>
            <p onClick={() => scrollToSection("Cases")}>Cases</p>
          </div>
          <div className="hidden lg:flex items-center">
            <a href="mailto:your-email@example.com">
              <button className="flex items-center gap-4 text-xl text-[#212425] font-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                </svg>
                Let's connect
              </button>
            </a>
          </div>
          <div className="relative lg:hidden">
            {mobileMenu ? (
              // Close button when mobileMenu is true
              <div
                className="flex flex-col gap-1 items-center justify-center w-5"
                onClick={() => setMobileMenu(false)}
              >
                <h1 className="text-4xl">x</h1>
              </div>
            ) : (
              // Mobile menu toggle button when mobileMenu is false
              <div
                className="flex flex-col gap-1 items-center justify-center w-5"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <span className="h-1 w-6 bg-[#000000]"></span>
                <span className="h-1 w-6 bg-[#000000]"></span>
              </div>
            )}
          </div>
        </nav>
      </div>
      {/* Mobile menu outside of the container */}
      {mobileMenu && (
        <div className="flex relative flex-col justify-between bg-white w-full h-screen space-y-4">
          <div className=" w-full top-0 left-0 right-0 z-50 flex flex-col items-start justify-start">
            <div className="flex justify-between items-center w-full p-5">
              <button className="px-4 py-2 rounded-2xl text-2xl font-semibold text-[#000000]">
                Home
              </button>
              <div className="w-16 h-16">
                <div
                  className="flex justify-center items-center rounded-full bg-[#006cff] w-full h-full"
                  onClick={() => mobileMenuScrollToSection("Home")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    transform="rotate(45)"
                  >
                    <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full p-5">
              <button className="px-4 py-2 rounded-2xl text-2xl font-semibold text-[#000000]">
                About me
              </button>
              <div className="w-16 h-16">
                <div
                  className="flex justify-center items-center rounded-full bg-[#006cff] w-full h-full"
                  onClick={() => mobileMenuScrollToSection("AboutMe")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    transform="rotate(45)"
                  >
                    <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full p-5">
              <button className="px-4 py-2 rounded-2xl text-2xl font-semibold text-[#000000]">
                Cases
              </button>
              <div
                className="w-16 h-16"
                onClick={() => mobileMenuScrollToSection("Cases")}
              >
                <div className="flex justify-center items-center rounded-full bg-[#006cff] w-full h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    transform="rotate(45)"
                  >
                    <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 w-full p-10">
              <a href="mailto:your-email@example.com">
                <div className="flex justify-center items-center gap-4 bg-[#006cff] p-3 rounded-full  w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    transform="rotate(45)"
                  >
                    <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                  </svg>
                  <button className="text-[#ffffff] text-lg font-normal">
                    Let's connect
                  </button>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center gap-2 bg-[#006cff] p-3 rounded-full  w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="28px"
                    height="30px"
                    fill="#ffffff"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                  </svg>
                  <button className="text-[#ffffff] text-lg font-normal">
                    Linkedin
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
