// ЗАДАЧА!
// напиши скрипт выбора стоимости отеля по кол - ву звезд
// 1-20$, 2-30$, 3-50$ , 4-70$, 5-120$

// если в переменной stars что-то кроме от1-5,
//  выведите сообщение "Такого кол-ва звезд нет "

// const stars = 1;
// let price;

// if (stars === 1) {
//    price = 20;
// } else
// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }
// console.log(price);


// если сравнивать одну переменную с рядом значений используем switch
// (stars) {
//     case 1:
//         price = 20;
//     console.log('Цена одной звезды: ');
//         break;
//     case 2:
//         price = 30;
//             console.log('Цена ...: ');
//         break;
//     case 3:
//         price = 50;
//             console.log('Цена ...: ');
//         break;
//     case 4:
//         price = 70;
//             console.log('Цена: ');
//         break;
//     case 5:
//         price = 120;
//             console.log('Цена: ');
//         break;
//     // если ничего не подошло то выполнится кейс по умолчанию default
//     default:
//        console.log('Такого кол-ва звезд нет');
// }
// console.log(price);


// ЗАДАЧА!
// напиши скрипт выбора стоимости отеля по кол - ву звезд
// 1 и 2-20$, 3 и 4-30$, 5 -50$

// если в переменной stars что-то кроме от1-5,
//  выведите сообщение "Такого кол-ва звезд нет "

//  на  операторе if
// const stars = 2;
// let price;

// if (stars === 1 || stars===2) {
//    price = 20;
// } else
// if (stars === 3 || stars === 4) {
//     price = 30;
// } else
//     if (stars === 5) {
//         price = 50;
//     }
//     else { console.log('Такого кол-ва звезд нет'); }
   

// console.log(price);

//  на  операторе switch

const stars = 4;
let price;

switch (stars) {
    case 1:
    case 2:
        price = 20;
        break;
    case 3:
    case 4:
        price = 30;
        break;
    case 5:
        price = 50;
        break;
    
    default:
        price='Такого кол-ва звезд нет';
}

//  console.log(price);

// ЗАДАЧА! switch
//  * Напиши скрипт выбора опции доставки товара.
//  * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
//  *
//  * В переменную message записать сообщение в зависимости от опции.
//  * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
//  * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
//  * - 'Посылка будет отправлена сегодня'
//  * - 'Вам перезвонит менеджер'

// задать переменные
const option = 2;
let message = ' ';

// сделать  switch 1 2 3
switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
        break;
    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;
    // в каждом кейсе записать строку
    default:
        message='Вам перезвонит менеджер';
}

// сделать лог меседж
console.log(message);
