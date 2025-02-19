import { useState, useEffect } from "react";
import OctopusImage from "./OctopusImg";
import Popup from "./Popup";
import Shop from "./Shop";
import "./TCandCPS.css";

export default function TCandCPS({ setResetGame }) {
  const [CPS, setCPS] = useState(() => {
    const storage = localStorage.getItem("CPS");
    const initialValue = JSON.parse(storage);
    return initialValue || 1;
  });
  const [tentacash, setTentacash] = useState(() => {
    const cashStorage = localStorage.getItem("Tentacash");
    const initialCash = JSON.parse(cashStorage);
    return initialCash || 1;
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const result = setInterval(() => {
      setTentacash((prevTentacash) => {
        const storeTentacash = prevTentacash + CPS;
        localStorage.setItem("Tentacash", JSON.stringify(storeTentacash));
        return storeTentacash;
      });
    }, 1000);
    return () => clearInterval(result);
  }, [CPS]);

  useEffect(() => {
    setResetGame.current = resetGame;
  }, []);
  const resetGame = () => {
    localStorage.removeItem("Tentacash");
    localStorage.removeItem("CPS");
    setTentacash(1);
    setCPS(1);
  };
  const playBuySfx = () => {
    const buySfx = new Audio("/assets/levelup.mp3");
    buySfx.play();
  };
  const playClickSfx = () => {
    const clickSfx = new Audio("/assets/bubble.mp3");
    clickSfx.play();
  };
  const handlePayment = (cost, increase) => {
    if (tentacash < cost) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      setTentacash((prevTentacash) => {
        playBuySfx();
        const storeTentacash = prevTentacash - cost;
        localStorage.setItem("Tentacash", JSON.stringify(storeTentacash));
        return storeTentacash;
      });
      setCPS((prevCPS) => {
        const storeCPS = prevCPS + increase;
        localStorage.setItem("CPS", JSON.stringify(storeCPS));
        return storeCPS;
      });
    }
  };
  return (
    <div className="grid-container">
      <div className="score-display">
        <h2>Tentacash: {tentacash}</h2>
        <h2>CPS: {CPS}</h2>
      </div>
      {showPopup && <Popup />}
      <div className="image-display">
        <OctopusImage
          onClick={() => {
            setTentacash((tentacash) => {
              playClickSfx();
              const storeTentacash = tentacash + 1;
              localStorage.setItem("Tentacash", JSON.stringify(storeTentacash));
              return storeTentacash;
            });
          }}
        />
      </div>
      <div className="shop-display">
        <Shop onPay={handlePayment} />
      </div>
    </div>
  );
}
