import React from "react";


function Section5() {
	
	return (
		<section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{backgroundImage: "url('/landingPage/hero.png')" }}>
        <div className="absolute inset-0 bg-[#003080] opacity-85"></div>
        <div className="g__container flex flex-col items-center relative text-center ">
        <h2 className=" text-[#FFE600] mt-4 mb-5">Title line h2</h2>
            <div className="h-[90px] w-[90px] bg-white rounded-full"></div>
           <h3 className="text-2xl text-white mt-3 mb-5"> H3 Title</h3>
          <p className="text-lg mb-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,</p>
          <a href="#" className=" text-white font-bold ">Read More →</a>
        </div>
      </section>
	);
}

export default Section5;