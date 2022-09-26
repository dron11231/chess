import { ReactElement } from "react";

export interface IField {
  position: string;
  color: string;
  element?: ReactElement;
  figureElement: ReactElement;
  figureOptions: IFigure;
}

export interface IFigure {
  position: string;
  figureName: string;
  color: string;
}

export interface Istate {
  whiteFigures: IFigure;
  blackFigures: IFigure;
  move: string;
  fields: Array<IField>;
}
