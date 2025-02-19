import { useState, useEffect, useRef } from "react";
import "./Menu.css";

export default function Menu({ onClose, onReset }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const bgAudioElem = useRef(new Audio("/assets/audio.mp3"));

  useEffect(() => {
    const audio = bgAudioElem.current;
    bgAudioElem.loop = true;
    bgAudioElem.volume = volume;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, volume]);

  const handleVolumeRange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    bgAudioElem.current.volume = newVolume;
  };
  return (
    <section className="menu-modal">
      <div className="modal-overlay">
        <button className="btn-close" onClick={onClose}>
          X
        </button>
        <div className="toggle">
          <input
            type="checkbox"
            id="sound-toggle"
            checked={isPlaying}
            onChange={() => setIsPlaying(!isPlaying)}
          />
          <label htmlFor="sound-toggle">
            <span>Sound</span>
            <span></span>
          </label>
        </div>
        <div className="volume">
          <label htmlFor="volume">
            <img
              className="volume-icon"
              src="../assets/volume.gif"
              alt="volume"
            />
          </label>
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeRange}
          />
        </div>
        <button id="reset" className="reset-btn" onClick={onReset}>
          Reset Game
        </button>
      </div>
    </section>
  );
}
