import { Iaction } from "./types/ActionTypes";

export const selectFigure = (
  figure: string,
  position: string,
  color: string
) => {
  return {
    type: "SELECT_FIGURE",
    figureName: figure,
    position: position,
    color: color,
  };
};
