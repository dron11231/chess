import React from "react";
import classes from "./Figures.module.scss";
import pawnImg from "./pawn.png";
import { IFigure } from "../../types/ChessTypes";

interface Props {
  figureOptions: IFigure;
  setFigureOptions: React.Dispatch<React.SetStateAction<IFigure>>;
}

const Pawn: React.FC<Props> = ({ figureOptions, setFigureOptions }) => {
  return (
    <div className={classes.pawn}>
      <img src={pawnImg} />
    </div>
  );
};

export { Pawn };
