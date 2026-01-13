import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { getProducts } from "../../services/products"

export const ItemListContainer = ({titulo}) => {
  
  const [products, setProducts] = useState([])
  const {category} = useParams()
  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  getProducts(category)
    .then((data) => setProducts(data))
    .catch((err) => {
      console.log(err)
 // modifico y agrego if *2
   setError(err.message || "Error al cargar productos");
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <section>
   {!category && (
  <div className="home">
    {/* <img
      src="/nombre-trastiesto.png"
      alt="Trastiesto"
      className="logo-nombre"
    /> */}

    <p className="home-subtitle">
      Un lugar para vender y encontrar cosas que todavía tienen mucho para dar.
    </p>
  </div>
)}

    {!category ? (
      // TODOS LOS PRODUCTOS
      <h2>{titulo}</h2>
    ) : (
      // CATEGORÍAS
      <h2>
        {titulo}
        <span className="text-category"> {category}</span>
      </h2>
    )}

    <ItemList list={products} />
  </section>
);
    
}