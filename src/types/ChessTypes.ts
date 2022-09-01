import { ReactElement } from "react";

export interface IField {
  position: string;
  color: string;
  element?: ReactElement;
}

export interface IFigure {
  color: string;
  firstMove: boolean;
  position: string;
  figure: string;
  startPosition: string;
  isEatingMove: boolean;
  selected: boolean;
}
