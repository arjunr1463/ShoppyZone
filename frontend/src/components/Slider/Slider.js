import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import bg1 from "../../assets/Slider/bg1.jpg"
import bg2 from "../../assets/Slider/bg2.jpg"
import bg3 from "../../assets/Slider/bg3.jpg"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="w-[300vw] h-[260px] sm:h-[400px] md:h-[520px] lg:h-[750px] flex transition duration-500 ease-out md:ease-in "
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={bg3}
          alt=""
          className="w-[100vw] h-[260px] sm:h-[400px] md:h-[520px] lg:h-[780px] object-cover "
        />
        <img
          src={bg2}
          alt=""
          className="w-[100vw] h-[260px] sm:h-[400px] md:h-[520px] lg:h-[780px] object-cover "
        />
        <img
          src={bg1}
          alt=""
          className="w-[100vw] h-[260px] sm:h-[400px] md:h-[520px] lg:h-[780px] object-cover"
        />
      </div>
      <div className="left-0 right-0 absolute flex w-fit bottom-[30px] sm:bottom-[50px] md:bottom-[50px] lg:bottom-[100px] gap-[10px] m-auto">
        <div
          className="w-[40px] h-[30px] sm:w-[50px] sm:h-[50px] flex justify-center items-center cursor-pointer border-[1px] border-[#999] text-white"
          onClick={prevSlide}
        >
          <WestOutlinedIcon />
        </div>
        <div
          className="w-[40px] h-[30px] sm:w-[50px] sm:h-[50px]  flex justify-center items-center cursor-pointer border-[1px] border-[#999] text-white"
          onClick={nextSlide}
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
