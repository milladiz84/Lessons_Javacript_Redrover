//function DECLARATION
// let str = 'Hello'

// function printName() {
//     return 'Welcome'
// }
// let result = printName();
// console.log(result);


// // если создать несколько функций в коде, будет читать последнюю 
// //бежит по коду и перезатирает


// function nameOfFunction(){

//     return 'Milla';
// }

// function nameOfFunction(){

//     return 'Anna';
// }
// console.log(nameOfFunction());

//function EXCPRESSION const, let===============
// переменной присваиваем функуию
// консоль лог срабатываеит всегда ниже
//ФУНКЦИЯ ОБЪЯВЛ РАНЬШЕ ВЫПОЛНЕНИЯ

// const printName = 
// function(name){
//     return `Hello ${name}`
// }
// console.log(printName('Milla'));

// СТРЕЛОЧНАЯ ФУНКЦИЯ ============================

// const printName = (name) => {
//     let greeting =  `Hello ${name}`;
//     return 'Good ' + greeting;
// };
// console.log(printName('Milla'));

//////////////////////////////////
// const printName2 = (name) => `Hello ${name}`;//НЕ ПИШЕМ RETURN. НЕ ЯВНЫЙ ВОЗВРАТ

// console.log(printName('Milla'));

// const sum = (num1, num2) => `${num1} + ${num2} = ${num1} + ${num2}`
// console.log(sum(10, 20));

// CALL BACK FUNCTIONS
// это функция которая передается как аргумент в другую функцию

function additional (num1, num2) {
    return num1 + num2;
}

function substraction (num1, num2) {
    return num1 - num2 ;
}
function mult (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}
function module (num1, num2) {
    return num1 % num2;
}

function calculator (a, b, callback) {
    return callback(a, b); //  CALLBACK
}


console.log(calculator(100, 10, (num1, num2) => num1 * num2 + 250 / 2));
console.log(calculator(100, 10, additional));



// let result = (calculator(100, 10, substraction));
// console.log(result)
// console.log(result);//

////////////////////////////////////////DECLARATION

// const additional = (num1, num2) => {
//     return num1 + num2;
// }

// const substraction = (num1, num2) => {
//     return num1 - num2;
// }
//////////////////////////////////////////////


// function result (
// num1,
// num2,
// product = function (num1, num2) {
//     return num1 * num2;
//     }
// ) {
//     return product(num1, num2);
// } 

// console.log(result(10, 50, product));

// const product = (num1, num2) => num1 * num2;

////////////////////////////////////////////////////////////////////////////
// function result (num1, num2, callback){
//     return callback (num1, num2);
// }
   

// console.log(result(10, 20, (a, b) => a + b));
// //                         callback 
// console.log(result('b', 'a', (a, b) => a + b + b/a + b));
/////////////////////////////////////////////////////////////////////////////

// const result = (num1, num2) => num1 * num2;



///////////////////////////////////////////////////////CALLBACK
// function result(num1, num2, product2){
//     return product2(num1, num2)
// }

// console.log(result(10, 20, (num1, num2) => num1 * num2))//безымянная функ

////////////////////////////////////////////////////////////////////////////////


// function sum(num1, num2) {
//     return num1 + num2 + num3;
// }
// console.log(sum(10, 20));

// ДОСТУП К АРГУМЕНТАМ, если их много:

// function sum() { // без парамеитров, можно завести много чисел, массив
//     let result = 0;
//     for(let i = 0; i <arguments.length; i++){ //arguments позволяет работать с параметрами которые зайдут
//         result +=arguments[i];
//     }
//     return result
// }
// console.log(sum(10, 20, 484884, 488484));

// function sum2() {
//     let result = 0;
//     for (el of arguments) {
//         result += el
//     }
//     return result;
// }
// console.log(sum2(10, 20, 484884, 88));
