  //recordamos el uso del children, no es obligatorio que este
import "./Item.css";
export const Item = ({ name, price, description, imageUrl, children }) => {
  return (
    <article className="product-item">
      {/* <img src={imageUrl} alt={description} /> */}
      <img src={imageUrl || "/placeholder.png"} alt={description || name} loading="lazy" />
      <h2 className="product-title">{name}</h2>
      <p>Precio: ${price}</p>
      <p>Descripción: {description}</p>
      {children}
    </article>
  );
};
