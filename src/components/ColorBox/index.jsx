import React, { useState } from "react";
import "./styles.scss";

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_LIST = ["red", "yellow", "blue", "cyan", "orange"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
};

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "red";
    return initColor;
  });

  const handleClickBox = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClickBox}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
