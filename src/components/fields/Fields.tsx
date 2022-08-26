import React from "react";
import classes from "./Fields.module.scss";
import { IField } from "../../types/ChessTypes";

interface Props {
  fieldInfo: IField;
}

const FieldBlack: React.FC<Props> = ({ fieldInfo }) => {
  return (
    <div
      data-color="black"
      className={`${classes["field-black"]} ${classes.field}`}
    >
      <span>{fieldInfo.position}</span>
    </div>
  );
};

const FieldWhite: React.FC<Props> = ({ fieldInfo }) => {
  return (
    <div
      data-color="white"
      className={`${classes["field-white"]} ${classes.field}`}
    >
      <span>{fieldInfo.position}</span>
    </div>
  );
};

export { FieldBlack, FieldWhite };
