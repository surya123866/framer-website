"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import Footer from "../components/footer";
import Accordion from "../components/accordion";

const About = () => {
  const accordionData = [
    {
      title: "Research",
      content:
        "Whether it's refining strategies, delving into emerging trends, or uncovering untapped opportunities, count on continuous research to keep your project ahead of the curve.",
      tags: [
        "Customer Survey",
        "User interview",
        "User persona",
        "User journey map",
        "Problem statement",
      ],
    },
    {
      title: "Storytelling",
      content:
        "I will create a story that showed how the users would benefit from the solution and what features they would use.",
      tags: [
        "Storyboard",
        "User scenario",
        "User flow",
        "Value proposition",
        "Feature list",
      ],
    },
    {
      title: "Design",
      content:
        "I will design low-fidelity wireframes and prototypes to test the usability and functionality of the solution.",
      tags: [
        "Wireframe",
        "Prototype",
        "Usability testing",
        "Feedback",
        "Iteration",
      ],
      bg: "#AFBEFF",
      text: "#212425",
    },
  ];

  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col lg:flex-row justify-center lg:flex-1 flex-nowrap overflow-hidden relative p-5 lg:p-20 gap-0 lg:gap-10"
        id="AboutMe"
      >
        <div className="w-[411px] h-[478px] relative mt-32">
          <div className="lg:w-[377px] lg:h-[448px] w-[255px] h-[330px] rounded-3xl rounded-br-[64px] bg-[#e4e8ff] absolute top-10 left-10" />
          <img
            src="https://framerusercontent.com/images/mcS8HbfkOswpZVvZdgcSiPjGmKQ.jpg"
            className="ml-3 lg:ml-0 lg:w-[367px] lg:h-[434px] w-[265px] h-[340px] rounded-3xl absolute top-0 left-0"
          />
          <div className="flex flex-col justify-center items-center lg:w-[193px] lg:h-[100px] w-[160px] h-[75px] rounded-3xl bg-[#e4e8ff] absolute bottom-[108px] lg:-bottom-2">
            <p className=" text-lg font-medium ">Sarah Mitchell</p>
            <p>Digital designer</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col flex-nowrap justify-center items-center lg:items-start relative gap-8">
          <h3 className="text-[#212425] text-5xl">
            If you’re gonna do it,
            <br />
            <span className="text-[#006cff]">let’s do it right!</span>
          </h3>
          <h3 className="text-[#212425] text-xl lg:text-3xl lg:text-left font-thin">
            I’m a{" "}
            <span className="text-[#212425] font-bold">
              digital storyteller.
            </span>
            I believe that a well designed website has the power to leave a
            lasting impression. With years of experience in the industry, I’ve
            had the privilege of working with diverse clients, helping them
            achieve their goals.
          </h3>
          <div className="w-full">
            <div className="flex items-center gap-3 w-full">
              <svg
                class="svg-icon"
                style={{
                  w: "1em",
                  height: "1em",
                  verticalAlign: "middle",
                  fill: "currentcolor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 955.733A443.733 443.733 0 1 1 955.733 512 443.733 443.733 0 0 1 512 955.733z" />
                <path d="M753.323 318.805L439.637 632.491l-168.96-168.619A34.133 34.133 0 1 0 222.208 512l193.195 193.195a34.133 34.133 0 0 0 48.128 0l337.92-337.92a34.133 34.133 0 1 0-48.128-48.128z" />
              </svg>
              <p className="text-lg text-center">
                Fully responsive & user-friendly websites
              </p>
            </div>{" "}
            <div className="flex items-center gap-3 w-full">
              <svg
                class="svg-icon"
                style={{
                  w: "1em",
                  height: "1em",
                  verticalAlign: "middle",
                  fill: "currentcolor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 955.733A443.733 443.733 0 1 1 955.733 512 443.733 443.733 0 0 1 512 955.733z" />
                <path d="M753.323 318.805L439.637 632.491l-168.96-168.619A34.133 34.133 0 1 0 222.208 512l193.195 193.195a34.133 34.133 0 0 0 48.128 0l337.92-337.92a34.133 34.133 0 1 0-48.128-48.128z" />
              </svg>
              <p className="text-lg text-center">Immersive experiences</p>
            </div>{" "}
            <div className="flex items-center gap-3 w-full">
              <svg
                class="svg-icon"
                style={{
                  w: "1em",
                  height: "1em",
                  verticalAlign: "middle",
                  fill: "currentcolor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 955.733A443.733 443.733 0 1 1 955.733 512 443.733 443.733 0 0 1 512 955.733z" />
                <path d="M753.323 318.805L439.637 632.491l-168.96-168.619A34.133 34.133 0 1 0 222.208 512l193.195 193.195a34.133 34.133 0 0 0 48.128 0l337.92-337.92a34.133 34.133 0 1 0-48.128-48.128z" />
              </svg>
              <p className="text-lg text-center">B2B & B2C expertise</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center p-10 w-full">
        <div className="p-20">
          <h2 className="text-6xl font-bold">
            “I specialize in turning ideas into
            <span className="text-[#006cff]">
              immersive digital experiences,
            </span>
            blending creativity and technology to bring concepts to life.”
          </h2>
        </div>
      </section>
      <section className="flex flex-col gap-5 p-20">
        <h4 className="text-5xl text-[#212425]">The Process</h4>{" "}
        {accordionData.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            content={accordion.content}
            tags={accordion?.tags}
            bg={accordion?.bg}
            text={accordion?.text}
          />
        ))}
      </section>
      <Cards />
      <Footer />
    </>
  );
};

export default About;
