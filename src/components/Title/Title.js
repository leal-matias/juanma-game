import React, { useState } from "react";

const inputStyle = {
  display: "inline-block",
  marginLeft: "80px",
  marginRight: "80px",
  maxWidth: "100px",
  width: "100px",
  height: "20px",
};

const hexColorRegex = new RegExp("^([0-9]|[a-f]|[A-F]){6}$");
const isHexColor = (str) => {
  return hexColorRegex.test(str);
};

function Title() {
  const [colorValue, setColorValue] = useState("0000FF");

  const titleStyle = {
    fontFamily: "Arial",
    display: "inline-block",
    color: isHexColor(colorValue) ? `#${colorValue}` : "#0000FF",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <input
        style={inputStyle}
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
      <h1 style={titleStyle}>EL JUEGO DE JUANMA</h1>
    </div>
  );
}

export default Title;
