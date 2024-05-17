import Cards from "@/app/components/cards";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";

const Maison = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center gap-10 w-full p-20 pt-40">
        <div className="flex flex-col gap-6">
          <p className="text-[#333333] text-lg">Marketing website redesign</p>
          <h2 className="text-[#006cff] text-7xl">Maison</h2>

          <div class="overflow-hidden h-[600px] rounded-3xl">
            <img
              src="https://framerusercontent.com/images/wTyyIe6VkYknt5wcUfcrP3veI.png"
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
            Before embarking on the redesign of Maison, a website that helps
            users find and rent their ideal home, I conducted user research to
            understand the behaviors, needs, and frustrations of both the
            renters and the landlords. I used methods such as online surveys,
            phone interviews, user personas, and user journey maps to collect
            insights and frame the problem.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Storytelling</p>
          <p className="text-base text-[#333333]">
            Based on the research findings, I crafted a story that portrayed the
            main problem and the desired solution for the users. The story
            revolved around how Maison could help users search, compare, and
            book their perfect home in a fast and easy way. I used tools such as
            storyboards, user scenarios, and user flows to illustrate the story
            and the key features of the solution.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/35gjN38WoIjsh2UPSOfdj1Z3umQ.png" />
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Design</p>
          <p className="text-base text-[#333333]">
            Using the story as a blueprint, I designed low-fidelity wireframes
            and prototypes to test the usability and functionality of the
            website. I followed the principles of minimalism, elegance, and
            responsiveness to create a user interface that was simple to use and
            pleasing to the eye. I used tools such as Adobe XD, Figma, and
            InVision to create and iterate on the design.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Iteration</p>
          <p className="text-base text-[#333333]">
            I conducted several rounds of user testing and feedback sessions
            with potential and existing users of Maison. I used methods such as
            usability testing, expert review, and A/B testing to evaluate the
            design and measure its success. I gathered and analyzed the data and
            feedback to identify issues and areas for improvement. I then
            modified and enhanced the design based on the findings and
            recommendations.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/va7dCHVd8ghC8rjmX3MhW8I6cE.png" />
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Final product</p>
          <p className="text-base text-[#333333]">
            The final product of the website redesign was a user-friendly and
            beautiful website that met the needs and expectations of both the
            renters and the landlords. The website enabled users to easily
            search, compare, and book their ideal home, as well as to
            communicate and rate each other. The website also increased the
            trust and satisfaction of the users, as well as the income and
            growth of the business.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">What I learned</p>
          <p className="text-base text-[#333333]">
            Through this project, I learned a lot about the process and the
            skills of UX design. I learned how to conduct effective user
            research, how to create captivating stories and prototypes, how to
            test and iterate on the design, and how to deliver a high-quality
            product. I also learned how to collaborate and communicate with the
            stakeholders, the team, and the users. I enjoyed working on this
            project and I am satisfied with the outcome.
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

export default Maison;
