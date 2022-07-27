import React, { useEffect } from "react";

const List = ({ inputList }) => {
  useEffect(() => {
    console.log(inputList);
  }, [inputList]);

  return <div>List</div>;
};

export default List;
