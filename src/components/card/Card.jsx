import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ id, source, title, rating, price }) {
  const navigate = useNavigate();

  return (
      <div  style={{
        height: "400px",
        width: "300px",
        border: "2px solid black",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate("/details", { state: { id: id } });
      }}>
      <div className="flex justify-evenly" style={{border:"2px solid red", height:"50%",width:"100%"}}>
        <img src={source} alt="" style={{ height: "100%", width: "60%", border:"2px solid blue"}} />
      </div>
      <div className="grid grid-cols-1">

        <div>title: {title}</div>
        <div>rating:{rating}</div>
        <div>price:${price}</div>
      </div>
    </div>
  );
}

export default Card;