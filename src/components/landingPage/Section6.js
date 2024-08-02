import React from "react";
import SectionHead from "./shared/SectionHead";
import Button from "./shared/Button";
import SharedImage from "@/shared/SharedImage";

const cardData = [
  {
    title: "title h4",
    category: "Explore products",
    icon: "/landingPage/book.svg",
  },
  {
    title: "title h4",
    category: "Explore cool products",
    icon: "/landingPage/gun.svg",
  },
  {
    title: "title h4",
    category: "Explore products",
    icon: "/landingPage/web.svg",
  },
  {
    title: "title h4",
    category: "Explore Customers",
    icon: "/landingPage/person.svg",
  },
];

function Section6() {
  return (
    <section className="g__container py-14 ">
      <SectionHead />

      <div className="mt-14">
        {cardData.map((data, i) => {
          return (
            <div
              key={i}
              className={`${
                i % 2 !== 0 ? "flex-row-reverse" : ""
              } flex gap-32 mb-20`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <SharedImage src={data.icon} height={20} width={20} />
                  <h4 className="text-[27px] font-bold">{data.title}</h4>
                </div>
                <p className="g__light-text pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum augue sed tellus accumsan, nec congue quam lacinia.
                  Duis ornare congue ante a facilisis. Vestibulum sed magna in
                  ligula aliquam luctus non in ante. Nullam egestas, nunc at
                  rutrum tincidunt, purus metus malesuada ante, at cursus massa
                  turpis sit amet{" "}
                </p>
              </div>
              <div className="flex-1 relative">
                <SharedImage
                  src="/landingPage/hero.png"
                  alt="Shop Interior"
                  height={450}
                  width={620}
                  className="rounded-lg"
                />
                <div
                  className={` ${
                    i % 2 !== 0
                      ? "right-0 translate-x-[50%]"
                      : "left-0 translate-x-[-50%]"
                  } group absolute bottom-10 cursor-pointer hover:bg-[#FFE600] h-[160px] w-[160px] bg-[#003080] rounded-full text-white flex items-center justify-center px-4 text-center`}
                >
                  <span className=" group-hover:hidden">{data.category}</span>
                  <span className="hidden group-hover:block text-black text-[28px] ">
                    {" "}
                    ↗
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button data=" Learn More " />
    </section>
  );
}

export default Section6;
