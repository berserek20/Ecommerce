import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart,cartTotalItems } from "../../features/cart/CartSlice";

function Card({ id, source, title, rating, price,btnName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function cartCalc(){
    dispatch(addToCart({productId:id,title:title,price:price,image:source}))
    dispatch(cartTotalItems())

  }

  return (
    <div className="grid grid-col-2 transition-all duration-500 ease-in opacity-100">
      <div
        className=" shadow"
        style={{
          height: "400px",
          width: "300px",
          cursor: "pointer",
          margin: "auto",
          border: "10%",
        }}
        onClick={() => {
          navigate("/details/" + id);
        }}
      >
        <div
          className="flex justify-evenly"
          style={{ height: "50%", width: "100%" }}
        >
          <img src={source} alt="" style={{ height: "100%", width: "60%" }} />
        </div>
        <div className="grid grid-cols-1">
          <p> Title: {title}</p>
          <p>Rating: {rating}</p>
          <p>Price: ${price}</p>
        </div>

      </div>
      <button className='bg-sky-500 hover:bg-sky-700 ' onClick={cartCalc}>
        {btnName}
        </button>
    </div>
  );
}

export default Card;
