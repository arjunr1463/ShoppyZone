import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Contact() {
  return (
    <div className="bg-[#015888] w-full flex items-center h-[60px] md:h-[90px] justify-between">
      <div className="flex gap-12 md:flex md:justify-between md:gap-1 mx-2 md:mx-5 md:w-full">
        <h className="text-white font-semibold text-[10px] md:text-[20px]">BE IN TOUCH WITH US:</h>
        <div className="flex">
          <input type="email" placeholder="Enter your e-mail" className="outline-none text-[13px] md:text-[18px] rounded-[0.3rem] font-serif pl-2 h-[30px] md:h-[40px]" />
          <div className="bg-black h-[30px] w-[50px] md:h-[40px] md:w-[80px] rounded-[0.3rem] flex items-center justify-center hover:scale-95 duration-300"><button className="text-white text-[13px]  md:text-[15px] font-bold ">Join Us</button></div>
          
        </div>
        <div className="hidden md:flex gap-2 text-white">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
}

export default Contact;
