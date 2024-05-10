import React from "react";
import { useEffect, useState } from "react";
import Group from "./Group";
import Create from "./Create";

const LeftNav = ({ setSelectedGroup, setIndex, setSelect }) => {
  const [hide, setHide] = useState(false);
  const [userData, setUserData] = useState(null);
  const fetch = () => {
    const storedData = JSON.parse(localStorage.getItem("userNote")) || null;
    setUserData(storedData);
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleHide = (e) => {
    if (
      e.target.className ===
      "w-screen h-screen bg-black z-10 bg-opacity-70 relative flex justify-center items-center"
    ) {
      setHide(false);
    }
  };
  const hidee = () => {
    setHide(false);
  };

  const createGroup = () => {
    setHide(true);
  };
  const handleView = (group, indexx) => {
    setSelectedGroup(group);
    setIndex(indexx);
    setSelect(false);
  };

  return (
    <>
      <div className="lg:w-72 md:w-72 w-screen h-screen relative">
        <div className="h-full">
          <div className="w-full flex justify-center  pt-14 mb-6">
            <h1 className="font-bold text-2xl">Pocket Notes</h1>
          </div>
          {!userData ? (
            <div className="w-full flex justify-center">
              <div className="flex flex-col justify-center w-10/12 mt-5 border-2 border-blue-700 shadow-2xl">
                <h1 className="text-center font-bold">NO GROUP! </h1>
                <h1 className="font-bold text-center">
                  CLICK + BUTTON TO CREATE GROUP
                </h1>
              </div>
            </div>
          ) : (
            <div style={{ height: "630px" }} className=" h overflow-auto">
              {userData.map((user, index) => (
                <div key={index} onClick={() => handleView(user, index)}>
                  <Group name={user.name} colour={user.colour} />
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="flex bottom-5 right-6 absolute  items-center pb-3 justify-center bg-indigo-800 hover:bg-indigo-900 text-white text-5xl font-bold w-16 h-16 rounded-full focus:outline-none focus:shadow-outline"
          onClick={createGroup}
        >
          +
        </button>
      </div>
      <div className="absolute left-0 top-0">
        {hide && <Create handleHide={handleHide} hidee={hidee} fetch={fetch} />}
      </div>
    </>
  );
};

export default LeftNav;
