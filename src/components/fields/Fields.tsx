import React from "react";
import classes from "./Fields.module.scss";
import { IField } from "../../types/ChessTypes";
import { WrappedPawn } from "../figures/Figures";

interface Props {
  fieldInfo: IField;
}

const Field: React.FC<Props> = ({ fieldInfo }) => {
  const numPosition = Number(fieldInfo.position.split("")[1]);
  const color = fieldInfo.color === "white" ? "field-white" : "field-black";

  return (
    <div className={`${classes[color]} ${classes.field}`}>
      <span>{fieldInfo.position}</span>
      {numPosition === 2 || numPosition === 7 ? (
        <WrappedPawn fieldInfo={fieldInfo} fieldNumber={numPosition} />
      ) : null}
    </div>
  );
};

export { Field };
