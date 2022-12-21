import React from "react";
import Hero from "./Hero";
import Patners from "./Patners";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <section className="bg-gray-800">
        <Hero></Hero>
        <Patners></Patners>
        <Services></Services>
      </section>
    </>
  );
};

export default Home;
