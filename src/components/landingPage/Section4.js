
import SharedImage from "@/shared/SharedImage";
import React from "react";

function Section4() {
  return (
    <section className="g__container bg-white flex py-44">
      <div className=" h-auto relative">
        <SharedImage
          src="/landingPage/hero.png"
          alt="Shop Interior"
          height={860}
          width={1300}
          className="rounded-lg"
        />
        <div className=" absolute right-10 top-[-100px] bg-white max-w-[600px] p-14 rounded-lg border-[1px] ">
          <h2 className="text-2xl font-bold mb-4">
            Title of the section text h2
          </h2>
          <p className="g__light-text mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet.
          </p>
          <a
            href="#"
            className="inline-block  border-2 border-[#003080] text-[#003080] hover:bg-[#003080] hover:text-white py-2 px-4 rounded-lg"
          >
            Learn More
          </a>
        </div>
        <div className=" absolute left-10 bottom-[-100px] bg-white max-w-[600px] p-14 rounded-lg border-[1px] ">
          <h2 className="text-2xl font-bold mb-4">One liner title h2</h2>
          <p className="g__light-text mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet.
          </p>
          <a
            href="#"
            className="inline-block  border-2 border-[#003080] text-[#003080] hover:bg-[#003080] hover:text-white py-2 px-4 rounded-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section4;
