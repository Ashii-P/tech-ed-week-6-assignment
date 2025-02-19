import { useState, useRef } from "react";
import "./App.css";
import TCandCPS from "./components/TCandCPS";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let resetGameRef = useRef(() => {});
  return (
    <div className="body">
      <Nav setIsMenuOpen={setIsMenuOpen} />
      <main>
        <TCandCPS setResetGame={resetGameRef} />
        {isMenuOpen && (
          <Menu
            onClose={() => setIsMenuOpen(false)}
            onReset={() => resetGameRef.current()}
          />
        )}
      </main>
      <footer>Game by Aishah</footer>
    </div>
  );
}
