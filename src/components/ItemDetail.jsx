import React, { useContext } from 'react'
import "../styles/item.css";
import "../styles/itemDet.css";

import { CartContext } from '../context/CartContext'

const ItemDetail = ({ producto }) => {

const { agregarAlCarrito } = useContext(CartContext); 




  const handleAgregar = () => {
     agregarAlCarrito(producto);
     
  }

  return (
    <div className="item-d">
      <img className="img-d" src={producto.image} alt="" />
      <p className="description-d">{producto.description}</p>
      <p>Price: ${producto.price}</p>
      <button  className="view" onClick={handleAgregar}>Add to cart </button>
    </div>
  );
};

export default ItemDetail;


