let arr = ['a', 'b', 'c', 'd', 'e'];
let string = 'abcdefgh';
let string2 = 'jklzxcvvbnm';

//=================ОТЛИЧИЕ STRING ОТ ARRAY============================

//ЕСЛИ ХОТИМ ВЫВЕСТИ КАКОЙ ТО ОДИН СИМВОЛ, МОЖЕМ ОБРАТИТЬСЯ ПО ИНДЕКСУ
// console.log(string[2]);
// string[2] = 't'
// console.log(string[2]); //стринг не смогли присвоить букву

// arr[2] = 'r'
// console.log(arr[2]); // массив смогли присвоить букву


//----------------SPLIT()===JOIN()====================================(МЕТОД STRING)========

//SPLIT() ДЕЛИТ СТРОКУ ПО УКАЗАННОМУ РАЗДЕЛИТЕЛЮ И ВОЗВРАЩАЕТ МАССИВ
//SPLIT(""); => ВОЗВРАЩАЕТ МАССИВ ВСЕХ СИМВОЛОВ

// let string2 = 'HelloWorld'
// // console.log(string2.split(" ")); // вывел массив из букв между пробелами
// // console.log(string2.split("")); // вывел массив из букв 
// // console.log(string2.split(", ")); // вывел массив из букв 
// let newString = string2.split("o") // можно перезаписать стринг и разделить по букве или пробелу
// console.log(newString);
// console.log(string.split(""));

// //JOIN собирает буквы вместе, рабоатет только с ARRAY
// console.log(newString.join()); // возвр с запятыми
// console.log(newString.join("")); // без запятых
// console.log(newString.join("KLH")); // добавляет буквы

//==================POP/PUSH, SHIFT/UNSHIFT ==================================

//PUSH => ДОБАВЛЯЕТ ЭЛЕМЕНТ(Ы) В КОНЕЦ
//POP => УДАЛЯЕТ ПОСЛЕДНИЙ ЭЛЕМЕНТ (И ВОЗВРАЩАЕТ ЭТОТ ЭЛЕМЕНТ!) работает с ARRAY

// console.log(arr);
// arr.push('q', 'v', 'f') // доюавил элементы в конец массива, изменил его
// console.log(arr);
// arr.push('m', 'i', 'l', 'a')
// console.log(arr);
// arr.push('4', '5', '3', '1')
// console.log(arr);
// /////////////////////////////POP работает с ARRAY,нельзя использ для STRING
// let pop1 = arr.pop() //удаляет один знак с конца
// console.log(arr);
// console.log(pop1); // элемент перешел в эту переменную

// STRING в JS нельзя изменить, только если произвести манипуляцию


// ======================UNSHIFT() SHIFT()===================================


//unshif() => добавляет элементы в начадло массива

// const bigLetters = ['A','B','C','D','F','J','H','D','KK4'];
// bigLetters.unshift(string, arr, [1, 2, 3], {}, 'Pi', 'AP', "Nd", 'Pav', 'Anna'); // добавил в начало массива
// console.log(bigLetters); 


// ////shift() => удаляет элемент в начале,сдвигая очередь, так что второй элемент 
// //...становится первым
// let bigletter2 = bigLetters.shift(); // удалил вначале первый элемент
// console.log(bigLetters);
// console.log(bigletter2);

//взял букву с конца и добавил в начало


//========================ОБЪЕДИНЕНИЕ МАССИВОВ==================================

// Concatenation      ARRAY => STRING  => возвращает все значения в  STRING
// let bigLetters3 = ['A','B','C','D','F','J','H','D','KK4'];
// let bigLetters4 = ['a','b','c','d','f','j','hH','d','k4'];
// console.log(bigLetters3 + "" + bigLetters4 ); //слепили два массива в одну СТРОКУ
// let newString = bigLetters3 + "" + bigLetters4;
// console.log(newString);
// let str1 = string + "" + bigLetters3; // объединили строку + массив
// console.log(str1);
// let str2 = string + "" + string2; // объединили две строки 
// console.log(str2);

// /////////////////////CONCAT() ////////////////////

// let girls = ["Anna", "Milla"];
// let boys = ["Pavel", "Alex", "Den"];
// let grand = ["grandma", "grandpa"]

