import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCartAlt } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Cart from "../Cart/Cart";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"


import india from "../../assets/NavBar/india.png";

function Nav() {
  const [open, setOpen] = useState(false);
  const [openmenu, setOpenmenu] = useState(false);
  const products=useSelector(state=>state.cart.products)
  return (
    <div>
      <div className="break-all h-[65px] flex items-center justify-between relative ">
        {/* Left*/}
        <div
          className="lg:hidden mx-3 flex justify-center items-center"
          
        >
          <button
            onClick={() => {
              setOpenmenu(!openmenu);
            }}
            className="text-[25px]"
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div className="hidden lg:flex px-4">
          <div className="flex items-center justify-center h-[30px]">
            <img src={india} alt="" className="w-[30px] h-[30px]" />
            <button>
              <MdKeyboardArrowDown className="text-[16px]" />
            </button>
          </div>
          <div className="flex items-center justify-center px-2">
            <h className="font-semibold text-[14px]">IND</h>
            <button>
              <MdKeyboardArrowDown className="text-[16px]" />
            </button>
          </div>
          <div className=" flex items-center gap-5 font-semibold pl-5">
            <Link to="/products/1">Men</Link>
            <Link to="/products/2">Women</Link>
            <Link to="/products/3">Kids</Link>
          </div>
        </div>

        {/* Center*/}
        <div>
          <Link
            to="/"
            className="text-[18px] font-bold text-inherit sm:text-[23px] md:text-[23px] lg:text-[28px] tracking-[4px] "
          >
            SHOPPYZONE
          </Link>
        </div>

        {/* Right*/}
        <div className="flex gap-4 px-4 ">
          <div className="hidden lg:flex items-center gap-5 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Stores</Link>
          </div>
          <div className="flex  items-center text-[22px] gap-4 text-[#777] rounded-50">
            <button className="hidden sm:flex">
              <AiOutlineSearch />
            </button>
            <button className="hidden sm:flex">
              <BsFillPersonFill />
            </button>
            <div className="flex flex-col justify-center items-center gap text-[25px]">
              <button
                className="relative"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <BiCartAlt />
              </button>

              <span className="text-[13px] bg-[#232f3e] rounded-[5rem] text-[white] font-semibold  absolute mb-6 ml-5 h-[15px] w-[15px] flex justify-center items-center">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {openmenu && <Menu openmenu={setOpenmenu} open={openmenu} />}
      {open && <Cart opencart={setOpen}/>}
    </div>
  );
}

export default Nav;
