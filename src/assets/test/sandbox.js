/**
 * Returs the biggest latest index of arg strings.
 * @param string - String in with will be searching
 * @param a - first letter for searching
 * @param b - second letter for searching
 * @return {number} - index of bigger index or (-1) if failes search
 */
function findLatestIndexInString(string, a, b) {
  if (typeof string !== 'string' || typeof a !== 'string' || typeof b !== 'string') {
    throw new Error("Params of 'findLatestIndexInString' must be strings");
  }
  if (string.match(/^$/)) {
    return -1;
  }

  const stringLength = string.length;
  let aIndex = -1;
  let bIndex = -1;

  // -------------------- Оставляю для проверки.
  // while ((aIndex === -1) && (bIndex === -1) && (stringLength > 0)) {
  //   // console.log(s.substring(i, i + 1));
  //   if (string.substring(stringLength, stringLength + 1) === a) {
  //     aIndex = stringLength;
  //   }
  //   if (string.substring(stringLength, stringLength + 1) === b) {
  //     bIndex = stringLength;
  //   }
  //   stringLength -= 1;
  // }

  // --------------------- Замена while. Можно истользовать и forEach.
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j <= stringLength; j++) {
    if (string[j] === a) aIndex = j;
    if (string[j] === b) bIndex = j;
  }
  // --------------------- Замена while. Можно истользовать и forEach но break сделать нельзя.

  // ------- Я не понимаю это так задумано (исходя из логики) что такая логическая путаница тут
  // ------- но судя по всему этого не надо. Ведь даже в крайнем случае Math.max(-1, -1) будет -1
  // if (aIndex !== -1) {
  //   if (bIndex === -1) {
  //     return aIndex;
  //   }
  //   return Math.max(aIndex, bIndex);
  // }
  //
  // if (bIndex !== -1) {
  //   return bIndex;
  // }
  // -------- До сих пор этот странный код шел

  return Math.max(aIndex, bIndex); // Math.max(-1, -1) будет -1.
  //                                  Что вы и хотите выводить в крайних случаях.
}

console.log(findLatestIndexInString('1234567890', '2', '9'));

// 1) не использовал бы var. Тк они не замыкаются в функции
// 2) не сипользовал бы == тк они не сравнивают по типу. А если будут разные типы,
// то код может мовести себя неадекватно (приведение типов js)
// 3) Не называл бы функцию func. Придумал что то бы более говорящее.
// 4) Не называл бы функцию func. Придумал что то бы более говорящее.
// 5) Много проверко if и еще вложеных друг в друга. Лучше погрупировать. Пример: строка 2
// 6) Не было проверки на то что все парамеры входящие должны быть строкой.
// Теоретически можно еще проверок понавешивать.
// 7) Сейчас скрипт поддерживает только 2 параметрая для поиска.
// Можно разширить функционал передавая множество парамертов
// и получать их в функции ...args.
