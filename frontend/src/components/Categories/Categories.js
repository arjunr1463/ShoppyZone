import React from "react";


const Categories = () => {
  return (
    <div className="flex h-[300px] md:mx-[30px] gap-[10px] border-[2px] border-black/50 hover:scale-95 duration-300">
      <div className="flex flex-1 flex-col gap-[10px]">
        <div className="flex flex-1 gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-1 gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[10px]">
        <div className="flex flex-1 gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[10px] flex-2">
        <div className="flex flex-1 gap-[10px] relative overflow-hidden">
          <div className="flex flex-1 flex-col gap-[10px]">
            <div className="flex flex-1 gap-[10px] relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[10px]">
            <div className="flex flex-1 gap-[10px] relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
