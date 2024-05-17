import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cards from "../components/cards";


const Cases = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <Cards />
      </div>
      <Footer />
    </>
  );
};

export default Cases;
