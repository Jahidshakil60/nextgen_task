import SharedImage from "@/shared/SharedImage";
import React from "react";

function Footer() {
  return (
    <div>
      <div className=" bg-[#003080] text-white py-14">
        <div className="g__container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-start justify-center">
              <div className="w-24 h-24 bg-white rounded-full mb-4"></div>
              <h2 className="text-[#FFE600] text-xl font-bold mb-2">
                SHOP NAME
              </h2>
              <div className="flex items-center gap-2 mb-2">
                <SharedImage
                  src={"/landingPage/location.svg"}
                  height={13}
                  width={13}
                />
                <span>Shop Location</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <SharedImage
                  src={"/landingPage/call.svg"}
                  height={13}
                  width={13}
                />
                <span>+XX XXX XXX XXXX (Shop Admin)</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <SharedImage
                  src={"/landingPage/mail.svg"}
                  height={13}
                  width={13}
                />
                <span>info@shop.com</span>
              </div>
             
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509428!2d144.95373531568046!3d-37.81720997975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771c3d4413e0a4!2sVictoria!5e0!3m2!1sen!2sau!4v1618230133227!5m2!1sen!2sau"
                //   style="border:0;"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001029] text-center text-white py-4">
        © 2024 SHOP. ALL RIGHTS RESERVED
      </div>
    </div>
  );
}

export default Footer;
