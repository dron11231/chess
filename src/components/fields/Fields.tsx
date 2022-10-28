import React, { useEffect } from "react";
import classes from "./Fields.module.scss";
import { IField, Istate } from "../../types/ChessTypes";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Iaction } from "../../types/ActionTypes";

interface Props {
  fieldInfo: IField;
  setStartPosition: (figureName: string) => Iaction;
  fields: Array<IField>;
  moveFigure: (position: string) => Iaction;
}

const Field: React.FC<Props> = ({
  fieldInfo,
  setStartPosition,
  fields,
  moveFigure,
}) => {
  const color = fieldInfo.color === "white" ? "field-white" : "field-black";
  let figure;

  fields.forEach((el) => {
    if (el.position === fieldInfo.position) {
      figure = el.figureElement;
    }
  });
  useEffect(() => {
    setStartPosition("pawn");
  }, []);

  return (
    <div
      onClick={() => {
        moveFigure(fieldInfo.position);
      }}
      className={`${classes[color]} ${classes.field}`}
    >
      <span>{fieldInfo.position}</span>
      {figure}
    </div>
  );
};

const mapStateToProps = (state: Istate) => {
  return { ...state };
};

export default connect(mapStateToProps, actions)(Field);
