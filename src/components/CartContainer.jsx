import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div>
      {carrito.map((prod) => <p> {prod.description} - Price ${prod.price}</p>)}
      {
        carrito.length > 0 ?
            <>
                <p> Total: ${calcularTotal()}</p>  
                <button className='view'onClick={handleVaciar}>Empty Cart</button>
                <Link to="/checkout">Checkout</Link>
            </> :
            <p>Cart Empty</p>
      }
    </div>
  )
}

export default Carrito
