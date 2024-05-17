import Cards from "@/app/components/cards";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";

const Birds = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center gap-10 w-full p-20 pt-40">
        <div className="flex flex-col gap-6">
          <p className="text-[#333333] text-lg">Marketing website redesign</p>
          <h2 className="text-[#006cff] text-7xl">Birds</h2>

          <div class="overflow-hidden h-[600px] rounded-3xl">
            <img
              src="https://framerusercontent.com/images/p9GCIdND3wX9DEnEqfed3by4Rrc.png"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-3xl text-[#333333] font-bold">
          New branding and optimised SEO to bring <br /> their products to a
          wider target audience.
        </p>

        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Research</p>
          <p className="text-base text-[#333333]">
            To kick off the redesign of Birds, a website that allows users to
            discover and book local birdwatching tours, I conducted user
            research to understand the motivations, preferences, and challenges
            of both the travelers and the guides. I used methods such as online
            surveys, phone interviews, user personas, and user journey maps to
            collect insights and define the problem space.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Storytelling</p>
          <p className="text-base text-[#333333]">
            Based on the research findings, I crafted a story that depicted the
            main problem and the desired solution for the users. The story
            centered on how Birds could help users explore, compare, and reserve
            the best birdwatching tours in their area or destination. I used
            tools such as storyboards, user scenarios, and user flows to convey
            the story and the key features of the solution.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/LpO87M6PDYo84kXtgxjY59yhwU.png" />
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Design</p>
          <p className="text-base text-[#333333]">
            Using the story as a framework, I designed low-fidelity wireframes
            and prototypes to test the usability and functionality of the
            website. I followed the principles of accessibility, aesthetics, and
            responsiveness to create a user interface that was easy to use and
            appealing to the eye. I used tools such as Adobe XD, Figma, and
            InVision to create and iterate on the design.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Iteration</p>
          <p className="text-base text-[#333333]">
            I conducted several rounds of user testing and feedback sessions
            with potential and existing users of Birds. I used methods such as
            usability testing, expert review, and A/B testing to evaluate the
            design and measure its effectiveness. I gathered and analyzed the
            data and feedback to identify issues and areas for improvement. I
            then revised and enhanced the design based on the findings and
            suggestions.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/2SbowOhqx5DJSTeDMv7pMfBGqc.png" />
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Final product</p>
          <p className="text-base text-[#333333]">
            The final product of the website redesign was a user-friendly and
            attractive website that met the needs and expectations of both the
            travelers and the guides. The website enabled users to easily
            explore, compare, and book birdwatching tours, as well as to
            communicate and review each other. The website also increased the
            trust and loyalty of the users, as well as the revenue and growth of
            the business.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">What I learned</p>
          <p className="text-base text-[#333333]">
            Through this project, I learned a lot about the process and the
            skills of UX design. I learned how to conduct effective user
            research, how to create engaging stories and prototypes, how to test
            and iterate on the design, and how to deliver a high-quality
            product. I also learned how to collaborate and communicate with the
            stakeholders, the team, and the users. I enjoyed working on this
            project and I am happy with the outcome.
          </p>
        </div>
        <div className="bg-[#006cff] p-8 rounded-3xl">
          <h1 className="text-[#F4F4F4] font-bold text-[40px]">
            Words from the client.
          </h1>
          <p className="text-[#F4F4F4] font-extralight text-[40px]">
            “Working with Sarah has been an absolute pleasure. Our company's
            rebranding was a huge success, thanks to their talent and dedication
            we managed to double our sales.”
          </p>
        </div>
      </section>
      <Cards />
      <Footer />
    </>
  );
};

export default Birds;
