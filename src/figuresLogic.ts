export function moveHandler( // Вся эта конструкция проверяет первый ли ход у пешки и в зависимости от этого изменяет переменную allowMove которая решает позволить ход или нет
  diff: number,
  letters: Array<string>,
  firstMove?: boolean
) {
  const [fromLetter, toLetter] = letters;
  if (firstMove) {
    if (diff > 0) {
      if (diff < 3) {
        return true;
      } else return false;
    } else if (diff > -3 && diff !== 0) {
      return true;
    } else return false;
  } else if (diff > 0) {
    if (diff < 2) {
      return true;
    } else return false;
  } else if (diff < 0 && diff !== 0) {
    if (diff > -2) {
      return true;
    } else return false;
  }
}
