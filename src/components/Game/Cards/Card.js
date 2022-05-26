import React from "react";

const cardStyle = {
  backgroundColor: "#f9c8c6",
  border: "2px solid #c8706d",
  margin: "10px",
  height: "100px",
  width: "170px",
  borderRadius: "20px",
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
};

const cardButtonItemStyle = {
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  cursor: "pointer",
};

const cardItemStyle = {
  fontSize: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
};

export default function Card({ operator, number, applyCard, destroyCard }) {
  return (
    <div style={cardStyle}>
      <h1 style={cardItemStyle}>{operator}</h1>
      <h1>{number}</h1>
      <div onClick={applyCard} style={cardButtonItemStyle}>
        APPLY
      </div>
      <div onClick={destroyCard} style={cardButtonItemStyle}>
        DELETE
      </div>
    </div>
  );
}
