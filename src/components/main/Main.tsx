import React, { ReactElement, useEffect, useState } from "react";
import classes from "./Main.module.scss";
import Field from "../fields/Fields";
import { IField, Istate } from "../../types/ChessTypes";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Iaction } from "../../types/ActionTypes";

interface Props {
  fields: Array<IField>;
  generateBoard: () => Iaction;
}

const Main: React.FC<Props> = ({ fields, generateBoard }) => {
  useEffect(() => {
    generateBoard();
  }, [fields.length]);

  const fieldElems = fields.map((el) => {
    return el.element!;
  });
  return <div className={classes["game-board"]}>{fieldElems}</div>;
};

const mapStateToProps = (state: Istate) => {
  return {
    fields: [...state.fields],
  };
};

export default connect(mapStateToProps, actions)(Main);
