import React, { useState, useRef } from "react";

const Accordion = ({ title, content, tags, bg, text }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="flex flex-col justify-center  w-full bg-[#006cff] rounded-3xl p-8"
      style={{ background: bg }}
    >
      <button
        className="flex justify-between items-center   w-full text-white text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span
          className="text-white text-3xl float-left"
          style={{ color: text }}
        >
          {title}
        </span>
        <span
          className={`text-white text-6xl float-right  ${
            isActive
              ? "transform rotate-45 transition-all duration-300"
              : "transform rotate-0 transition-all duration-300"
          }`}
          style={{ color: text }}
        >
          <svg
            className="svg-icon"
            style={{
              width: "1em",
              height: "1em",
              verticalAlign: "middle",
              fill: "currentcolor",
              overflow: "hidden",
            }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M554.76 549.889v341c0 26.51-21.491 48-48 48-26.51 0-48-21.49-48-48v-341H114.172c-26.51 0-48-21.49-48-48s21.49-48 48-48H458.76v-340c0-26.51 21.49-48 48-48s48 21.49 48 48v340h346.414c26.51 0 48 21.49 48 48s-21.49 48-48 48H554.76z" />
          </svg>
        </span>
      </button>
      <div
        className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-screen" : "max-h-0"
        }`}
        ref={contentRef}
        style={{
          maxHeight: isActive ? contentRef.current.scrollHeight + "px" : 0,
        }}
      >
        <div className="text-white text-xl" style={{ color: text }}>
          {content}
        </div>
        <div className="flex gap-4">
          {tags &&
            tags.map((tag, index) => (
              <div
                key={index}
                className="p-2 pl-5 pr-5 rounded-full border-[1px] w-auto"
                style={{ borderColor: text }}
              >
                <p className="text-white text-lg" style={{ color: text }}>
                  {tag}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
