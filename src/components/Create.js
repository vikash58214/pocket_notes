import React, { useState } from "react";

const Create = ({ handleHide, hidee, fetch }) => {
  const [name, setName] = useState("");
  const [colour, setColour] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleColorChange = (selectedColor) => {
    setColour(selectedColor);
  };
  const handleSubmit = () => {
    if (name && colour) {
      const existingData = JSON.parse(localStorage.getItem("userNote")) || [];
      const newData = {
        name: name,
        colour: colour,
      };
      const updatedData = [...existingData, newData];
      localStorage.setItem("userNote", JSON.stringify(updatedData));
      hidee();
      fetch();
    } else {
      alert("please select a color and enter a name");
    }
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-black z-10 bg-opacity-70 relative flex justify-center items-center"
        onClick={handleHide}
      >
        <div className="bg-white absolute  lg:w-4/12 w-11/12  h-auto rounded-md">
          <div className="lg:ml-10 md:ml-10 ml-4">
            <div>
              <h1 className="font-bold mt-5">Create New Group</h1>
            </div>

            <div className="flex mt-6">
              <div>
                <p className="font-semibold">Group Name</p>
              </div>
              <div className="lg:ml-5">
                <input
                  className="border rounded-2xl lg:w-80 md:w-80 w-full px-2 h-8"
                  type="text"
                  placeholder="Enter group name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="flex mt-6">
              <div>
                <p className="font-semibold">Choose Color</p>
              </div>
              <div className="flex lg:ml-5 ml-2">
                <div
                  className="w-7 lg:ml-5 md:ml-5 h-7 rounded-full cursor-pointer "
                  style={{ background: "#B38BFA" }}
                  onClick={(e) => handleColorChange(e.target.style.background)}
                ></div>
                <div
                  className="w-7 lg:ml-5 md:ml-5 ml-2 h-7 rounded-full cursor-pointer "
                  style={{ background: "#FF79F2" }}
                  onClick={(e) => handleColorChange(e.target.style.background)}
                ></div>
                <div
                  className="w-7 lg:ml-5 md:ml-5 ml-2 h-7 rounded-full cursor-pointer "
                  style={{ background: "#43E6FC" }}
                  onClick={(e) => handleColorChange(e.target.style.background)}
                ></div>
                <div
                  className="w-7 lg:ml-5 md:ml-5 ml-2 h-7 rounded-full cursor-pointer "
                  style={{ background: "#F19576" }}
                  onClick={(e) => handleColorChange(e.target.style.background)}
                ></div>
                <div
                  className="w-7 lg:ml-5 md:ml-5 ml-2 h-7 rounded-full cursor-pointer "
                  style={{ background: "#0047FF" }}
                  onClick={(e) => handleColorChange(e.target.style.background)}
                ></div>
                <div
                  className="w-7 lg:ml-5 md:ml-5 ml-2 h-7 rounded-full cursor-pointer "
                  style={{ background: "#6691FF" }}
                  onClick={(e) => handleColorChange(e.target.style.background)}
                ></div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="float-end w-32 text-white h-8 rounded-md mr-4 mb-3 mt-3 bg-blue-900"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
