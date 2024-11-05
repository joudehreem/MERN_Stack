import { useParams } from "react-router";
import React from "react";
export default function Number() {
  const { num } = useParams(); // matches our :city in our Routes

  return (
    !isNaN(+num)
      ?
      (<h1>The number is : {num} </h1>)
      :
      (<h1>It's not a number</h1>)
  
    );
}
