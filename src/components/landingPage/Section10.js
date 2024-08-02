import React from "react";
import SectionHead from "./shared/SectionHead";
import Button from "./shared/Button";

function Section10() {
  return (
    <section className="g__container py-14">

        <SectionHead />
        <div className="relative mb-10">
          <div className="grid grid-cols-4 gap-x-8 staggered-grid mt-20">
            {[...Array(12)].map((data, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    i % 2 !== 0 ? "mt-8" : "-mt-8"
                  } bg-[#a0a0a0] h-[422px] rounded-lg`}
                ></div>
              );
            })}
          </div>
          <div className="w-full h-32 bg-gradient-to-t from-[#fff]  to-transparent absolute bottom-0 "></div>
        </div>
        <Button data="Learn more" />
    
    </section>
  );
}

export default Section10;
