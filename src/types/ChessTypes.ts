import { ReactElement } from "react";

export interface IField {
  position: string;
  color: string;
  element?: ReactElement;
}

export interface IFigure {
  position: string;
  figureName: string;
}

export interface Istate {
  whiteFigures: IFigure;
  blackFigures: IFigure;
  move: string;
  fields: Array<IField>;
}
