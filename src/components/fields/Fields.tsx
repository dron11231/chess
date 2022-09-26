import React, { ReactElement, useEffect } from "react";
import classes from "./Fields.module.scss";
import { IField, Istate, IFigure } from "../../types/ChessTypes";
import { WrappedPawn } from "../figures/Figures";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../../actions";
import { Iaction } from "../../types/ActionTypes";

interface Props {
  fieldInfo: IField;
  setStartPosition: (
    figureElement: ReactElement,
    figureOptions: IFigure
  ) => Iaction;
}

const Field: React.FC<Props> = ({ fieldInfo, setStartPosition }) => {
  const numPosition = Number(fieldInfo.position.split("")[1]);
  const color = fieldInfo.color === "white" ? "field-white" : "field-black";

  useEffect(() => {
    setStartPosition(WrappedPawn);
  }, []);

  return (
    <div className={`${classes[color]} ${classes.field}`}>
      <span>{fieldInfo.position}</span>
      {numPosition === 2 || numPosition === 7 ? (
        <WrappedPawn fieldInfo={fieldInfo} fieldNumber={numPosition} />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: Istate) => {
  return { ...state };
};

export default connect(mapStateToProps, actions)(Field);
