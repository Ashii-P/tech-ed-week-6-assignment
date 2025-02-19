import Octopus from "/assets/Octopus.png";
import "./Octopus.css";
import { useState } from "react";
export default function OctopuseImage({ onClick }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
    onClick();
  };
  return (
    <img
      src={Octopus}
      alt="octopus cartoon"
      onClick={() => {
        handleClick();
        onClick();
      }}
      className={isClicked ? "clicked" : ""}
    />
  );
}
