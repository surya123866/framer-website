import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section
        className="flex justify-center items-center w-full h-96 lg:h-screen p-5 lg:p-10"
        id="Home"
      >
        <div className="flex lg:gap-10 ">
          <div className="w-full animate-floating top-44 left-[250px] lg:top-96 lg:left-[1100px] absolute">
            <img
              src="https://framerusercontent.com/images/fzeXJkxBIc747kIIbAww2FTbk.png"
              alt=""
              className="w-16 lg:w-32"
            />
          </div>
          <div className="w-full animate-floating top-5 left-22 lg:top-10 lg:left-84 absolute">
            <img
              src="https://framerusercontent.com/images/E2TV0iS7BwvUZzl8JAyQYSw7DD4.png"
              alt=""
              className="w-24 lg:w-44"
            />
          </div>
          <div className="w-full animate-floating left-14 lg:left-96 absolute">
            <img
              src="https://framerusercontent.com/images/zryge5Sij93RIbadZRaaXHodlg.png"
              alt=""
              className="w-20 lg:w-40"
            />
          </div>
        </div>
        <div className="absolute mt-10">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <p className="text-[#000000] text-[80px] lg:text-[268px] font-medium leading-[1]">
                Sarah <br />
                <span className="leading-[1] font-normal">Mitchell</span>
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center gap-4 bg-[#006cff] rounded-full p-4 w-60 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <polygon
                  points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"
                  fill="#ffffff"
                />
              </svg>

              <p className="text-[#ffffff] text-base font-semibold">
                check out my work
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col lg:flex-row justify-center items-center w-full p-5 gap-10 "
        id="AboutMe"
      >
        <div className="w-full lg:w-1/4 relative">
          <div className="lg:w-[380px] lg:h-[410px] w-[310px] h-[340px] rounded-3xl bg-[#e4e8ff] absolute top-10 left-0" />
          <img
            src="https://framerusercontent.com/images/mcS8HbfkOswpZVvZdgcSiPjGmKQ.jpg"
            className="lg:w-[350px] lg:h-[410px] w-[280px] h-[350px] rounded-3xl absolute top-0 left-0"
          />
          <div className="flex flex-col justify-center items-center lg:w-[170px] lg:h-[100px] w-[160px] h-[80px] rounded-xl bg-[#e4e8ff] absolute top-[300px] lg:top-[350px] font-poppins">
            <p className=" text-lg font-medium ">Sarah Mitchell</p>
            <p className="leading-[1]">Digital designer</p>
          </div>
        </div>

        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start gap-8">
          <h3 className="text-[#212425] text-xl lg:text-5xl  lg:text-left">
            I’m a <span className="text-[#006cff]">digital storyteller</span>. I
            believe that a well-designed website has the power to leave a
            lasting impression. With years of experience in the industry, I’ve
            had the privilege of working with diverse clients, helping them
            achieve their goals.
          </h3>
          <div className="flex justify-center lg:justify-start w-full lg:w-52">
            <div className="flex justify-center items-center gap-3 bg-[#AFBEFF] hover:bg-[#006cff] rounded-3xl lg:w-53 p-2 cursor-pointer w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
              </svg>
              <p className="text-lg text-center lg:text-left hover:text-[#ffffff]">
                Tell me more
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center w-full gap-7 p-10"
        id="Cases"
      >
        <div className="w-full">
          <h1 className="lg:text-[72px] font-semibold text-[#000000] text-4xl">
            I help brands to drive results
            <span className="text-[#006cff]">.</span>
          </h1>
        </div>
        <div className="flex flex-col  gap-10 w-full">
          <div className="flex flex-col  lg:flex-row gap-5 w-full">
            <div className="w-full lg:w-1/2 flex flex-col gap-7">
              <div className="hover:scale-95 transition-transform duration-300 ease-out">
                <img
                  src="https://framerusercontent.com/images/hgkedkVkKB4C6AJXYbXRwWHVvKk.png?scale-down-to=512"
                  className="w-full h-[450px]"
                />
              </div>
              <div>
                <p className="text-[#707070] text-lg">
                  marketing website redesign
                </p>
                <p className="text-[#006cff] text-5xl">Young brevers</p>
              </div>
              <p className="text-[#707070] text-lg">
                New branding and optimised SEO to bring their products to a
                wider target audience
              </p>
              <div className="flex justify-center items-center gap-4 bg-[#4C48FF] hover:bg-[#006cff] rounded-3xl w-36 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon
                    points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"
                    fill="#ffffff"
                  />
                </svg>
                <p className="text-lg text-[#ffffff]">View case</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-7">
              <div className="hover:scale-95 transition-transform duration-300 ease-out">
                <img
                  src="https://framerusercontent.com/images/NvwVqA2cc2VOr8ynoXO4JLQbgpM.png?scale-down-to=512"
                  className="h-[450px]"
                />
              </div>

              <div>
                <p className="text-[#707070] text-lg">
                  marketing website redesign
                </p>
                <p className="text-[#006cff] text-5xl">Doid</p>
              </div>
              <p className="text-[#707070] text-lg">
                New branding and optimised SEO to bring their products to a
                wider target audience
              </p>
              <div className="flex justify-center items-center gap-4 bg-[#4C48FF] hover:bg-[#006cff] rounded-3xl w-36 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon
                    points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"
                    fill="#ffffff"
                  />
                </svg>
                <p className="text-lg text-[#ffffff]">View case</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  lg:flex-row gap-5 w-full">
            <div className="w-full lg:w-1/2 flex flex-col gap-7">
              <div className="hover:scale-95 transition-transform duration-300 ease-out">
                <img
                  src="https://framerusercontent.com/images/p9GCIdND3wX9DEnEqfed3by4Rrc.png?scale-down-to=512"
                  className="w-full h-[450px]"
                />
              </div>
              <div>
                <p className="text-[#707070] text-lg">
                  marketing website redesign
                </p>
                <p className="text-[#006cff] text-5xl">Bird</p>
              </div>{" "}
              <p className="text-[#707070] text-lg">
                New branding and optimised SEO to bring their products to a
                wider target audience
              </p>
              <div className="flex justify-center items-center gap-4 bg-[#4C48FF] hover:bg-[#006cff] rounded-3xl w-36 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon
                    points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"
                    fill="#ffffff"
                  />
                </svg>{" "}
                <p className="text-lg text-[#ffffff]">View case</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-7">
              <div className="hover:scale-95 transition-transform duration-300 ease-out">
                <img
                  src="https://framerusercontent.com/images/wTyyIe6VkYknt5wcUfcrP3veI.png?scale-down-to=512"
                  className="w-full h-[450px]"
                />
              </div>
              <div>
                <p className="text-[#707070] text-lg">
                  marketing website redesign
                </p>
                <p className="text-[#006cff] text-5xl">Mansion</p>
              </div>
              <p className="text-[#707070] text-lg">
                New branding and optimised SEO to bring their products to a
                wider target audience
              </p>
              <div className="flex justify-center items-center gap-4 bg-[#4C48FF] hover:bg-[#006cff] rounded-3xl w-36 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon
                    points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"
                    fill="#ffffff"
                  />
                </svg>{" "}
                <p className="text-lg text-[#ffffff]">View case</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-20 m-14">
        <h1 className="text-[44px]">
          What do I prefer<span className="text-[#006cff]">?</span>
        </h1>
        <div className="flex gap-20 lg:flex-row w-full flex-col">
          <div className="w-full lg:w-1/3">
            <img
              src="	https://framerusercontent.com/images/RMfc5ukZ26kPzKxfW36D6npc.png"
              className="w-80 hover:scale-110 hover:rotate-12 transition-transform duration-500 ease-in-out"
            />
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-normal">Research</p>
              <p className="text-lg">
                Whether it's refining strategies, delving into emerging trends,
                or uncovering untapped opportunities, count on continuous
                research to keep your project ahead of the curve.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <img
              src="https://framerusercontent.com/images/G7Xf6kX4NvV4F6vxAIY79JkeJ4c.png"
              className="w-80 hover:scale-110 hover:rotate-12 transition-transform duration-500 ease-in-out"
            />
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-normal"> Storytelling</p>
              <p className="text-lg">
                Now, let’s ensure that its story continues to captivate and
                resonate. Whether it's tweaking the narrative, enhancing
                engagement, or weaving new chapters into your brand's tale, I
                will make sure your audience is captivated!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <img
              src="https://framerusercontent.com/images/bbr4GniPMvmXCYmeZ7netZsCxM.png"
              className="w-80 hover:scale-110 hover:rotate-12 transition-transform duration-500 ease-in-out"
            />
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-normal">Design</p>
              <p className="text-lg">
                From concept to creation, I immerse myself shaping aesthetics
                and functionality. Let's collaborate and explore designs that
                resonate, leaving a lasting visual impression.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full gap-8 p-10 lg:flex">
        <h1 className="text-5xl">
          Words from my clients<span className="text-[#006cff]">.</span>
        </h1>
        <div className="lg:flex-row flex flex-col justify-center w-full gap-5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col bg-[#006cff] w-[370px]  lg:w-[670px] text-xl rounded-3xl p-10 gap-8 text-[#ffff] hover:scale-95 transition-transform duration-300 ease-out">
              <div className="flex gap-4 items-center">
                <img
                  src="https://framerusercontent.com/images/Bbld8fk910CkDLFdnalL0hVwEyQ.png"
                  className="w-20"
                />
                <div>
                  <p>Viraj Koothrappali</p>
                  <p> Owner of VKE Company</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-lg">
                <p>Doubled brand visibility</p>
                <p>
                  Sarah is not just a designer; they’re a creative partner.
                  Their professionalism, promptness, and innovative ideas
                  elevated my project beyond expectations
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-[#AFBEFF] w-[370px]  lg:w-[670px] text-xl rounded-3xl p-10 gap-8 hover:scale-95 transition-transform duration-300 ease-out">
              <div className="flex gap-4 items-center">
                <img
                  src="https://framerusercontent.com/images/8RCURcX9o1dlvkMQxlL6l1te4.png"
                  className="w-20"
                />
                <div>
                  <p>Andrew Wazowski</p>
                  <p>CEO of Wazow Company</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 text-lg">
                <p>Boosted engagement by 300%</p>
                <p>
                  CEO of Wazow Company Boosted engagement by 300% Sarah is an
                  absolute gem! Their meticulous attention to detail and ability
                  to breathe life into designs is awe-inspiring. I’m forever
                  grateful for their work.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:mt-16">
            <div className="flex flex-col bg-[#006cff] w-[370px]  lg:w-[670px] text-xl rounded-3xl p-10 gap-8 text-[#ffff] hover:scale-95 transition-transform duration-300 ease-out">
              <div className="flex gap-4 items-center ">
                <img
                  src="https://framerusercontent.com/images/rSEvY5HrQ38VtSIACRUrWLm94o.png"
                  className="w-20 rounded-full"
                />
                <div>
                  <p>Alex Jay</p>
                  <p>CEO of DubEditZ Company</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 text-lg">
                <p>Tripled user interaction.</p>
                <p>
                  Sarah's design prowess is unmatched. They took my brand
                  identity and turned it into a captivating visual story.
                  Collaborating with them was pure joy!
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-[#E4E8FF] w-[370px]  lg:w-[670px] text-xl rounded-3xl p-10 gap-8 hover:scale-95 transition-transform duration-300 ease-ou">
              <div className="flex gap-4 items-center text-lg">
                <img
                  src="https://framerusercontent.com/images/IqR6lez7vmXSXnR1clyhtioBO0.jpg?scale-down-to=512"
                  className="w-20 rounded-full"
                />
                <div>
                  <p>Jhon Doe</p>
                  <p>CEO of DooIT Company</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 text-lg">
                <p>Achieved 200% more conversions.</p>
                <p>
                  Working with Sarah has been an absolute pleasure. Our
                  company's rebranding was a huge success, thanks to their
                  talent and dedication we managed to double our sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
