import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const List = ({ subCats, sort, maxPrice, catId }) => {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <motion.div animate={{y:[100,0]}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {loading
        ? "loading"
        : data?.map((item) => (
            <div className="flex justify-center items-center my-2">
              <Card item={item} key={item.id} />
            </div>
          ))}
    </motion.div>
  );
};

export default List;
