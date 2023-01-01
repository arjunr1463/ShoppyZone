import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";

function Featured({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="my-5   h-full ">
      <h className="font-bold text-[25px] lg:ml-6">{type}</h>
      <div className="flex gap-10  overflow-x-scroll overflow-y-hidden Featured">
        {error
          ? "Something went wrong!":
        loading
          ? "loading"
          : data.map((item) => (
              <div className="">
                <Card item={item} key={item.id} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Featured;
