/* eslint-disable no-inner-declarations */
import { IField, IFigure } from "./types/ChessTypes";

function sortArray(x: IField, y: IField) {
  if (x.position < y.position) {
    return -1;
  }
  if (x.position > y.position) {
    return 1;
  }
  return 0;
}

export function moveHandler(
  // Вся эта конструкция проверяет насколько далеко в зависимости от условий может сходить фигура (пешка)
  figureOptions: IFigure,
  targetField: IField,
  fields: Array<IField>
) {
  let result;
  const [fromLetter, fromNumber] = figureOptions.position.split("");
  const [toLetter, toNumber] = targetField.position.split(""); // Деструктурируем букву и цифру позиции
  const diff = +toNumber - +fromNumber; // diff - разница в клетках между позицией фигуры и целевой позицей куда будет сделан ходs

  //Проверяем по одной ли линии будет сделан ход
  if (fromLetter === toLetter) {
    const fieldsCopy = [...fields];
    if (targetField.figureOptions.figureName) return false;
    const [positionA, positionB] = [
      figureOptions.position,
      targetField.position,
    ];
    fieldsCopy.sort(sortArray); //Сортируем массив по алфавиту и цифрам
    let idxA = fieldsCopy.findIndex((el) => el.position === positionA);
    let idxB = fieldsCopy.findIndex((el) => el.position === positionB);
    if (idxA > idxB) {
      [idxA, idxB] = [idxB, idxA]; //Если стартовый индекс больше конечного - меняем местами для правильной работы slice
    } else {
      idxA++;
      idxB++;
    }
    const figurePath = fieldsCopy.slice(idxA, idxB); //Находим путь из клеток который прошла фигура
    if (figureOptions.firstMove) {
      if (figureOptions.color === "white") {
        // Если ход белых, разница между клетками будет положительной, если черных - отрицательной
        if (diff < 3 && diff > 0) {
          result = true;
        } else result = false;
      } else if (diff > -3 && diff < 0) {
        result = true;
      } else result = false;
    } else if (figureOptions.color === "white") {
      if (diff < 2 && diff > 0) {
        result = true;
      } else result = false;
    } else {
      if (diff > -2 && diff < 0) {
        result = true;
      } else result = false;
    }
    figurePath.forEach((el) => {
      //Проверяем нет ли на пути у пешки фигур, если есть - запрещаем ход
      if (el.figureOptions.figureName) {
        result = false;
      }
    });
  }
  return result;
}
// Указания на будущее: Теперь нужно сделать логику съедания других фигур пешкой в отдельной функции
