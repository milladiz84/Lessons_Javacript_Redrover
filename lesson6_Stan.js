// РЕКУРСИЯ
// функция с пощью аргументов

// function sum() {
//     let results = 0;
//     for(el of arguments) {
//         results += el
//     }
//     return results;
// }
// console.log(sum(10, 20, 30, 50));

//---------------------------------РЕКУРСИЯ ------------------------------------

// Рекурсия - вызов функции самой себе
// рекурсию нельзя ставить до условия, не будет работать 
// let count = 0;
// function recursion() {
//     count ++
//     console.log(count);  
//     if (count > 50)     return //return - для функции, break для циклов
//     recursion()     
// }

// recursion();

// function recursion2(a, b){
//     console.log("Hi, hello");
//     res = a / b
//     count ++   
//     if (count > 8) return res
//     recursion2()
// }
// recursion2(12, 5)
// console.log(recursion2(12, 4));

//////////////////FACTORIAL task

//1! = 1
//2! = 1 * 2
//3! = 1 * 2 * 3
// 4! = 1 * 2 * 3 * 4

// function factorial_1(n){
//     let p = 1;
//     for(let i = 1; i <= n; i++){
//         p *= i;
//     }
//     return p
// }
// console.log(factorial_1(180));

//Factorial с рекурсией
let res = 1;
function factorial_rec(n) {
    if(n == 0) return;    
    res *= n;  
    factorial_rec(n - 1)
}
factorial_rec(2)
console.log(res);

function factorial_3(n){
    return
}




