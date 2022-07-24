/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должна быть строка «jAVAsCRIPT».
 */

const string = 'JavaScript';
// разбиваем на массив
const letters = string.split('');

let invertedString  = '';

// console.log(letters);


// for (const letter of letters) {

//     if (letter === letter.toLocaleLowerCase()) {
//         // перебираем нижний регистр
//         console.log('В нижнем регистре', letter);
//         // перезаписываем нижний в верхний
//         invertedString  += letter.toLocaleUpperCase();
//     } else {
//          // перебираем верхний регистр
//         console.log('В верхнем регистре', letter);
//          // перезаписываем нижний в нижний
//          invertedString  += letter.toLocaleLowerCase();
//     }
// }

//  console.log('invertedString:',invertedString );

// =====================================

// вариант на тернарном операторе
// const message = условие ? выражение1 : выражение2;

for (const letter of letters) {
    const isEqual = letter === letter.toLocaleLowerCase();
    
    invertedString =isEqual
    ? invertedString += letter.toLocaleUpperCase()
    : invertedString  += letter.toLocaleLowerCase();
}

console.log(invertedString);