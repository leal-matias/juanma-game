import React from "react";

export default function Operator({ operation, selectedOperator, onClick }) {
  const isSelected = operation === selectedOperator;
  const operatorStyle = {
    height: "100px",
    width: "100px",
    borderRadius: "50px",
    cursor: "pointer",
    marginLeft: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isSelected ? "#ffe3c7" : "#fff1c7",
    border: "2px solid #ecd69b",
  };
  return (
    <div style={operatorStyle} onClick={onClick}>
      {operation}
    </div>
  );
}
