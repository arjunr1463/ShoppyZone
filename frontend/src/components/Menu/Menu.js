import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { motion } from "framer-motion"

function Menu({ openmenu,open }) {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        openmenu(false)
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <motion.div animate={{y:[-70,0]}} className="bg-[#232f3e] absolute top-[65px] left-[5px] md:right-[20px] h-[260px] w-[350px] text-white rounded-[0.2rem] overflow-y-scroll Menu z-[999] flex justify-between px-5 " ref={menuRef}>
      <div className="flex flex-col  w-[180px] font-semibold gap-5 my-[15px] text-[18px]">
        <Link to="/" onClick={openmenu}>HOME</Link>
        <Link to="/" onClick={openmenu}>ABOUT</Link>
        <Link to="/" onClick={openmenu}>CONTACT</Link>
        <Link to="/" onClick={openmenu}>STORES</Link>
      </div>
      <div className="flex flex-col w-[180px] items-end font-semibold gap-5 my-[15px] text-[18px]">
        
        <Link to="/products/3" onClick={open}>
        KIDS
        </Link>
        <Link to="/products/1" onClick={open}>
          MEN
        </Link>
        <Link to="/products/2" onClick={open}>
        WOMEN
        </Link>
      </div>
      
    </motion.div>
  );
}

export default Menu;
