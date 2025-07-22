import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="font-figtree flex justify-center text-white">
        <article className="w-1/2 flex flex-col justify-center items-center gap-4 md:text-[64px] font-bold">
          {" "}
          <h1>Hello. </h1> <h2 className="font-normal">I'm Vibin</h2>
          <h2 className="font-playfair">Web Developer</h2>
        </article>
        <article className="w-1/2"></article>
      </section>
    </>
  );
};

export default HeroSection;
