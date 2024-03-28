import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import ItemInfoUI from "./ItemInfoUI";

function ItemDetails() {
  const location = useLocation();
  const item = useSelector((state) => state.product);
  // const navigate = useNavigate();
  console.log(location.state.id, " \n  ");
  const product = item.filter((e) => location.state.id === e.id);
  console.log("product", product);
  const display = product.map((e) => (
    <ItemInfoUI
      key={e.id}
      source={e.image}
      title={e.title}
      desc={e.description}
      rating={e.rating.rate}
      price={e.price}
      count={e.rating.count}
    />
  ));
  return (
    <div style={{border:"2px green solid"}}>
      {product.length === 0 || location.state.id ===null ? <Navigate to="/" replace={true} /> : display}
    </div>
  );
}

export default ItemDetails;
