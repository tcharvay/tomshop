import React from "react";
import '../styles/item.css';
import { Link } from "react-router-dom";








export default function Item({producto}) {
  return (
    <div className='item-card'>
      <img src={producto.image} alt="" />
      <p className="description">{producto.description}</p>
      <p className="price">Price: $ {producto.price}</p>
      <Link className="view" to={`/item/${producto.id}`}>View</Link>
    </div>
  );
}
