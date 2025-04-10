import React from "react";
const hero = () => {
  return (
    <div className=" flex flex-col md:flex-row bg-[#E5E5E5] p-7 justify-evenly w-[100%] items-center">
      <div className="sm:pp-10">
        <h1 className="text-[48px] font-bold leading-[65px] font-[montserrat] tracking-[-0.01em] text-[#4B2C7A]">Jewelry That Tells <br></br> Your Story</h1>
        <p className="text-[rgb(75,44,122)] pt-5 font-[montserrat]">Timeless Elegance Crafted For You</p>
        <button className="pt-3 mt-5 pl-10 pr-10 pb-3 border-[1px] text-[#4B2C7A] border-[#4B2C7A] rounded">Shop Now</button>
      </div>
      <div>
        <img src="./IMAGE (2).png"></img>
      </div>
    </div>
  );
};

export default hero;
