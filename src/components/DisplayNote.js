import React, { useState, useEffect, useCallback } from "react";
import Send from "../assets/send.png";
import Notesend from "../assets/notsend.png";
import Back from "../assets/back.png";

const DisplayNote = ({ name, colour, index, content, handleBack }) => {
  const [input, setInput] = useState("");
  const [neww, setNeww] = useState([]);
  let Namelatter = name.charAt(0).toUpperCase();

  const fetchData = useCallback(() => {
    const response = JSON.parse(localStorage.getItem("userNote")) || [];
    response.forEach((dataa, idx) => {
      if (idx === index) {
        setNeww(dataa.content);
      }
    });
  }, [index]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      const existingData = JSON.parse(localStorage.getItem("userNote")) || [];
      const currentDate = new Date();
      const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const currentTime = currentDate.toLocaleDateString("en-IN", options);
      const updatedData = existingData.map((group, i) => {
        if (i === index) {
          return {
            ...group,
            content: [
              ...(group.content || []),
              { text: input.trim(), time: currentTime },
            ],
          };
        }
        return group;
      });
      localStorage.setItem("userNote", JSON.stringify(updatedData));
      fetchData();
      setInput("");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between">
        <div className="flex bg-blue-800 w-full h-20 items-center">
          <div className="ml-4 lg:hidden md:block block">
            <button onClick={() => handleBack()}>
              <img src={Back} alt="back" />
            </button>
          </div>
          <div
            style={{ background: colour }}
            className="w-14 h-14 rounded-full  text-white ml-5 flex justify-center items-center"
          >
            {Namelatter}
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-white">{name}</h1>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-5 h-3/5 overflow-auto relative">
          {neww &&
            neww.map((conten, idx) => (
              <div
                key={idx}
                className="w-11/12 h-auto bg-white shadow-2xl  px-4 py-4 rounded mb-4"
              >
                <p>{conten.text}</p>
                <div className="w-full mt-5 flex justify-end mr-4 font-semibold">
                  <p>{conten.time}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="bg-blue-800 p-6 rounded-md h-48 w-full relative">
          <textarea
            value={input}
            onChange={handleChange}
            className="w-full h-full resize-none rounded-md outline-none p-3 text-xl"
            placeholder="Enter your text here......."
          />
          {!input ? (
            <div className=" bottom-10 right-10 absolute">
              <img src={Notesend} alt="send button" />
            </div>
          ) : (
            <button
              onClick={handleSend}
              className="absolute bottom-10 right-10"
            >
              <img src={Send} alt="send button" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayNote;
