// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . 
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  
// в правильной последовательности (открывающая и затем закрывающая). 
// Также, скобки могут быть вложенными, но тем не менее, 
// если последовательность соблюдена, то они считаются парными.

//          0                                            0  
//          0    1    2    3    4    5    6    7    8    9    10
// let arr = ['{', '{', '{', '}', '}', '}', ']', '{', ')', '}', '('];
// let flagNextStep = 0;
// let notPairs = 0;
// let rightBracketToCheck = '';

// for (let i = 0; i < arr.length; i++) {
//   flagNextStep = 0
//   switch (arr[i]) {
//     case '{':
//       rightBracketToCheck = '}';
//       break;
//     case '(':
//       rightBracketToCheck = ')';
//       break;
//     case '[':
//       rightBracketToCheck = ']';
//       break;
//     case 0:
//       flagNextStep = 1;
//       break;

//     default:
//       console.log(`i=${i}, arr[i]=${arr[i]} нашли не пару!`);
//       notPairs++;
//       flagNextStep = 1;
//       break;
//   }   //end switch

//   if (flagNextStep === 1) {
//     console.log("run continue");
//     continue;
//   }

//   console.log(`i=${i}, arr.length=${arr.length} rightBracketToCheck=${rightBracketToCheck} and we do magic`)

//   for (let j = i + 1; j < arr.length; j++) {
//     if (rightBracketToCheck === arr[j]) {
//       console.log(`вытираем пару ${i} и ${j}`);
//       arr[j] = 0;
//       arr[i] = 0;
//       flagNextStep = 1;
//       break;
//     }
//   } // end for j
  
//   if (i === arr.length - 1) {
//     console.log(`попали в последний элемент`);
//     if (arr[i] != 0) {
//       console.log(`i=${i}, arr[i]=${arr[i]} последний элемент - нашли не пару!`);
//       notPairs++;
//       flagNextStep = 1;
//     }
//   }

//   if (flagNextStep != 1) {
//     console.log(`i=${i}, arr[i]=${arr[i]} нашли не пару!`);
//     notPairs++;
//   }

// } //end for i

// console.log(`Ответ:`);
// if (notPairs === 0) {
//   console.log(`у всех ${arr.length} есть пара`);
// } else {
//   console.log(`у ${notPairs} из ${arr.length} скобок нет пары`);
// }
//==============================================================================

// 1 2             1 2
// ( ( [ { { } } ] ) )
// 1 2             2 1

let arr = ['{', '}', '{', '}', '}', '[', ']', ')', ')', '}', '(', ')'];
let right1 = '}';
let right2 = ')';
let right3 = ']'
let countOrderMarg = 0;
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

 //проверка первый элемент массива

if (arr[0] === '}' || arr[0] === ')' || arr[0] === ']') { 
  countOrderMarg ++    
}
 //проверка последний элемент массива
if (arr[arr.length - 1] === '{' || arr[arr.length - 1] === '(' || arr[arr.length - 1] === '[') {
  countOrderMarg ++ 
} 

// //========================  проверка {}  ================================================

for (let i = 0; i < arr.length; i++) { 
  if(arr[i] === '{') { 
    count ++;    
  }
}
for(let j = 0; j < arr.length; j++) {    
  if(arr[j] === '}') {
    count2 ++;          
  }
}
let result=0;
if (countOrderMarg > 0 && (arr[0] == "}")) {
  result = (count2 + count + countOrderMarg);
    if(result % 2 == 0) {
      console.log(`Скобки "{}" - нарушена последовательность`);
    }
    else {
      console.log(`Скобки "{}" - нарушена последовательность, ${result-1} пары `);
    }
}
result = count2 - count;
if(result === 0) {
  console.log(`Скобок "{}" - четное количество пар, ${count} открытых и ${count2} закрытых`);
}
else {
false;
console.log(`Скобок "{}" - нечетное количество пар, ${count} открытых и ${count2} закрытых`); 
}

console.log("================================");


//========================  проверка ()  ================================================

for(let i = 0; i < arr.length; i++) {    
  if(arr[i] === ')') {
    count3 ++;          
  }
}
for(let i = 0; i < arr.length; i++) {    
  if(arr[i] === '(') {
    count4 ++;          
  }
}

if (countOrderMarg > 0 && (arr[0] == ")")) {
  result = (count3 + count4 + countOrderMarg);
    if(result % 2 == 0) {
      console.log(`Скобки "()" - нарушена последовательность`);
    }
    else {
      console.log(`Скобки "()" - нарушена последовательность, ${result-1} пары `);
    }
}
let result2 = count3 - count4;
if(result2 === 0) {
  console.log(`Скобок "()" - четное количество, ${count3} открытых и ${count4} закрытых`);

}
else {
console.log(`Скобок "()" - нечетное количество, ${count3} открытых и ${count4} закрытых`); 
}
console.log("================================");

//========================  проверка []  ================================================

for(let i = 0; i < arr.length; i++) {    
  if(arr[i] === ']') {
    count5 ++;          
  }
}
for(let i = 0; i < arr.length; i++) {    
  if(arr[i] === '[') {
    count6 ++;          
  }
}
if (countOrderMarg > 0 && (arr[0] == "]")) {
  result = (count5 + count6 + countOrderMarg);
    if(result % 2 == 0) {
      console.log(`Скобки "[]" - нарушена последовательность`);
    }
    else {
      console.log(`Скобки "[]" - нарушена последовательность, ${result-1} пары `);
    }
}
let result3 = count5 - count6;
if(result3 === 0) {
  console.log(`Скобок "[]" - четное количество, ${count5} открытых и ${count6} закрытых`);
}
else {
false;
console.log(`Скобок "[]" - нечетное количество, ${count5} открытых и ${count6} закрытых`); 
}

// console.log(countOrderMarg);
// console.log(countOrderEnd);

// ( (  ) )
// ) ) ( (
  



























// function checkBrackets(arr) {
//     const stack = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const bracket = arr[i];
  
//       if (bracket === '{' || bracket === '[' || bracket === '(') {
//         // Элемент является открывающей скобкой, добавляем его в стек
//         stack.push(bracket);
//       } else if (bracket === '}' || bracket === ']' || bracket === ')') {
//         // Элемент является закрывающей скобкой, проверяем парность соответствующей открывающей скобки
//         const lastBracket = stack.pop();
  
//         if (
//           (bracket === '}' && lastBracket !== '{') ||
//           (bracket === ']' && lastBracket !== '[') ||
//           (bracket === ')' && lastBracket !== '(')
//         ) {
//           // Скобки не являются парными
//           return false;
//         }
//       }
//     }
  
//     // Если стек пустой, все скобки являются парными
//     return stack.length === 0;
//   }

//   console.log(checkBrackets());
  
  
  
  