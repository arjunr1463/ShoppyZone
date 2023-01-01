import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeItem, resetCart } from "../../Redux/CartReducer";

function Product() {
  const id = useParams().id;
  const { data, loading } = useFetch(`/products/${id}?populate=*`);
  const [selectedimg, setSelectedimg] = useState("image");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(addToCart, removeItem, resetCart);

  return (
    <motion.div animate={{ x: [-60, 0] }} className="flex flex-col mt-[20px] ">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="pr-[5px]  md:pl-[20px] md:pr-[50px] flex flex-col lg:flex lg:flex-row gap-50 border-b-[2px] border-black/50 md:border-hidden ">
            {/*Left*/}
            <div className="flex flex-1">
              <div className="flex-1 flex flex-col gap-3 md:gap-6 items-center pt-2  ">
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes?.image?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedimg("image")}
                  className="object-cover w-[20vw] h-[80px] sm:w-[20vw] sm:h-[150px] md:w-[10vw] md:h-[120px]  lg:w-[5vw] lg:h-[100px] cursor-pointer hover:scale-110 duration-300"
                />
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes?.image2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedimg("image2")}
                  className="object-cover w-[20vw] h-[80px] sm:w-[20vw] sm:h-[150px] md:w-[10vw] md:h-[120px]  lg:w-[5vw] lg:h-[100px] cursor-pointer hover:scale-110 duration-300"
                />
              </div>
              <div className="flex-5">
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes?.[selectedimg]?.data?.attributes?.url
                  }
                  alt=""
                  className="object-cover h-[350px] w-[70vw] sm:w-[70vw] sm:h-[600px] md:w-[70vw] md:h-[600px] lg:w-[40vw] lg:h-[620px]"
                />
              </div>
            </div>

            {/*Right*/}
            <div className="flex-1 ">
              <div className="flex flex-col mx-2 my-2 md:mx-20 md:gap-3 ">
                <div className="w-full break-all h-[40px] flex items-center">
                  <h className="font-semibold text-[20px] md:text-[20px] lg:text-[30px]">
                    {data?.attributes?.title}
                  </h>
                </div>

                
                <div className=" break-all w-full h-full">
                  <p className="text-[16px] md:text-[20px] font-sans">
                    {data?.attributes?.description}
                  </p>
                </div>
                <span className="font-bold text-[20px] md:text-[18px] lg:text-[25px]">
                  ₹ {data?.attributes?.price}
                </span>
                <div className="flex gap-2 items-center mt-[15px] ">
                  <div className="bg-black/50 w-[30px] h-[25px]  flex justify-center items-center rounded-[0.2rem] hover:scale-105">
                    <button
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                      className="w-[30px] h-[25px]"
                    >
                      -
                    </button>
                  </div>

                  <span className="font-semibold">{quantity}</span>
                  <div className="bg-black/50 w-[30px] h-[25px]  flex justify-center items-center rounded-[0.2rem] hover:scale-105">
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="w-[30px] h-[25px]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="bg-[black] hover:scale-90 duration-200 w-[120px] h-[33px] flex justify-center items-center rounded-[0.3rem] mt-[15px] md:mt-[8px]">
                  <button
                    className="font-bold text-white w-[120px] h-[33px] "
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          title: data.attributes.title,
                          description: data.attributes.description,
                          price: data.attributes.price,
                          image: data.attributes.image.data.attributes.url,
                          quantity,
                        })
                      )
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-black/50 mt-[20px]">
                  <i className="font-semibold">
                    <MdFavoriteBorder />
                  </i>
                  <span className="font-semibold cursor-pointer">
                    ADD TO WISH LIST
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className=" md:mx-[10px] flex flex-col font-semibold gap-5  px-5 h-[250px] justify-end">
            <div className="flex flex-col">
              <span>DESCRIPTION</span>
              <span className="border-y-[1px]"></span>
            </div>
            <div className="flex flex-col">
              <span>ADDITIONAL INFORMATION</span>
              <span className="border-y-[1px]"></span>
            </div>
            <div className="flex flex-col">
              <span>FAQ</span>
              <span className="border-y-[1px]"></span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Product;
