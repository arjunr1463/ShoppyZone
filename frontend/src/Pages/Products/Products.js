import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";
import bg4 from "../../assets/Slider/bg4.jpg"

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch(
    `/sub-Categories?[filters][categories][id][$eq]=${ catId }`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <motion.div animate={{x:[-60,0]}} className="flex px-[5px] ">
      {/*Left*/}
      <div className="flex flex-col gap-5 flex-1  sticky h-full top-[2px] pt-3 w-full">
        <div className=" w-full flex flex-col gap-2">
          <h className="font-bold text-[14px] ">Product Categories</h>
          {data?.map((item) => (
            <div className="font-serif" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="w-full  flex flex-col gap-2">
          <h className="font-bold text-[14px] ">Filter by price</h>
          <div className="flex items-center">
            <span className="font-semibold text-[12px]">0</span>
            <input
              type="range"
              min={0}
              max={5000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h className="font-bold text-[14px]">Sort by</h>
          <div className="font-serif text-[15px]">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Low-High</label>
          </div>
          <div className="font-serif text-[15px]">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">High-Low</label>
          </div>
        </div>
      </div>
      {/*Right*/}
      <div className="flex-3 md:ml-[60px]">
        <img
          className="ml-2  md:ml-0 w-[70vw] h-[200px] sm:h-[200px] md:w-[80vw] md:h-[300px] lg:h-[500px] lg:w-[80vw] object-cover mb-[50px]"
          src={bg4}
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </motion.div>
  );
};

export default Products;
