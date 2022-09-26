import React from "react";
import { Iaction } from "./types/ActionTypes";
import { Field } from "./components/fields/Fields";
import { IField } from "./types/ChessTypes";

export const selectFigure = (
  figure: string,
  position: string,
  color: string
): Iaction => {
  return {
    type: "SELECT_FIGURE",
    figureName: figure,
    position: position,
    color: color,
  };
};

export const generateBoard = (): Iaction => {
  const nums = [8, 7, 6, 5, 4, 3, 2, 1];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const newArr: IField[] = [];
  nums.forEach((el: number) => {
    for (let i = 0; i < 8; i++) {
      newArr.push({ position: letters[i] + el, color: "" });
    }
  });
  let counter = 0;
  newArr.reduce((acc: IField, value: IField, idx) => {
    counter++;

    if (idx === 1) {
      acc.color = "white";
      acc.element = <Field fieldInfo={acc} key={acc.position} />;
    }
    if (acc.color === "white") {
      value.color = "black";
      value.element = <Field fieldInfo={value} key={value.position} />;
    } else {
      value.color = "white";
      value.element = <Field fieldInfo={value} key={value.position} />;
    }

    if (counter === 8) {
      counter = 0;
      if (acc.color === "black") {
        value.color = "black";
        value.element = <Field fieldInfo={value} key={value.position} />;
      }
      if (acc.color === "white") {
        value.color = "white";
        value.element = <Field fieldInfo={value} key={value.position} />;
      }
    }

    return (acc = value);
  });
  return { type: "GENERATE_BOARD", fields: newArr };
};

/* export const getStartPosition = (position: string) => {
  
} */
