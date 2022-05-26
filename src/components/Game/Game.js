import React, { useState } from "react";
import Board from "./Board/Board";
import Cards from "./Cards/Cards";
import Operators from "./Operators/Operators";
import randomElement from "../../helpers/utils";

const operators = ["+", "%", "-", "x"];

const calculatorOperations = {
  x: (prevValue, nextValue) => Number(prevValue) * Number(nextValue),
  "%": (prevValue, nextValue) => prevValue / nextValue,
  "+": (prevValue, nextValue) => Number(prevValue) + Number(nextValue),
  "-": (prevValue, nextValue) => Number(prevValue) - Number(nextValue),
};

const gameOverStyle = {
  display: "flex",
  alingItems: "center",
  justifyContent: "center",
  fontSize: "60px",
  flexGrow: "1",
  flexWrap: "wrap",
};

export default function Game() {
  //States
  const [boardValue, setBoardValue] = useState(10);
  const [operationSelected, setOperationSelected] = useState(
    randomElement(operators)
  );
  const [cardsInHand, setCardsInHand] = useState([]);
  const [activeGame, setActiveGame] = useState(true);
  //Handles
  const applyCard = ({ key, operator, number }) => {
    setBoardValue(calculatorOperations[operator](boardValue, number));
    if (operator === "%" && number === 0) setActiveGame(false);
    destroyCard(key);
  };

  const destroyCard = (key) => {
    let newCards = cardsInHand.filter((_, index) => index !== key);
    setCardsInHand(newCards);
  };

  const addCard = (number) => {
    setCardsInHand([
      ...cardsInHand,
      {
        operator: operationSelected,
        number,
      },
    ]);
  };
  const handleOperationSelection = (operator) => {
    setOperationSelected(operator);
  };
  const restartGame = () => {
    setCardsInHand([]);
    setBoardValue(10);
    setOperationSelected(randomElement(operators));
    setActiveGame(true);
  };
  if (activeGame) {
    return (
      <>
        <Operators
          operators={operators}
          operationSelected={operationSelected}
          handleOperationSelection={handleOperationSelection}
        />
        <Board boardValue={boardValue} addCard={addCard} />
        <Cards
          cards={cardsInHand}
          applyCard={applyCard}
          destroyCard={destroyCard}
        />
      </>
    );
  } else
    return (
      <div style={gameOverStyle}>
        <h4 style={{ flexBasis: "100%", marginLeft: "36%" }}>Game Over</h4>
        <button onClick={() => restartGame()}>Restart</button>
      </div>
    );
}
