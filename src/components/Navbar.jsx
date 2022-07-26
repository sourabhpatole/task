import React, { useState } from "react";
import Add from "./Add";
import "./navbar.css";
const Navbar = () => {
  const [inputList, setInputList] = useState([]);
  const handleClick = () => {
    setInputList((oldItem) => {
      return [...oldItem, inputList];
    });
  };
  const handleClear = () => {
    setInputList([]);
  };
  const handleConsole = () => {
    console.log(inputList);
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
      <Add inputList={inputList} setInputList={setInputList} />
    </div>
  );
};

export default Navbar;
