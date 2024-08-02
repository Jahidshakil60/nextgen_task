import React from "react";
import Button from "./shared/Button";
import SharedImage from "@/shared/SharedImage";

const cardData = [
  {
    month: "Oct",
    date: "12",
  },
  {
    month: "Sep",
    date: "23",
  },
  {
    month: "Aug",
    date: "23",
  },
];

function Section9() {
  return (
    <section className="g__container py-14">
      <h2 className=" text-center mb-6">
        H2 TITLE ONE LINER
      </h2>
      <div className="grid grid-cols-5 gap-x-8 mt-6">
        <div className="col-span-2">
          <SharedImage
            src="/landingPage/hero.png"
            className="w-full h-[400px] object-fill rounded-t-lg"
          />
          <div className="bg-[#003FA9] relative text-white rounded-b-lg -mt-20">
            <div className="h-full w-24  bg-[#003080] absolute rounded-l-lg flex items-center justify-center mr-4">
              <div className="text-center">
                <p className="text-lg font-light">Oct</p>
                <p className="text-xl font-bold">31</p>
              </div>
            </div>
            <div className="p-4 ml-24">
              <h3 className="text-[23px] font-[700]">LOREM IPSUM US</h3>
              <p>Oct 31, 2024</p>
            </div>
          </div>
        </div>

        <div className=" col-span-3 space-y-7">
          {cardData.map((data, i) => {
            return (
              <div className=" flex gap-4 pb-8 border-b-2" key={i}>
                <div className=" px-6 py-2.5 bg-[#003080] text-white rounded-lg  text-center">
                  <p className="text-lg font-light ">{data.month}</p>
                  <p className="text-xl font-bold">{data.date}</p>
                </div>

                <div>
                  <h3 className="text-[22px] font-bold pb-1">
                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR
                  </h3>
                  <p className="text-[15px] text-[#21252960]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras interdum augue sed tellus accumsan, nec congue quam
                    lacinia.
                  </p>
                </div>
              </div>
            );
          })}

          <Button data="View All Notice & Events" position={true} />
        </div>
      </div>
    </section>
  );
}

export default Section9;
