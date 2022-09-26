import { ReactElement } from "react";

export interface IField {
  position: string;
  color: string;
  element?: ReactElement;
}

export interface IFigure {
  color: string;
  position: string;
  figureName: string;
}

export interface Istate {
  figure: IFigure;
  move: string;
}
