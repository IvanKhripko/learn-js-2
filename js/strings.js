// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым 
// символом.Например:
// ucFirst("вася") == "Вася";

// function ucFirst(str) {
//     // return str.slice(0, 1).toUpperCase() + str.substr(1);
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
//     // let newStr = str[0].toUpperCase() + str.slice(1);
//     // return newStr;
// }

// console.log(ucFirst('вася'));

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' 
// или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// function checkSpam(str) {

//     let lowerStr = str.toLowerCase();
//     let checkWord1 = 'viagra';
//     let checkWord2 = 'XXX';

//     return lowerStr.includes(checkWord1.toLowerCase()) || lowerStr.includes(checkWord2.toLowerCase());
// }

// console.log(checkSpam('buy ViAgRA now'));  //== true
// console.log(checkSpam('free xxxxx')); // == true
// console.log(checkSpam("innocent rabbit"));  //== false

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
//     если она превосходит maxlength, заменяет конец str на "…", так, чтобы её 
//     длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо,
//     если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//     let additionMsg = '...'
//     // return str.length;
//     return str.length > maxlength
//         ? str.slice(0, maxlength - 1) + `${additionMsg}`
//         : str;
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// // "Вот, что мне хотело…"

// console.log(truncate("Всем привет!", 20));// "Всем привет!"

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
//  числовое значение и возвращать его.

//создать строку со стоимостью
//  сздать фн, которая из єтой строки выделять числовое значение и возвращать его

// function extractCurrencyValue(str) {
    
//     return Number(str.slice(1));
//     }


// console.log(extractCurrencyValue('$120')); 