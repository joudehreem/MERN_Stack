import React, { useState } from "react";

function Box() {
  const [box, setBox] = useState({
    color: "",
    height: "",
    width: "",
  });

  const [boxes, setBoxes] = useState([]); // Corrected initialization

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Box properties:", box);
    setBoxes([...boxes, box]);
    setBox({ color: "", height: "", width: "" });
  }

  return (
    <div className="color-container">
      <h1>Color</h1>
      <div
        style={{
          backgroundColor: box.color,
          height: box.height ? `${box.height}px` : "50px",
          width: box.width ? `${box.width}px` : "50px",
        }}
      ></div>

      <div>
        <form onSubmit={handleSubmit}>
          <p>Color</p>
          <input
            type="text"
            name="color"
            value={box.color}
            onChange={(e) => setBox({ ...box, color: e.target.value })}
          />
          <p>Height</p>
          <input
            type="number"
            name="height"
            value={box.height}
            onChange={(e) => setBox({ ...box, height: e.target.value })}
          />
          <p>Width</p>
          <input
            type="number"
            name="width"
            value={box.width}
            onChange={(e) => setBox({ ...box, width: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <div >
          {boxes.map((item, index) => (
            <div
              key={index}
              className="display-color"
              style={{
                backgroundColor: item.color || "red",
                height: item.height ? `${item.height}px` : "50px",
                width: item.width ? `${item.width}px` : "50px",
                margin: "10px",
                display: "inline-block",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Box;
