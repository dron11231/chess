import React from "react";
import classes from "./Figures.module.scss";
import WhitePawn from "./white-pawn.png";
import BlackPawn from "./black-pawn.png";
import { IField } from "../../types/ChessTypes";
import { IFigure } from "../../types/ChessTypes";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { Iaction } from "../../types/ActionTypes";

interface Props {
  fieldInfo: IField;
  fieldNumber: number;
  figure?: IFigure;
  selectFigure: (figure: string, position: string, color: string) => Iaction;
}

const Pawn: React.FC<Props> = ({
  fieldInfo,
  fieldNumber,
  figure,
  selectFigure,
}) => {
  const figureColor = fieldNumber === 2 ? "white" : "black";
  return (
    <div
      className={
        figure?.position === fieldInfo.position
          ? `${classes.pawn} ${classes.selected}`
          : classes.pawn
      }
      onClick={() => {
        selectFigure("pawn", fieldInfo.position, figureColor);
      }}
    >
      <img src={figureColor === "white" ? WhitePawn : BlackPawn} />
    </div>
  );
};

const mapStateToProps = (state: IFigure) => {
  return { ...state };
};

const WrappedPawn = connect(mapStateToProps, actions)(Pawn);

export { WrappedPawn };
