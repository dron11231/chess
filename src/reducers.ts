import { Iaction } from "./types/ActionTypes";
import { Istate } from "./types/ChessTypes";

const initialState: Istate = {
  whiteFigures: {
    figureName: "",
    position: "",
  },
  blackFigures: {
    figureName: "",
    position: "",
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
    default:
      return state;
  }
};

export default reducer;