// const family = girls.concat(boys, grand, string, string2, arr ); //можно добавлять много
// console.log(family);
// const family2 = boys.concat(girls); //склеял array
// console.log(family2);
// let manyStrins = string.concat(string2)//склеял string
// console.log(manyStrins);

// =======================PUSH() + spread operator... =============================

//spread оператор позволяет раскрыть массив и обращаться к элементам напрямую, как будто нет массива
// работает как и CONCAT


// let arrOne = [1, 2, 3, 4, 5];
// let arrTwo = ['A','B','C','D'];
// let q = "English";
// let p = "lesson";
// console.log(...arrOne); // spread показывает строку, не преобразует 
// const arr3 = [...arrOne, ...arrTwo] // сложил вместе массивы
// console.log(arr3.push(q, p));// push добавили значения переменных
// console.log(...arr3, ...q, ...string); // склеиваеи и массив и переменную и строку
// console.log(arr.push(...string)); // показывает кол-во элементов
// console.log(arr);

//=================spread operator(...) =============================================

// const numbers = [1, 2, 3, 5,61, 888, 6];
// console.log(numbers);
// console.log(...numbers);

// /////////////////////////////////поиск MAXIMUM

// console.log(Math.max(numbers)); //Math не работает с массивом, поэтому доб SPREAD
// console.log(Math.max(...numbers)); //Math раб со  SPREAD
// console.log(Math.min(...numbers)); //Math раб со  SPREAD

//=================================ARRAY => STRING =======================================

// let fruits = ['Banana', 'Orange', 'Lemon', 'Melon', 'Appple', 'Plum'];
// console.log(fruits);
// console.log(fruits.toString()); // перевели в стринг
// console.log(fruits.join("*"));
//////////////////////////////////

// ==============================SLICE()=========================
////////////////////////array:

// let fruits2 = ['Banana', 'Orange', 'Lemon', 'Melon', 'Appple', 'Plum'];
// let sliceOt = fruits2.slice(2) // отрезает с начала массива
// let sliceOt2 = fruits2.slice(-2) // отрезает с конца массива
// console.log(sliceOt);

////////////////////string:

// let fruits3 = "Banana, 'Orange', 'Lemon', 'Melon', 'Appple', 'Plum'";
// let sliceStr = fruits3.slice(16); //отрезал ... буквы, считает по индексу
// console.log(sliceStr);

// ==============================REPLACE()=========================

// let message = "lets go at 9 am to Museum on 9 April!";
// let nextMessage = message.replace("9", "15"); //находит первую 9 и меняет на 15
// let nextMessage2 = message.replaceAll("9", "15");//находит все 9 и меняет на 15
// let nextMessage3 = message.replaceAll(/museum/gi, "Cinema") //не чувствит. к регистру, 'museum'
// console.log(nextMessage);
// console.log(nextMessage2);
// console.log(nextMessage3);

///////////////почитать REGULAR EXPRESSIONS


//===================================CHARAT()===================================
// обращаемся к элементу по индексу
// let message5 = "Let go to clean up your bedroom";
// let messageCl =  message5.charAt(1)
// console.log(messageCl);


//===================================REPEAT()===================================

//ПОВТОРЯЕТ

// let q = "Hi!";
// console.log(q.repeat(30));
// console.log(q.slice(1).repeat(30));

//===================================TREAM()======================================

//ОТРЕЗАЕТ SPACE ПО КРАЯМ

// let message6 = "    Lets go at 9 am to Museum on 9 April!    ";
// let result = message6.trim();
// let result2 = message6.trimEnd(); //с конца
// let result3 = message6.trimStart(); //с начала
// console.log(message6);
// console.log(result);
// console.log(result2);
// console.log(result3);
// // - полезно, когда есть логин/пароль и надло отрезать лишние пробелы

//===================================PADSTART()  PAD(END)======================================

// добавляет space

let message7 = "Lets go at 9 am to Museum on 9 April!";
let result4 = message7.padStart(" ");
console.log(result4);


//============================================DELETE() ====================================

let fruits2 = ['Banana', 'Orange', 'Lemon', 'Melon', 'Appple', 'Plum'];
delete fruits2[1];
console.log(fruits2); // вырезает но на его месте образуется пустое место