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
  const numPosition = Number(fieldInfo.position.split("")[1]);
  const color = fieldInfo.color === "white" ? "field-white" : "field-black";
  let figure;

  fields.forEach((el) => {
    if (el.position === fieldInfo.position) {
      figure = el.figureElement;
    }
  });
  useEffect(() => {
    /* if (numPosition === 7 || numPosition === 2) {
      console.log(numPosition); */
    setStartPosition("pawn");
    /* } */
  }, []);

  return (
    <div
      onClick={() => {
        console.log("click");
        moveFigure(fieldInfo.position); //Нужно разобраться с кликами, тк когда происходит клик по фигуре, то и по клетке тоже
      }}
      className={`${classes[color]} ${classes.field}`}
    >
      <span>{fieldInfo.position}</span>
      {figure}
      {/* {numPosition === 2 || numPosition === 7 ? (
        <WrappedPawn fieldInfo={fieldInfo} fieldNumber={numPosition} />
      ) : null} */}
    </div>
  );
};

const mapStateToProps = (state: Istate) => {
  return { ...state };
};

export default connect(mapStateToProps, actions)(Field);
