import React from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";
import { TfiBell } from "react-icons/tfi";
import { TfiSearch } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex p-4 justify-between  items-center">
      <div className="flex items-center gap-6">
        <IoMenu
          color="white"
          className="hover:bg cursor-pointer rounded-full"
          size={30}
          onClick={() => toggleMenuHandler()}
        />
        <div className="w-[7rem]">
          <img src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1685858911/DIGITALY_3_c1ezrq.png" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <input
          className=" inputBtn text-white px-4 rounded-l-full py-2  bg-transparent"
          type="text"
          placeholder="Search"
          
        />
        
        <button className="text-white px-6 py-3 rounded-r-full text-center bg ">
          <TfiSearch size={20} />
        </button>
      </div>
      <div className="flex gap-4">
        <RiVideoAddLine color="white" size={25} />
        <TfiBell color="white" size={25} />
        <TbUserCircle color="white" size={25} />
      </div>
    </div>
  );
};

export default Head;
