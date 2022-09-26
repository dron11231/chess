import React, { ReactElement, useEffect, useState } from "react";
import classes from "./Main.module.scss";
import { Field } from "../fields/Fields";
import { IField } from "../../types/ChessTypes";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Main: React.FC = () => {
  const [fields, setFields] = useState<IField[]>([]);
  const [fieldElems, setFieldElems] = useState<ReactElement[]>([]);
  const nums = [8, 7, 6, 5, 4, 3, 2, 1];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  useEffect(() => {
    setFields(() => {
      const newArr: IField[] = [];
      nums.forEach((el: number) => {
        for (let i = 0; i < 8; i++) {
          newArr.push({ position: letters[i] + el, color: "" });
        }
      });
      let counter = 0;
      newArr.reduce((acc: IField, value: IField, idx) => {
        counter++;

        if (idx === 1) {
          acc.color = "white";
          acc.element = <Field fieldInfo={acc} key={acc.position} />;
        }
        if (acc.color === "white") {
          value.color = "black";
          value.element = <Field fieldInfo={value} key={value.position} />;
        } else {
          value.color = "white";
          value.element = <Field fieldInfo={value} key={value.position} />;
        }

        if (counter === 8) {
          counter = 0;
          if (acc.color === "black") {
            value.color = "black";
            value.element = <Field fieldInfo={value} key={value.position} />;
          }
          if (acc.color === "white") {
            value.color = "white";
            value.element = <Field fieldInfo={value} key={value.position} />;
          }
        }

        return (acc = value);
      });

      return newArr;
    });
  }, []);

  useEffect(() => {
    setFieldElems(() => {
      const newArr = fields.map((el) => {
        return el.element!;
      });
      return newArr;
    });
  }, [fields]);

  return <div className={classes["game-board"]}>{fieldElems}</div>;
};

const mapStateToProps = (state: { fields: Array<IField> }) => {
  return {
    fields: [...state.fields],
  };
};

export default connect(mapStateToProps, actions)(Main);
