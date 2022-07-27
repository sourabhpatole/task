import React, { useState } from "react";
import Add from "./Add";
import List from "./List";
import "./navbar.css";
const Navbar = () => {
  const [inputList, setInputList] = useState([]);

  const handleClick = () => {
    let newList = [...inputList];
    let Id = (Math.random() * 1000).toFixed(2).toString();
    newList.push({ id: Id, value: "" });
    setInputList(newList);
  };
  const handleClear = () => {
    setInputList([]);
  };
  const handleConsole = () => {
    console.log(inputList);
  };
  const handleDelete = (index) => {
    let newList = [...inputList];

    newList.splice(index, 1);
    setInputList(newList);
    console.log(`delete clicked on ${index}`);
  };
  return (
    <div className="mainnavbar">
      <div className="navbar">
        <h1 className="heading">This is Navbar</h1>
        <div className="menu-btn">
          <div className="nav-left">
            <button onClick={handleConsole}>save</button>
          </div>
          <div className="nav-right">
            <button onClick={handleClick}>+Add more</button>
            <button onClick={handleClear}>Clear all</button>
          </div>
        </div>
      </div>
      {/* <Add inputList={inputList} /> */}
      {/* <List inputList={inputList} /> */}
      {inputList.map((elem, index) => {
        return (
          <div className="tags" key={elem.id}>
            {/* <h1>{elem}</h1> */}
            <input
              className="inptag"
              placeholder={elem.id}
              type="text"
              value={elem.value}
              onChange={(e) => console.log(e.target.value)}
            />
            ::
            <button className="btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
