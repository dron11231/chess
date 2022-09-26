import { Iaction } from "./types/ActionTypes";
import { Istate } from "./types/ChessTypes";

const initialState: Istate = {
  figure: {
    color: "",
    figureName: "",
    position: "",
  },
  move: "white",
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
        figure: {
          ...state.figure,
          color: action.color,
          figureName: action.figureName,
          position: action.position,
        },
      };
    default:
      return state;
  }
};

export default reducer;
