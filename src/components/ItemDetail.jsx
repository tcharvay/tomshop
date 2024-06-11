import React from "react";

const ItemDetail = ({ producto }) => {
  console.log(producto);

  return (
    <div className="item-card">
      <img src={producto.image} alt="" />
      <p>Price $:{producto.price}</p>
      <p>{producto.description}</p>
    </div>
  );
};

export default ItemDetail;
