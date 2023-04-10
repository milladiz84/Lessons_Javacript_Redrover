// let arr = ['a', 'hello', 5, -10, 'lown', true, "Privet", false, 8, 9, ['hi', true, 8, '='] ];
// //           0      1    2   3     4   5     6     7    8 , 9     10             - индексы
// let str = "Hi, what is your name?";
// // console.log(arr.length);
// // 0 1 2 3 4 5 6 7 8
// let count = 0;
// let sum = 0;
// let str2 = "";


// for(let i = 0; i < arr.length; i++ ) {
//     // ОСТАТОК ОТ ДЕЛЕНИЯ МОЖЕТ БЫТЬ НОЛЬ ИЛИ ЕДИНИЦА % - !=0 ИЛИ ==0 - ПОИСК ЧЕТНЫЙ, НЕ ЧЕТНЫЙ 

//     if(typeof arr[i] == "string" && arr[i].length %2 != 0) { // четный-не четный. 
//         console.log(arr[i])
//         //str2 = arr[i];  // вывели только все строки
//         //console.log(str);
//         //str2 += arr[i] + " "; // вывели все строки с пробелами 
//     }

// }
// console.log(str2);

// for(let i = arr.length -1; i >=0; i--){   // с конца масиива
//     console.log(arr[i]);  
// }











// for(let i = 0; i < arr.length; i++) {

//     if( i % 2 === 0) { // ЧЕТНЫЙ ЭЛЕМЕНТ МАССИВА  % - ОСТАТОК ОТ ДЕЛЕНИЯ
//         console.log(arr[i]) // вывели числа с четным элементом, текущий элемент
        
//     }
//     else {
//         console.log("Index = " +i) // вывели числа с четным индексом
//     }

// }







// for(let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number"){
//         sum += arr[i]; // сложить все числа в массиве
//         console.log(sum);

//     }
// }

// for( let i = 0; i < arr.length;  i++ ) {  // i - индекс нашего элемента
    // console.log(arr[i]); // текущий элемент массива
    //console.log(i); // i - индекс элемента массива
    // console.log(typeof arr[i]);
    // if (typeof arr[i] == "number") {
    //     count += 1; // count = count + 1;
    // }
//  }
//  console.log(count);



// let num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i=0; i < num5.length; i++) {
//     if (num5[i].length %2 == 0) {
//         console.log(num5[i]);
//     } 
//     else {
//         console.log('Error')
//     }
// }