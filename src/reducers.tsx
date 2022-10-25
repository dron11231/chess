/* eslint-disable no-case-declarations */
import React from "react";
import { Iaction } from "./types/ActionTypes";
import { Istate } from "./types/ChessTypes";
import { WrappedPawn } from "./components/figures/Figures";
import { moveHandler } from "./figuresLogic";

const initialState: Istate = {
  selectedFigure: {
    figureName: "",
    position: "",
    color: "",
  },

  move: "white",
  fields: [],
};

const reducer = function (
  state: Istate = initialState,
  action: Iaction
): Istate {
  switch (action.type) {
    case "SELECT_FIGURE":
      if (action.color !== state.move) return state;

      return {
        ...state,
        selectedFigure: {
          ...state.selectedFigure,
          figureName: action.figureName,
          position: action.position,
          color: action.color,
        },
      };

    case "GENERATE_BOARD":
      return { ...state, fields: action.fields };

    case "SET_START_POSITION":
      const newArr = [...state.fields];
      if (action.figureName === "pawn") {
        newArr.forEach((el) => {
          const numOfPosition = Number(el.position.split("")[1]);
          if (numOfPosition === 2) {
            el.figureElement = (
              <WrappedPawn figureColor="white" fieldInfo={el} />
            );
            el.figureOptions.figureName = action.figureName;
            el.figureOptions.position = el.position;
            el.figureOptions.firstMove = true;
            el.figureOptions.color = "white";
          } else if (numOfPosition === 7) {
            el.figureElement = (
              <WrappedPawn figureColor="black" fieldInfo={el} />
            );
            el.figureOptions.figureName = action.figureName;
            el.figureOptions.position = el.position;
            el.figureOptions.firstMove = true;
            el.figureOptions.color = "black";
          }
        });
      }

      return { ...state, fields: newArr };

    case "MOVE_FIGURE":
      const fields = [...state.fields];
      let selectedFigure = { ...state.selectedFigure };
      let move = state.move;
      if (state.selectedFigure.position) {
        fields.forEach((el) => {
          if (el.position === selectedFigure.position) {
            if (selectedFigure.position !== action.position) {
              const targetField = fields.find((elem) => {
                return elem.position === action.position;
              }); //Находим поле на которое должна переместиться фигура
              if (targetField) {
                if (
                  targetField.figureOptions.color !== el.figureOptions.color
                ) {
                  if (selectedFigure.figureName === "pawn") {
                    const [fromLetter, fromNumber] =
                      el.figureOptions.position.split("");
                    const [toLetter, toNumber] = targetField.position.split(""); // Деструктурируем букву и цифру позиции
                    const diff = +toNumber - +fromNumber;
                    const allowMove = moveHandler(
                      //Функция проверяющая можно ли делать ход
                      el.figureOptions,
                      targetField,
                      fields
                    );
                    if (allowMove) {
                      // Если ход разрешен перемещаем фигуру и её настройки на целевое поле, на старом поле фигуру удаляем
                      targetField.figureElement = (
                        <WrappedPawn
                          figureColor={el.figureOptions.color}
                          fieldInfo={targetField}
                        />
                      );
                      el.figureOptions.firstMove = false;
                      targetField.figureOptions = {
                        ...el.figureOptions,
                        position: action.position,
                      };
                      selectedFigure = {
                        figureName: "",
                        color: "",
                        position: "",
                      };
                      el.figureElement = <></>;
                      el.figureOptions = {
                        figureName: "",
                        color: "",
                        position: "",
                      };
                      move = move === "white" ? "black" : "white"; //После хода одной из фигур передаем право хода другому цвету
                    }
                  }
                }
              }
            }
          }
        });
      }
      return { ...state, fields, selectedFigure, move };

    default:
      return state;
  }
};

export default reducer;
