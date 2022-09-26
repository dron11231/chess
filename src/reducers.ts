/* eslint-disable no-case-declarations */
import { Iaction } from "./types/ActionTypes";
import { Istate } from "./types/ChessTypes";

const initialState: Istate = {
  whiteFigures: {
    figureName: "",
    position: "",
    color: "white",
  },
  blackFigures: {
    figureName: "",
    position: "",
    color: "black",
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
      if (action.color === "white") {
        return {
          ...state,
          whiteFigures: {
            ...state.whiteFigures,
            figureName: action.figureName,
            position: action.position,
          },
        };
      } else {
        return {
          ...state,
          blackFigures: {
            ...state.whiteFigures,
            figureName: action.figureName,
            position: action.position,
          },
        };
      }

    case "GENERATE_BOARD":
      return { ...state, fields: action.fields };

    case "SET_START_POSITION":
      const newArr = [...state.fields];
      if (action.figureOptions.figureName === "pawn") {
        newArr.forEach((el) => {
          const numOfPosition = Number(el.position.split("")[1]);
          if (numOfPosition === 2) {
            el.figureElement = action.figureElement;
            el.figureOptions = action.figureOptions;
            el.figureOptions.color = "white";
          } else if (numOfPosition === 7) {
            el.figureElement = action.figureElement;
            el.figureOptions = action.figureOptions;
            el.figureOptions.color = "black";
          }
        });
      }

      return { ...state, fields: newArr };

    default:
      return state;
  }
};

export default reducer;
