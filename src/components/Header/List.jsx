import React from "react";
import { useNavigate } from "react-router-dom";

function List({ image,Topic, page }) {
  const navigate =useNavigate();
  return (

    <li
      className="grid grid-col-2 cursor-pointer"
      onClick={()=>navigate(page)}
    >
      <p className="flex justify-evenly">

      <img src={image} alt="" style={{ height: "50px", width: "50px" }} />
      </p>
      <p>
        {Topic}
        </p>
    </li>
  );
}

export default List;
