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
  firstMove?: boolean;
}

export interface Istate {
  selectedFigure: IFigure;
  move: string;
  fields: Array<IField>;
}
