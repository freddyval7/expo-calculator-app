import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(null);

  useEffect(() => {
    //TODO: calcular subResultado
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    // Verificar si ya existe punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      //Si es diferente de cero, no hay punto y es primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      //Evitar el 00000.00
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    //Props
    formula,
    number,
    prevNumber,

    //Methods
    buildNumber,
  };
};
