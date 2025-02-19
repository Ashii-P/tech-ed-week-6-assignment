import { useState } from "react";
import HowToPlay from "./HowToPlay";
import Menu from "./Menu";
import "./Nav.css";

export default function Nav({ setIsMenuOpen }) {
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);

  return (
    <div className="nav-body">
      <nav className="nav-bar">
        <button id="hTP" onClick={() => setIsHowToPlayOpen(true)}>
          How To Play
        </button>
        <h1 className="game-title">ClickTopus</h1>
        <button className="btn btn-open" onClick={() => setIsMenuOpen(true)}>
          Menu
        </button>
      </nav>
      {isHowToPlayOpen && (
        <HowToPlay onClose={() => setIsHowToPlayOpen(false)} />
      )}
    </div>
  );
}
