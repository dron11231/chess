import React, { useState } from "react";
import classes from "./Fields.module.scss";
import { IField, IFigure } from "../../types/ChessTypes";
import { Pawn } from "../figures/Figures";

interface Props {
  fieldInfo: IField;
}

const FieldBlack: React.FC<Props> = ({ fieldInfo }) => {
  const [figureOptions, setFigureOptions] = useState<IFigure>({
    color: "",
    figure: "",
    firstMove: false,
    position: "",
    startPosition: "",
    isEatingMove: false,
    selected: false,
  });
  const numPosition = Number(fieldInfo.position.split("")[1]);

  return (
    <div className={`${classes["field-black"]} ${classes.field}`}>
      <span>{fieldInfo.position}</span>
      {numPosition === 2 || numPosition === 7 ? (
        <Pawn
          figureOptions={figureOptions}
          setFigureOptions={setFigureOptions}
        />
      ) : null}
    </div>
  );
};

const FieldWhite: React.FC<Props> = ({ fieldInfo }) => {
  const numPosition = Number(fieldInfo.position.split("")[1]);
  const [figureOptions, setFigureOptions] = useState<IFigure>({
    color: "",
    figure: "",
    firstMove: false,
    position: "",
    startPosition: "",
    isEatingMove: false,
    selected: false,
  });

  return (
    <div className={`${classes["field-white"]} ${classes.field}`}>
      <span>{fieldInfo.position}</span>
      {numPosition === 2 || numPosition === 7 ? (
        <Pawn
          figureOptions={figureOptions}
          setFigureOptions={setFigureOptions}
        />
      ) : null}
    </div>
  );
};

export { FieldBlack, FieldWhite };
