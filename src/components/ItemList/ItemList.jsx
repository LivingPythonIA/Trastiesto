import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const ItemList = ({ list =[] }) => {
  //pasamos el button como children, no es obligatorio
// Si por alguna razón list no es un array, evitamos errores
  if (!Array.isArray(list)) {
    console.error("❌ Error: 'list' no es un array. Valor recibido:", list);
    return <p>Error al cargar los productos.</p>;
  }
  return (
   <div className="item-list-grid">
      {list.length ? (
        list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};
