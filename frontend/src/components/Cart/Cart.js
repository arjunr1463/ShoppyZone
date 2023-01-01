import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../Redux/CartReducer";


function Cart({ opencart }) {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch(removeItem, resetCart);
  const totalprice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        opencart(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });






  return (
    <motion.div
      animate={{ y: [-70, 0] }}
      className="bg-black/90 absolute top-[65px] right-[2px] md:right-[20px] h-[400px] w-[350px] text-white rounded-[0.4rem] overflow-y-scroll Cart z-[999] "
      ref={menuRef}
    >
      <h1 className="font-bold text-[25px] flex justify-center sticky top-[0px] bg-[#232f3e] items-center">
        My Cart
      </h1>
      <span
        className="text-[12px] font-normal flex justify-end px-[10px] underline cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset
      </span>

      {products.map((item) => (
        <div className="flex  py-[10px] ">
          <div className="flex-1 flex justify-center items-center ">
            <img
              src={"http://localhost:1337" + item.image}
              alt=""
              className="w-[80px] h-[90px] "
            />
          </div>
          <div className="flex-3 w-[260px] h-[100px] px-2">
            <h className="font-semibold text-[15px]">{item.title}</h>
            <p className="text-[12px] break-all">
              {item.description?.substring(0, 40)}
            </p>

            <div className="flex justify-between items-center my-[10px] ">
              <span className="text-[16px]">
                <span className="text-[14px]">{item.quantity}x </span>₹{" "}
                {item.price}
              </span>

              <button
                className="text-[22px] hover:scale-95 duration-300"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="font-semibold flex justify-between sticky bottom-0 w-full  bg-[#232f3e] h-[40px] items-center px-[10px]">
        <span>
          Total:{" "}
          <span className="text-[14px] font-bold">₹ {totalprice()}/-</span>
        </span>
        <div className="bg-[orange] rounded-[0.2rem] hover:scale-95 duration-300 flex justify-center items-center">
          <button className="font-bold ">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
