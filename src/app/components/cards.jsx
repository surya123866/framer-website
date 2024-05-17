import Link from "next/link";
import React from "react";

const CaseCard = ({ href, imageSrc, title, description }) => (
  <article className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-7">
    <Link href={href}>
      <div className="hover:scale-95 transition-transform duration-300 ease-out">
        <img src={imageSrc} className="w-full lg:h-[450px]" alt={title} />
      </div>
      <div>
        <p className="text-[#707070] text-base lg:text-lg">
          marketing website redesign
        </p>
        <p className="text-[#006cff] text-3xl lg:text-5xl">{title}</p>
      </div>
      <p className="text-[#707070] text-base lg:text-lg">{description}</p>
      <div className="flex justify-center items-center gap-2 bg-[#4C48FF] hover:bg-[#006cff] rounded-3xl lg:w-40 p-2">
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
    </Link>
  </article>
);

const Cards = () => {
  return (
    <section
      className="flex flex-col  w-full gap-4 lg:gap-7 p-5 lg:p-20"
      id="Cases"
    >
      <h1 className="lg:text-[40px] font-medium text-[#212425] text-2xl lg:text-4xl">
        Some solutions that I created
        <span className="text-[#006cff]">.</span>
      </h1>

      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <CaseCard
            href="../cases/young-brevers"
            imageSrc="https://framerusercontent.com/images/hgkedkVkKB4C6AJXYbXRwWHVvKk.png?scale-down-to=512"
            title="Young brevers"
            description="New branding and optimized SEO to bring their products to a wider target audience"
          />
          <CaseCard
            href="../cases/doid"
            imageSrc="https://framerusercontent.com/images/NvwVqA2cc2VOr8ynoXO4JLQbgpM.png?scale-down-to=512"
            title="Doid"
            description="New branding and optimized SEO to bring their products to a wider target audience"
          />
        </div>
        {/* <div className="flex flex-col lg:flex-row gap-5 w-full">
          <CaseCard
            href="../cases/birds"
            imageSrc="https://framerusercontent.com/images/p9GCIdND3wX9DEnEqfed3by4Rrc.png?scale-down-to=512"
            title="Bird"
            description="New branding and optimized SEO to bring their products to a wider target audience"
          />
          <CaseCard
            href="../cases/mansion"
            imageSrc="https://framerusercontent.com/images/wTyyIe6VkYknt5wcUfcrP3veI.png?scale-down-to=512"
            title="Mansion"
            description="New branding and optimized SEO to bring their products to a wider target audience"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Cards;
