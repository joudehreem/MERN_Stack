import { useParams } from "react-router-dom";
import React from "react";

export default function Style() {
  const { text, textColor, bgColor } = useParams();
  return (
    <h1 style={{ color: textColor, backgroundColor: bgColor }}>
      The word is: {text}
    </h1>
  );
}


