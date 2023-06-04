import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { useSelector } from "react-redux";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
   
  if(!isMenuOpen) return null

  return (
    <div className="">
      <ul className="w-full cursor-pointer">
        <li className="flex px-6 py-2 hover:bg-[#1e1e1e] rounded-xl items-center gap-8">
          <BiCameraMovie size={25} /> Movie
        </li>
        <li className="flex px-6 py-2 hover:bg-[#1e1e1e] rounded-xl items-center gap-8">
          <BsMusicNoteBeamed size={25} />
          Music
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-[#1e1e1e] rounded-xl gap-8">
          <AiOutlineVideoCamera size={25} />
          Video
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-[#1e1e1e] rounded-xl gap-8">
          <IoGameControllerOutline size={25} />
          Gaming
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-[#1e1e1e] rounded-xl gap-8">
          <AiOutlineLike size={25} />
          Like
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-[#1e1e1e] rounded-xl gap-8">
          <MdOutlineWatchLater size={25} />
          Watch Later
        </li>
        <li className="flex items-center px-6 py-2 hover:bg-[#1e1e1e] rounded-xl gap-8">
          <MdVideoLibrary size={25} />
          Library
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
