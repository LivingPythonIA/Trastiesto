import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import "./Menos7000.css";

export const Menos7000 = ({ products }) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const result = products.filter((p) => p.price < 7000);
    setFiltered(result);
  }, [products]);

  return (
    <section className="menos7000">
      <h2>Menos de $7000</h2>
      <p className="subtitle">
        Oportunidades únicas que vuelan rápido 🔥
      </p>

      <div className="menos7000-grid">
        {filtered.length ? (
          filtered.map((prod) => (
            <Item key={prod.id} {...prod} />
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </section>
  );
};
