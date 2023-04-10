// При помощи цикла for выведите чётные числа от 2 до 10

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 0;

// for (let i = 0; i < num.length; i++) {

//     if( num[i] % 2 == 0) { // ЧЕТНЫЙ ЭЛЕМЕНТ МАССИВА  % - ОСТАТОК ОТ ДЕЛЕНИЯ
//         console.log(num[i]) // вывели числа с четным элементом, текущий элемент        
//     }   

// }

// Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 

// let num1 = 1;
// let num2 = 1;
// let sign = 1;
// let answ = 0;

// num1 = Number (prompt("Введите первое  число"));
// sign = prompt(`Выберите арифмитическую операцию (*, /, +, -)`);
// num2 = Number (prompt("Введите следующее  число"));


// switch (sign) {
//     case '+':
//         answ = num1 + num2;
//         alert(`Ответ: ${answ}`);
//         break;
//     case '-':
//         answ = num1 - num2;
//         alert(`Ответ: ${answ}`);
//         break;
//     case '*':
//         answ = num1 * num2;
//         alert(`Ответ: ${answ}`);
//         break;
//     case '/':
//         answ = num1 / num2;
//         alert(`Ответ: ${answ}`);
//         break;
//     default: 
//         console.log('Number is not correct');
// }


// У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . 
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

// let arr = ['()', '(', ')', '(',  ')', '()', '(', ')', '()', ')', '()', ')', ')', '()', '(', ')'];
// let brack = '';
// let brackLeft = '';
// let brackright = '';

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == '()') {
//         brack = arr[i]
//         console.log(`Скобочки в паре: ${brack}`);        
//     }
//     else if (arr[i] == '(') {
//         brackLeft = arr[i];
//         console.log(`Скобочка без правой пары: ${brackLeft}`);   
//     }
//     else if (arr[i] == ')') {
//         brackright = arr[i];
//         console.log(`Скобочка без левой пары: ${brackright}`);   
//     }
// }

// console.log(`Скобочки в паре: ${brack}`);

// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.


// let str = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
// //         0123456789......index
// let b = '';
// let r = 0;


// str = str.split('br').join('');
// console.log(str);



// Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, 
//  которая будет шифровать и затем дешифровщик к нему

// let shifr = '';
// let decoder = '';
// let str = "It's important message, you have offer!!!";
// count = 0;

// for(let i = 0; i < str.length; i++) {
//     shifr = shifr + str[i]+'yy@';      
// }
// decoder = shifr;
// console.log(shifr);

// console.log(`DEC: ${decoder}`);
// console.log('===================================');
// //дешифратор
// decoder = decoder.split('yy@').join('');
// console.log(`Decoder: ${decoder}`);


//Нарисовать елочку и ромб  с помощью циклов

// let star = "*";
// let count = "";

// for(i=0; i<5; i++) {
//     star = star + star;
//     // console.log(star);
//     for(j=0; j<i; j++) {
//         count = count + star;
//         console.log(count); 
//     }
// }
// console.log(star);


//Нарисовать елочку и ромб  с помощью циклов


// for(let i = 0; i < 6; i ++){
//     console.log(i);
// }

// let sum = 0;
// let k = 0;
// while (k <= 3) {
   
//     sum = sum + k;
//     k++;
    
// }
// console.log(`K = ${sum} `);

//****
//****
//****

// let count = 0;
// let outStr = "";
// let flag = 3;
// while(count <4){
//     let count2 = 0;
//     while(count2 < 4){
        
//         outStr = outStr + "*";
//         count2++;
           
//     }
    
// outStr += '\n';
// count ++;     
// }
// console.log(outStr);





// for (let i = 0; i < shifr.length; i++) {
//     decoder = decoder + shifr[i]
// }






// } - 
// myArray = re.split("");

// for(let i = 0; i < arr.length; i++) {

//     if(arr == 'br') {
//         arr = re;
//         console.log(arr);
//     }
// }





// while (index < arr.length) {
//     res = console.log(arr[index]);
//     index++
//     // if (res = 'br') {
//     //     res = a;       
//     // }
// }
// console.log(arr);



    // if(count % 1 == 0){
         
    //      console.log(shifr);    
    // }
    // count = count + 1; 









// вариант 2 (сложный)
// var line = 3;
// var symbol = '*';
//     var delimetr = ' ';
//     var maxLength = line * 2 - 1;
    
// for (var i = 0; i <= line; i++) {
//       var string = '';
//       for (var j = 0; j <= maxLength; j++) {
//         var quantitySymbol = i * 2 - 1;
//         var quantityDelimetr = maxLength - quantitySymbol;
//         if (j <= quantityDelimetr / 2) {
//           string = string + delimetr;
//         }
//         if (j > quantityDelimetr / 2 && j <= maxLength - quantityDelimetr / 2) {
//           string = string + symbol;
//         }
//         if (j > maxLength - quantityDelimetr / 2) {
//           string = string + delimetr;
//         }
//       }
//       console.log(string);
//     }