import { useParams } from "react-router";
import React from "react";
export default function Content() {
  const { content } = useParams(); // matches our :city in our Routes

  return (
    !isNaN(+content)
      ?
      (<h1>The number is : {content} </h1>)
      :
      (<h1>The word is : {content} </h1>)
  
    );
}
