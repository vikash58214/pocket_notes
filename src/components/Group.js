import React from "react";

const Group = ({ name, colour }) => {
  let Namelatter = name.charAt(0).toUpperCase();

  return (
    <>
      <div className="flex justify-start  rounded-lg mb-5 cursor-pointer hover:bg-slate-300">
        <div
          style={{ background: colour }}
          className="w-14 h-14 rounded-full flex justify-center items-center ml-12 mr-5 font-bold text-neutral-50"
        >
          {Namelatter}
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-semibold text-2xl lg:text-base md:text-base ">
            {name}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Group;
