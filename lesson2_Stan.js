// const name = "";
// let age = 40;
// console.log(age);
// переменная не должна начинаться с цифры. С _, $, буква - нормально JQUery - с доллара
// "use strict"
// 8 основых типов данных: 1) big integer (для больших чисел, больше чем 2 в 53 степени),
// 2) string; 3) boolean; 4) number; 5)null; 6)underfine; 7) object: все массивы; 8)symbol. 
// JSON - объекты
//(typeof(внутри переменная))

// let numBig = 10n; // big integer
//Null - либо пусто либо на данный момент значение не известно, это объект
// null - это отдельный класс, но попадает в объекты,в переменную мы кладем  null
// object - сложный тип, или reference тип, остальное примитивные типы
// let nik = null;

//underfined
// console.log(typeof nik)

// && - этот оператор возвращает первое ложное значение (если оно есть); если все аргументы верны, то возвращается значение последнего аргумента.
// || - этот оператор возвращает последнее ложное значение или "запинается" на правде.
 
//document.write("Hello, world!!!!!");
// console.log(num)
// Три вида оператора: унарный, тернарный, бинарный
//Унарный оператор: работает с одним операндом:
// let num1 = "1";
// let num2 = "2";

// //console.log(+num1 + +num2); // + привел тип из стокового в числовой
// console.log(Number(num1) + Number(num2));// Number привел тип из стокового в числовой
// let response = prompt("hi", 888);
// //alert(response);
// if (typeof (Number(response)) == 'string'){
//     alert("thank you");
// }
// else{
//     alert('error');
// }
//---------------------------------------Number-----
// underfined -->Nan
// null --> 0;
// true --> 1;
// false --> 0;
// let test = 5;
// if(test >= 1 && test <=4) {
//     console.log("true");
// }
// else{
//     console.log ("false")
// }
// console.log(Number(test))
///&& - (true && true) - true; (true&&false, false&&false,false&&true) - false
//|| - (false||false) - false; (true||false, true||true, false||true) - true

// let num = 100;
// if (num <= 7 || num >= 10 || num != 100) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }
// Если работаем с логическим || - интерпретатор ищет первое истинное значение
// Если работаем с логическим && - интерпретатор ищет первое ложное значение

//console.log (1 && null && 4);
// console.log(null || 3 && 4 || 5);
// // СНАЧАЛА ИНТЕР. ПРОВЕРЯЕТ 3&&
// // NULL || 4 || 5 - ИЩЕТ ПЕРВОЕ ИСТИННОЕ ЗНАЧЕНИЕ, ЭТО 4, ТАК КАК NULL - ЭТО НОЛЬ(ЛОЖЬ)
// console.log(null || 3 && null || null);

// унарные операторы +-
// тернарный оператор ----------------------------------------------------

// let test1 = 2;
// let test2 = 3;

// if (test1 > test2) {
//     console.log ("It's true");
// } else {
//     console.log ("It's false");
// }
//КОНСТРУКЦИЯ ТЕРНАРНОГО ОПЕРАТОРА (? )-IF (:) - ELSE (УСЛОВИЕ - ПРАВДА - Не ПРАВДА)
// test1 < test2 ? console.log ("It's true") : console.log ("It's false");
// Тернарный оператор не рекомендуется в использовании программирования, реком. использовать в простых случаях