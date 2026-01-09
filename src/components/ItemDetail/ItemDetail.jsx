import { Item } from "../Item/Item"
import { Count } from "../Count/Count"
import { useCartContext } from "../../context/CartContext/useCartContext"
import './ItemDetail.css'

export const ItemDetail = ({detail}) => {
  const {addItem} = useCartContext()

  const handleAdd = (quantity) => {
    addItem({...detail, quantity})
  }

  return (
    <div className="container-detail">
      <h2>Detalle del producto:</h2>
      <Item {...detail}>
        <p>{detail.info}</p>
       <p>📍 Entrega coordinada en Morón Centro</p>
        <p>📦 Consultame sin compromiso</p>

        <Count btnText={"Me interesa"} onConfirm={handleAdd}/>
        <small className="availability-note">
          Producto sujeto a disponibilidad
        </small>

      </Item>

    </div>

  )
}
