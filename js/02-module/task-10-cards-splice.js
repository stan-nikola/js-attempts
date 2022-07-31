
// /*
//  * Работем с коллекцией карточек в trello
//  * - Метод splice()
//  * - Удалить
//  * - Добавить
//  * - Обновить
//  */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// // console.table(cards);

// /*
//  * Удаление (по индексу), метод indexOf()
//  */

// const cardToRemove = 'Карточка-3';

// // узнаем индекс элемента
// const index = cards.indexOf(cardToRemove);
// console.table(index);

// // удаляем элемент из массива
// // cards.splice(с какого номера индекса, сколько удалить элементов с индекс позиции);
// cards.splice(index, 1);

// console.table(cards);

// /*
//  * Добавление (по индексу)
//  */

// const cardToInsert1 = 'Карточка-ADD-1';
// const cardToInsert2 = 'Карточка-ADD-2';

// cards.splice(index, 0, cardToInsert1, cardToInsert2 );

// console.table(cards);

// /*
//  * Обновление (по индексу)
//  */

// const cardToUpdate = 'Карточка-Update';

// // удаление с заменой
// cards.splice(3, 1 , cardToUpdate);

// console.table(cards);


// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Bingo"];
// console.log(clients.slice(1, 2));

const array = ['Earth', 'Mars', 'Venus'];
//   // Change code below this line
// let firstAndLast;
//    firstAndLast = `${array[0]}, ${array[array.length-1]}`;
//   // Change code above this line

// console.log(firstAndLast);



//   // Change code below this line
// let firstAndLast;
// firstAndLast = `${array[0]}, ${array[array.length-1]}`;
//   // Change code above this line
// console.log(firstAndLast);

function getExtremeElements(array) {
  // Change code below this line

 const firstAndLastEL=array.splice(0, 3  )
 
 

  // console.log(firstEl); 
  console.log(firstAndLastEL); 
   
  // return firstAndLast;
  // Change code above this line
}
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);
