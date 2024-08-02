import React from "react";

function Button({data, position}) {
  return (
    <div className= {`flex ${position? "justify-start" : "justify-center"} relative text-center`} >
      <a
        href="#"
        className=" text-[#003080] border-[#003080] hover:bg-[#003080] hover:text-white border-[1px] font-bold px-10 py-2.5"
      >
        {data}
      </a>
    </div>
  );
}

export default Button;
