import { useEffect, useRef, useState } from "react";

function getRandomColor(currentColor) {
  const COLOR_LIST = [
    "red",
    "green",
    "yellow",
    "orange",
    "cyan",
    "violet",
    "blue",
  ];
  const newColorList = COLOR_LIST.filter((color) => color !== currentColor);
  const randomIndex = Math.floor(Math.random() * newColorList.length);
  return newColorList[randomIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    // change color every 1 second
    const colorInterval = setInterval(() => {
      const newColor = getRandomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
