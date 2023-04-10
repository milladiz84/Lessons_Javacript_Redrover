let x = 5;
let space = ' '; // вместо пробела * для наглядности кода

//1.////////////////////// tryangle numbers LEFT////////////////////////////////
// 1
// 12
// 123
// 1234
// 12345

// let newStr = 0;
// for(let i = 1; i <= 5; i++) {
//     for (let j= 1; j <= i; j++) {
//         newStr+=j;       
//     }
//     newStr += '\n';
// }
// console.log(newStr);

//2./////////////////// tryangle numbers RIGHT/////////////////////////////////////

//     1
//    12
//   123
//  1234
// 12345

// let newStr2 = '';

// for( let i = 1; i <= x; i++) {
//     newStr2 += space.repeat(x-i);
//     for(j = 1; j <= i; j++) {
//         newStr2 +=j;
//     }
//     newStr2 += '\n';
// }
// console.log(newStr2);

//3.///////////////////////// ЧИСЛА В СТОЛБИК///////////////////////////////////

// let numVer = '';

// for(let i = 1; i <= 10; i++) {
//     numVer += i
//     numVer+= '\n';
// }
// console.log(numVer);

//4./////////////////// tryangle numbers left////////////////////////////////////

// 12345
//  1234
//   123
//    12
//     1

// let newStr4 = '';

// for(let i = 1; i <=x; i++) {
//     newStr4 += space.repeat(i-1);    
//     for(let j = 1; j <= x + 1 - i; j++) {
//         newStr4 += j;
//     }
//     newStr4 += '\n';
// }
// console.log(newStr4);

//5.////////////////////////////// tryangle numbers right////////////////////
// 54321
// 4321
// 321
// 21
// 1

// let newStr5 = '';
// for(let i = 1; i <=x; i++) {
//     for(let j = x + 1 -i; j >= 1; j--) {
//         newStr5 += j;
//     }
//     newStr5 += '\n';
// }
// console.log(newStr5);

//6. /////////////////////////////////pyramid///////////////////////////////

//     1
//    121
//   12321
//  1234321
// 123454321

// let pyramid = "";

// for(let i = 1; i <=x; i++) {
//     pyramid += space.repeat(x-i)
//     for(let j = 1; j <=i; j++) {
//         pyramid += j;
//     }
//     for(let j = i-1; j >=1; j--) {
//         pyramid += j;
//     }
//     pyramid += '\n';
// }
// console.log(pyramid);

//6. ////////////////////////////////////////////rhombus//////////////////

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

// let rhombus = "";
// x = 10;
// for(let i = 1; i <=x; i++) {
//     rhombus += space.repeat(x-i)
//     for(let j = 1; j <=i; j++) {
        
//         if (j == 10) {
//             rhombus += 0;  //удаление 10
//         } 
//         else
//         rhombus += j;
//     }
//     for(let j = i-1; j >=1; j--) {
//         rhombus += j;
//     }
//     rhombus += '\n';
// }
// x = 9;
//     for (let i = 1; i <=x; i++){
//         rhombus += space.repeat(i);
//     for(let j = 1; j<=x + 1 - i;  j++) {
//         rhombus += j;        
//     }
//     for(let j = x-i; j >=1; j--) {
//         rhombus += j;    
//     }
//     rhombus += '\n';
// }
// console.log(rhombus);

//7.///////////////////////////////////////// TREE /////////////////////////

//     *
//    ***
//   *****
//  *******
// *********

// let tree = '';
// let sum = 1;
// for(let i = 1; i <=x; i++) {
//     tree += space.repeat(x-i) + '*'.repeat(sum)+'\n'; ;
//     sum += 2
// }
// console.log(tree);

//////////////////////////////////////////////////////////////////////

 
let numVer = '';

for(let i = 1; i <= x; i++) {
    numVer += i;
    
    numVer+= '\n';
}
console.log(numVer);



















// шаблон
// for(let i = 1; i <=5; i++) {
//     for(let j = 1; j <=i; j++) {
        
//     }
// }


// //10. tryangle asterisks
// let str;
// let row = '*';
// let count = 5;

// for(let i = 0; i <= count; i++) {
//     let num = i;
//     // console.log(num);
//     for(let j = 1; j <=i; j++) {
//         str += row;
//         // console.log(str);
// }
//    str += '\n';
// }
// console.log(str);