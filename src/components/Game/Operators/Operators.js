import React from "react";
import Operator from "./Operator";

const operatorsStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "50px",
  fontSize: "60px",
};

export default function Operators({
  operators,
  operationSelected,
  handleOperationSelection,
}) {
  return (
    <div style={operatorsStyle}>
      {operators.map((operator, index) => (
        <Operator
          key={index}
          operation={operator}
          selectedOperator={operationSelected}
          onClick={() => handleOperationSelection(operator)}
        />
      ))}
    </div>
  );
}
