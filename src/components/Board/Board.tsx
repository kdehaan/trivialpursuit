import React, { ReactElement, useEffect, useState } from "react";
import * as d3 from 'd3'
import BoardSVG from "./BoardSVG";

const Board = (): ReactElement => {

  const id = "board"

  const [height, setHeight] = useState<number>(window.innerHeight)
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      console.log("width and height changed", width, height)
    }
    // console.log("LKSJDLFKJ")
    window.addEventListener('resize', handleResize)
  })


  useEffect(() => {
    console.log("new width and height", width, height)
    BoardSVG(id, width*0.95, height*0.95)
  }, [width, height])

  
  return (
    <div id={id}>
    </div>
  );
};


export default Board