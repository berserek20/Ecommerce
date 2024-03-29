import React from "react";
import { useNavigate } from "react-router-dom";

function List({ image, page }) {
  const navigate =useNavigate();
  return (

    <li
      className="flex justify-evenly"
      style={{ border: "2px solid black",cursor:"pointer" }}
      onClick={()=>navigate(page)}
    >
      <img src={image} alt="" style={{ height: "50px", width: "50px" }} />
    </li>
  );
}

export default List;
