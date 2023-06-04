import React from "react";

const BtnList = [
  {
    id: "1",
    name: "Gaming",
  },
  {
    id: "2",
    name: "Music",
  },
  {
    id: "3",
    name: "Video",
  },
  {
    id: "4",
    name: "Movies",
  },
  {
    id: "5",
    name: "BGMI",
  },
  {
    id: "6",
    name: "Mixes",
  },
  {
    id: "7",
    name: "Computer",
  },
  {
    id: "8",
    name: "Operating",
  },
  {
    id: "9",
    name: "Security",
  },
  {
    id: "10",
    name: "Cloud",
  },
  {
    id: "11",
    name: "Web",
  },
];

const ButtonList = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <h1 className="bg-white text-black px-4 py-2 rounded-lg">All</h1>
      {BtnList.map(({ id, name }) => (
        <h1
          className="bg transition-all cursor-pointer px-4 py-2 rounded-lg hover:bg-black"
          key={id}
        >
          {name}
        </h1>
      ))}
    </div>
  );
};

export default ButtonList;
