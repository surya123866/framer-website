import Cards from "@/app/components/cards";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";

const YoungBrewers = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center gap-10 w-full p-20 pt-40">
        <div className="flex flex-col gap-6">
          <p className="text-[#333333] text-lg">Marketing website redesign</p>
          <h2 className="text-[#006cff] text-7xl">Young brewers</h2>

          <div class="overflow-hidden h-[600px] rounded-3xl">
            <img
              src="https://framerusercontent.com/images/hgkedkVkKB4C6AJXYbXRwWHVvKk.png"
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
            The goal of this project was to redesign the website of a local
            bookstore, Bookworms, to improve its online presence and increase
            its sales. I conducted user research to understand the needs,
            preferences, and pain points of the bookstore’s customers and
            potential customers. I used methods such as surveys, interviews,
            personas, and user journeys to gather insights and identify
            opportunities for improvement.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Storytelling</p>
          <p className="text-base text-[#333333]">
            Based on the research findings, I created a storyboard to illustrate
            the current and desired user experience of browsing and buying books
            from Bookworms. The storyboard showed how the website redesign could
            address the main problems and frustrations of the users, such as
            lack of information, poor navigation, slow loading, and low trust.
            The storyboard also highlighted the benefits and value propositions
            of the new website, such as personalized recommendations, easy
            search, fast checkout, and secure payment.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/iOBzCh281caYC6yhtfiTnrU.png" />
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Design</p>
          <p className="text-base text-[#333333]">
            I followed a user-centered design process to create the wireframes,
            mockups, and prototypes of the new website. I used tools such as
            Figma, Adobe XD, and InVision to design the interface and
            interactions. I applied the principles of visual hierarchy,
            contrast, alignment, and consistency to ensure a clear, intuitive,
            and attractive design. I also considered the accessibility,
            usability, and responsiveness of the website for different devices
            and screen sizes.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Iteration</p>
          <p className="text-base text-[#333333]">
            I tested the prototypes with real users to evaluate the design and
            collect feedback. I used methods such as usability testing,
            heuristic evaluation, and A/B testing to measure the effectiveness,
            efficiency, and satisfaction of the users. I analyzed the data and
            identified the strengths and weaknesses of the design. I iterated on
            the design based on the feedback and suggestions from the users and
            stakeholders. I refined the details and improved the functionality
            and aesthetics of the website.
          </p>
        </div>
        <img src="https://framerusercontent.com/images/Jz4zSGKf0XLbgSwNdaglqS1IE.png" />
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">Final product</p>
          <p className="text-base text-[#333333]">
            The final product was a redesigned website that met the expectations
            and goals of both the users and the bookstore. The website offered a
            better user experience and a more appealing visual design. The
            website also increased the conversion rate and the revenue of the
            bookstore. The website received positive feedback and reviews from
            the users and the bookstore owners.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[#006cff] text-lg">What I learned</p>
          <p className="text-base text-[#333333]">
            This project was a valuable learning experience for me as a UX
            designer. I learned how to apply the user research and design
            methods in a real-world context. I learned how to communicate and
            collaborate with the users and the stakeholders. I learned how to
            test and iterate on the design based on the data and feedback. I
            learned how to deliver a high-quality product that solved a real
            problem and created value for the users and the business.
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

export default YoungBrewers;
