import LeftNav from "./components/LeftNav";
import { useState } from "react";
import DisplayNote from "./components/DisplayNote";
import HomeMsg from "./components/HomeMsg";

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [select, setSelect] = useState(true);
  const [index, setIndex] = useState(null);
  const handleBack = () => {
    setSelect(true);
  };

  return (
    <>
      <div className="flex relative">
        <div className={select ? "block" : "hidden lg:block"}>
          <LeftNav
            setSelectedGroup={setSelectedGroup}
            setIndex={setIndex}
            setSelect={setSelect}
          />
        </div>
        <div
          style={{ background: "#DAE5F5" }}
          className="h-screen w-screen lg:block md:block"
        >
          {selectedGroup ? (
            <div className={select ? "hidden" : "block"}>
              <DisplayNote
                name={selectedGroup.name}
                colour={selectedGroup.colour}
                content={selectedGroup.content}
                index={index}
                handleBack={handleBack}
              />
            </div>
          ) : (
            <div className="hidden lg:block md:block">
              <HomeMsg />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
