import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then((res) => {
        setColorList(res.data);
      });
  }, []);
  
  const deleteFilter = (id) => {
    setColorList(
      colorList.filter((eachColor) => {
        return eachColor.id !== id;
      })
    );
  };

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        deleteFilter={deleteFilter}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
