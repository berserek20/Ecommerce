import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";

function Cart() {
  const selector = useSelector((state) => state.cart);
  console.log(selector);

  return (
    <div className=" grid grid-cols-2">
      <div>

        {selector?.products?.map((item) => (
          <>
            <Card
              id={item.productId}
              source={item.image ?? ""}
              title={item.title}
              price={item.price}
              btnName="Add More"
            />
            <div>count:{item.count}</div>
          </>
        ))}
      </div>
      <div className=" bg-slate-600 text-white font-bold text-2xl fixed top-20 right-40  h-40 w-96 flex-row justify-center">
        <p>Total Items:  {selector.totalItems}</p>
        <p>Total Amount: $ {selector.totalAmount}</p>
        </div>
    </div>
  );
}

export default Cart;
