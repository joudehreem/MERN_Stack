import { useParams } from "react-router";
import React from "react";
export default function Number() {
  const { word } = useParams(); // matches our :city in our Routes

  return (
    isNaN(+word)
      ?
      (<h1>The word is : {word} </h1>)
      :
      (<h1>It's not a word</h1>)
  
    );
}
