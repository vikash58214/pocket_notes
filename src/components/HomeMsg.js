import React from "react";
import Img1 from "../assets/Vector.png";
import Img2 from "../assets/HomeImg.png";
const HomeMsg = () => {
  return (
    <div className="grid place-items-center h-screen  pt-28">
      <div>
        <img src={Img2} alt="homeImg" />
      </div>
      <div>
        <h1 className="font-bold text-3xl">Pocket Notes</h1>
      </div>
      <div className="mt-2">
        <p className="w-96 font-semibold" style={{ width: "32vw" }}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="flex mt-44">
        <img src={Img1} alt="lock" />
        <p className="ml-2">end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default HomeMsg;
