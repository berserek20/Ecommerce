import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemInfoUI from "./ItemInfoUI";

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);
  // const item = useSelector((state) => state.product);
  // const product = item.filter((e) => parseInt(id) === e.id);
  useEffect(() => {
    async function findProducts() {
      try {
        const arr = await fetch(`https://fakestoreapi.com/products/${id}`);
        const response = await arr.json();

        if (response === null) {
          console.log("error occured");
        } else {
          setItem(response);
        }
      } catch (e) {
        console.log("error", e);
      }
    }

    findProducts();
    // eslint-disable-next-line
  }, []);
  const display = (
    item ?<ItemInfoUI
      // key={item.id ?? 0}
      source={item.image ?? ""}
      title={item.title ?? "" }
      desc={item.description ?? ""}
      rating={item.rating?.rate?? 0}
      price={item.price ?? 0}
      count={item.rating?.count?? 0}
    /> : <h1 className=" text-2xl text-cyan-300">Loading...</h1>
  );

  return (
    <div>
      {display}
      
    </div>
  );
}

export default ItemDetails;
