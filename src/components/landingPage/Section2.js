import Image from "next/image";
import React from "react";
import Button from "./shared/Button";
import SharedImage from "@/shared/SharedImage";


function Section2() {
	
	return (
        <div className="g__container bg-white relative flex justify-end py-16">
        <div className=" h-auto">    
       <SharedImage src="/landingPage/hero.png" alt="Shop Interior"  height={678} width={949} className="rounded-lg"  />
        </div>
        <div className=" absolute left-0 top-[50%] translate-y-[-50%] bg-white max-w-[650px] p-20 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">About The Quick Shop</h2>
          <p className="g__light-text mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet.
          </p>
          <Button data="  Learn More About Shop " position={true} />
        </div>
      </div>
	);
}

export default Section2;