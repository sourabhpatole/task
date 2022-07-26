import React from "react";
import "./add.css";
const Add = ({ inputList, setInputList }) => {
  const handleDelete = (id) => {
    setInputList(
      inputList.filter((elem, index) => {
        return index !== id;
      })
    );

    console.log(`delete clicked on ${id}`);
  };
  return (
    <div className="add">
      <ol className="listcol">
        {inputList.map((elem, index) => {
          return (
            <div className="tags" key={index}>
              <h1>{elem}</h1>
              <input className="inptag" type="text" />
              ::
              <button className="btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Add;
