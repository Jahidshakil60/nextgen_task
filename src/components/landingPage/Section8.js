import SharedImage from "@/shared/SharedImage";
import Image from "next/image";
import React from "react";
import Button from "./shared/Button";

const data = [
  {
    date: "January 05, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur",
    src: "/landingPage/hero.png",
  },
  {
    date: "January 04, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur",
    src: "/landingPage/hero.png",
  },
  {
    date: "January 03, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur",
    src: "/landingPage/hero.png",
  },
];

function Section8() {
  return (
    <div className="g__container py-14">
      <div className="mb-14">
        <h2 className="text-center mb-6">H2 TITLE ONE LINER</h2>
        <div className="flex gap-10">
          {/* Main Notice */}
          <div className=" max-w-[630px]">
            <div className="relative h-[315px] w-full rounded-lg overflow-hidden">
              <SharedImage src={"/landingPage/hero.png"} alt="this is image" />
            </div>
            <div className="mt-4">
              <p className="text-gray-500">January 06, 2024</p>
              <h3 className="text-xl font-bold my-2">
                Lorem ipsum dolor sit amet, consectetur
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum augue sed tellus accumsan, nec congue quam lacinia.
                Duis ornare congue ante a facilisis. Vestibulum sed magna in
                ligula aliquam luctus non in ante. Nullam egestas, nunc.
              </p>
            </div>
          </div>

          {/* Small Notices */}
          <div className=" flex flex-col space-y-6">
            {data.map((notice, index) => (
              <div key={index} className=" flex space-x-4">
                <div className="relative w-[280px] h-[140px] rounded-lg overflow-hidden">
                  <SharedImage src={notice.src} alt={`Notice ${index + 1}`} />
                </div>
                <div>
                  <p className="text-gray-500">{notice.date}</p>
                  <h4 className="text-sm font-semibold">{notice.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button data="View all Notice & Events" />
    </div>
  );
}

export default Section8;
