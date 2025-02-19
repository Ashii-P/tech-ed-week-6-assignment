import "./HowToPlay.css";
export default function HowToPlay({ onClose }) {
  return (
    <div className="modal-overlay">
      <section className="htp-modal">
        <button className="btn-close" onClick={onClose}>
          X
        </button>
        <h1>🌊 How to Play 🐙</h1>
        <p>
          Dive into the depths and start collecting Tentacash! Every second, you
          naturally generate 1 Tentacash, but clicking on the octopus earns you
          even more. To speed up your earnings, purchase powerful upgrades
          inspired by the ocean's might. As you gather Tentacash, invest in
          legendary boosts like the Bubble Blaster or unleash the power of the
          Kraken’s Awakening to dominate the sea! 🌊 <br />
          How much Tentacash can you accumulate? Keep clicking, upgrading, and
          ruling the underwater world! 🐙
        </p>
      </section>
    </div>
  );
}
