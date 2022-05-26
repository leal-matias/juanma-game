import React from "react";
import Card from "./Card";

const cardsContainer = {
  marginTop: "80px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  fontWeight: "bold",
  flexWrap: "wrap",
};

export default function Cards({ cards, applyCard, destroyCard }) {
  return (
    <div style={cardsContainer}>
      {cards.map((currentCard, index) => (
        <Card
          key={index}
          operator={currentCard.operator}
          number={currentCard.number}
          applyCard={() =>
            applyCard({
              key: index,
              operator: currentCard.operator,
              number: currentCard.number,
            })
          }
          destroyCard={() => destroyCard(index)}
        />
      ))}
    </div>
  );
}
