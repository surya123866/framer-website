import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full p-5 lg:p-10">
      <div className="flex flex-col lg:flex-row justify-center items-center bg-[#006cff] w-full lg:w-[90%] lg:h-[700px] rounded-3xl p-5 lg:p-14 gap-12">
        <div className="p-10 text-[#ffffff] flex flex-col gap-8 w-full lg:w-1/4 text-[28px]">
          <p>Home</p>
          <p>About me</p>
          <p>Cases</p>
          <p>Licences</p>
          <p>404</p>
        </div>
        <div className="flex flex-col  gap-10 text-[#ffff]">
          <p className="text-[32px] lg:text-[72px] font-semibold">
            Let’s get in touch!
          </p>
          <div>
            <p className="text-[20px] lg:text-[28px]">
              Already have a design in mind? <br />
              Or want me to take care of everything? <br />
              Let’s chat and find out what’s best for you!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <a href="mailto:your-email@example.com">
              <div className="flex justify-center items-center gap-4 bg-[#f4f4f4] p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                </svg>
                <button className="text-[#212425] text-lg font-normal">
                  Let's connect
                </button>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center gap-2 bg-[#f4f4f4] p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="28px"
                  height="30px"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                </svg>
                <button className="text-[#212425] text-lg font-normal">
                  Linkedin
                </button>
              </div>
            </a>
          </div>
          <p className="text-lg font-semibold">Built by Surya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
