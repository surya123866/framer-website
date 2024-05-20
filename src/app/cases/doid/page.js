import Cards from "@/app/components/cards";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";

const Doid = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center gap-10 w-full p-8 lg:p-20 pt-40">
        <div className="flex flex-col gap-3 lg:gap-6">
          <p className="text-[#333333] text-xs lg:text-lg">
            Marketing website redesign
          </p>
          <h2 className="text-[#006cff] text-3xl lg:text-7xl">Doid</h2>

          <div class="overflow-hidden lg:h-[600px] rounded-3xl">
            <img
              src="https://framerusercontent.com/images/NvwVqA2cc2VOr8ynoXO4JLQbgpM.png"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-base lg:text-3xl text-[#333333] font-bold">
          New branding and optimised SEO to bring <br /> their products to a
          wider target audience.
        </p>

        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-[#006cff] text-lg">Research</p>
          <p className="text-base lg:text-lg text-[#333333]">
            Before starting the redesign of Doid, a website that connects people
            who need help with household tasks with local service providers, I
            conducted user research to understand the needs, pain points, and
            goals of both the customers and the providers. I used methods such
            as surveys, interviews, personas, and journey maps to gather
            insights and identify opportunities for improvement.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-[#006cff] text-lg">Storytelling</p>
          <p className="text-base lg:text-lg text-[#333333]">
            Based on the research findings, I created a story that illustrated
            the main problem and the desired outcome for the users. The story
            focused on how Doid could help users find, book, and pay for
            reliable and quality services in a convenient and secure way. I used
            storyboards, scenarios, and user flows to communicate the story and
            the key features of the solution.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/vi5liDm0LEMLAWyiLfeDM71bOY.png" />
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-[#006cff] text-lg">Design</p>
          <p className="text-base lg:text-lg text-[#333333]">
            Using the story as a guide, I designed low-fidelity wireframes and
            prototypes to test the usability and functionality of the website. I
            followed the principles of simplicity, clarity, and consistency to
            create an intuitive and engaging user interface. I used tools such
            as Sketch, Figma, and InVision to create and iterate on the design.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-[#006cff] text-lg">Iteration</p>
          <p className="text-base lg:text-lg text-[#333333]">
            I conducted several rounds of user testing and feedback sessions
            with potential and existing users of Doid. I used methods such as
            usability testing, heuristic evaluation, and A/B testing to evaluate
            the design and measure its performance. I collected and analyzed the
            data and feedback to identify issues and areas for improvement. I
            then refined and improved the design based on the findings and
            recommendations.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/4rpNk2EkdNzEhgTqekvjWE8w3Xs.png" />
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-[#006cff] text-lg">Final product</p>
          <p className="text-base lg:text-lg text-[#333333]">
            The final product of the website redesign was a responsive and
            user-friendly website that met the needs and expectations of both
            the customers and the providers. The website enabled users to easily
            find, book, and pay for services, as well as to communicate and rate
            each other. The website also increased the trust and satisfaction of
            the users, as well as the conversion and retention rates of the
            business.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-[#006cff] text-lg">What I learned</p>
          <p className="text-base lg:text-lg text-[#333333]">
            Through this project, I learned a lot about the process and the
            skills of UX design. I learned how to conduct effective user
            research, how to create compelling stories and prototypes, how to
            test and iterate on the design, and how to deliver a high-quality
            product. I also learned how to collaborate and communicate with the
            stakeholders, the team, and the users. I enjoyed working on this
            project and I am proud of the outcome.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-[#006cff] p-4 lg:p-8 rounded-3xl">
          <h1 className="text-[#F4F4F4] font-bold text-[23px] lg:text-[40px]">
            Words from the client.
          </h1>
          <p className="text-[#F4F4F4] font-extralight text-lg text-[40px] leading-0">
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

export default Doid;
