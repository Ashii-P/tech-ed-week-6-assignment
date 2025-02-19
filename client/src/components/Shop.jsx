import { useEffect, useState } from "react";
import "./Shop.css";

export default function Shop({ onPay }) {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    async function fetchShop() {
      console.log("Running inventory");
      const res = await fetch(
        `https://tech-ed-week-6-assignment.onrender.com/api/octopusshop`
      );
      const shop = await res.json();
      setInventory(shop.rows);
    }
    fetchShop();
  }, []);
  return (
    <section>
      {inventory.map((item) => (
        <div key={item.id} className="itemBox">
          <h3>{item.name}</h3>
          <p>TentaCash:{item.cost}🐙</p>
          <p>Power Up:{item.increase}🔱</p>
          <button
            className="buyBtn"
            onClick={() => onPay(item.cost, item.increase)}
          >
            Buy
          </button>
        </div>
      ))}
    </section>
  );
}
