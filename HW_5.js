// Напишите функцию с калькулятором (используйте предыдущий код), 
// в которую, в качестве параметров, передаются три переменные, две - 
// числовые и третья отвечает за знак арифметической операции (*, /, -, +)

// function calculate(a, b, operator){
//    let sum;
//    let sub;
//    let div;
//    let mul;
//     if(operator == "+") {
//         sum = a + b;       
//         return sum; 
//     }
//     else if(operator == "-"){
//         sub = a - b;
//         return sub;
//     }
//     else if(operator == "/"){
//         div = a / b;
//         return div;
//     }
//     else if(operator == '*'){
//         mul = a * b;
//         return mul;
//     }
//     else{
//         return console.log('Error');
//     }
// }
// console.log( calculate(105, 200,'*'));

//============================================================================================
//Напишите функцию, которая создает и выводит в консоль
// кастомное приветствие с именем, которое вы передаете в функцию.


//1.////////////////
const printName = function(name){
    return `Hello ${name}`
}
// //2.////////////////
function printName2(name){
    return `Hello ${name}`
}
// //3.///////////////
function printName2(name){
    return `Hello ${name}`
}
// //4.////////////
const printName3 = (name) => `Hello ${name}`;

console.log(printName('Anna'));
console.log(printName2('Lena'));
console.log(printName2('Alina'));
console.log(printName3('Olga'));

//============================================================================================
