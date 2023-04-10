// FOR OF - КОНСТРУКТОР ИТЕРАТОРОВ, ИДЕТ ПЕРЕБОР ЭЛЕМЕНТОВ, 
//ПЕРЕБИРАЕМ ИТЕРИРУЕМЫМИ ЭЛЕМЕНТАМИ, ИЩЕМ ЭЛЕМЕНТЫ, У НЕГО НЕТ ИНДЕКСОВ, НО ЕСТЬ СВЯЗЬ С ЭЛЕМЕНТАМИ
// FOR OF СОЗДАЕТ МЕНЬШЕ ПРОБЛЕМ. FOR OF РАБОТАЕТ БЫСТРО

// FOR IN - ДЛЯ РАБОТЫ С ОБЪЕКТАМИ, МОЖЕМ ОБРАТИТЬСЯ К ЭЛЕМЕНТУ К ИНДЕКСУБ ДЕЛАЕМ ПРОВЕРКИ
// НО РАБОТАЕТ МЕДЛЕНЕЕ ЧЕМ FOR OF
// ПЕРЕБИРАЕТ ИНДЕКСЫ И ЭЛЕМЕНТЫ, ПОЭТОМУ МЕДЛЕНЕЕЕ. ОБЫЧНО ИСПОЛ. ДЛЯ ОБЪЕКТОВ, 
// МОЖНО ИСПОЛЬЗ. ДЛЯ МАССИВОВ,НО ЭТО ИСКУССТВЕННО
// ЕСЛИ НЕ ТРЕБУЕТСЯ ДОСТУП К ИНДЕКСУ, ЛУЧШЕ НЕ ИСПОЛЬЗОВАТЬ ЕГО
// НЕ РЕКОМЕНДУЕТСЯ ИСПОЛ. ДЛЯ МАССИВОВ

// let num2 = [1, 2, 3, 4, 5, 6, 7, 8, , 7777, 9, 10];
// let count = 0;

// for (let element of num){
//     console.log(element);
// }

// математические функции
// бибилиотека математики или методы.

// let num = 10.4566

// console.log(Math.abs(num)); // абсолют или модуль, выводит значение числа без знака минус
// console.log(Math.abs(-2));
// console.log(Math.pow(num, 3)); // возведение в степень
// console.log(num ** 3);// возведение в степень
// console.log(Math.sqrt(num)); // квадратный корень
// console.log( num ** (1/2)); // квадратный корень
// console.log(Math.sign(num)); //полож - верн 1, отриц - верн 0
// console.log(num < 0 ? -1 : num > 0 ? 1 : 0);//полож - верн 1, отриц - верн 0
// console.log(Math.floor(num)); // всегда округляет в меньшую сторону
// console.log(Math.ceil(num)); // округляется в большую сторону
// console.log(Math.round(num)); // округляется в большую сторону, если больше половины или в меньшую, по законам математики
// console.log(Math.trunc(num)); // отрезает точку с хвостиками

// //.toFixed() округляем до 2.. знаков
// console.log(num.toFixed(2)); //откусывает два знака, вовзвращает строку!!! приводит конкатинацию

// for(let i = 0; i <= 1; i+=0.1){
//     console.log(i);
// }
// //parseFloat() - откусывает кусочек с дробного числа, parseint() откусывает кусочек целого числа

// for (let i = 10; i >=0; i-=2) {
//     console.log(i);
// }
/////////////////////////////////////////////// для ОТЛАДКИ
// let name = "Anna";
// console.error(name);

// let className = "JavaScript";
// console.log(`%c${className}`, 'color: red; font-size: 23px');// %c - подключение CSS

// console.time('timer1');     //НАЧАЛО ВРЕМЕНИ ОТЛАДКИ
// let result = 0;
// for (let i = 0; i < 1000000; i++) {
//     result ++;
// }
// console.timeEnd('timer1');  /// КОНЕЦ ВРЕМЕНИ ОТЛАДКИ

// console.time('timer2');     //НАЧАЛО ВРЕМЕНИ ОТЛАДКИ
// let result2 = 0;
// for (let i = 0; i < 1000000; i++) {
//     result ++;
// }
// console.timeEnd('timer2');  /// КОНЕЦ ВРЕМЕНИ ОТЛАДКИ

// //CONSOLE.TABLE раьботает с массивом, подробный лог массивов в консоле, удобно для отладки

// let name2 = ['JavaScript2', 'Java'];
// console.table(name2);
// console.warn(name2);
// console.error(name2);

// let arr = [10, 4, 666, 777, 1, 8, 9];
// // console.log(arr);

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j <arr.length; j++ ) //I+1 следующий элемент
//         if(arr[i] < arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
// }
// console.log(arr);
// console.log(Math.max(...arr)); //макс элем в массиве
// console.log(Math.min(...arr));//мин элем в массиве

// // for (let i = 0; i < arr.length; i++) {
// //    if (Math.max(...arr)) {
// //     let temp2 = arr[i];
// //    }
// //    console.log(temp2);
// // }
// //MIN элемент в массиве
// let min=arr[0];
// for(let i = 1;  i < arr.length; i ++) {
//     if (min >arr[i]) {
//         min = arr[i]
//     }
// }



