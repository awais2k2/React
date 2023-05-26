import React from "react";

export default function Footer() {
  return (
    <div className="mt-[100px] bg-[#1C1816] flex flex-col gap-[30px]">
      <div className="flex gap-[30px] justify-center  item-center w-[70%] mx-auto pt-[60px]">
        <div>
          <button>
            <img
              className="h-[90px] w-[100px] "
              src="../../../assets/logo.PNG"
            />
          </button>
        </div>
        <div className="border-[0.5px] border-solid border-white h-[45px] mt-[20px] cursor-pointer mr-[5px]"></div>
        <div className="flex flex-col gap-[10px]">
          <div>Find us on</div>
          <div className="flex gap-[15px]">
            <img
              className="cursor-pointer w-[45px] h-[45px]"
              src="../../../assets/facebook.png"
            />
            <img
              className="cursor-pointer w-[45px] h-[45px]"
              src="../../../assets/insta.png"
            />
            <img
              className="cursor-pointer w-[45px] h-[45px]"
              src="../../../assets/youtube.png"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[67%] mx-auto text-[18px] mb-[60px]">
        <div className="">
          <ul className="list-none flex flex-col gap-[8px]">
            <li className="font-extrabold mb-[5px]">Information</li>
            <li>About us</li>
            <li>Mitao Bhook</li>
            <li>Mitao Bhook-Scholarship</li>
            <li>Privacy Policy</li>
            <li>Carears</li>
          </ul>
        </div>
        <div>
          <ul className="list-none flex flex-col gap-[8px]">
            <li className="font-extrabold mb-[5px]">Location</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul className="list-none flex flex-col gap-[8px]">
            <li className="font-extrabold mb-[5px]">Get in Touch</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <img
            className="h-[40px] rounded-[10px] border-[1px] border-white"
            src="../../../assets/playdownload.PNG"
          />
          <img
            className="h-[40px] rounded-[10px]  border-[1px] border-white"
            src="../../../assets/appdownload.PNG"
          />
        </div>
      </div>
    </div>
  );
}
