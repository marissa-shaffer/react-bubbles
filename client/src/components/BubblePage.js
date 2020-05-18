import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from 'react-router-dom';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const match = useRouteMatch();

  const fetchColor = () => {
    axiosWithAuth()
    .get("/colors")
    .then(res => {
      console.log(res);
      setColorList(res.data)
    })
    .catch(res => {
      console.log(err);
    });
  };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
