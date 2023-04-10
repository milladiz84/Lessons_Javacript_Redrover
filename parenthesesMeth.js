// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . 
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  
// в правильной последовательности (открывающая и затем закрывающая). 
// Также, скобки могут быть вложенными, но тем не менее, 
// если последовательность соблюдена, то они считаются парными.

let arr = ['{', '{', '{', '}', '}', '}', ']', '{', ')', '}', '(', '}'];


function checkParentheses(par) {
    const array = [];
    arr.forEach((bracket) => {
      if (bracket === '{' || bracket === '(' || bracket === '[') {
        array.push(bracket);
      }
      if (bracket === '}' || bracket === ')' || bracket === ']') {
        const lastBracket = array.pop();
        if ((bracket === '}' && lastBracket !== '{') || 
            (bracket === ')' && lastBracket !== '(') || 
            (bracket === ']' && lastBracket !== '[')) {
          return false;
        }
      }
    });
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(checkParentheses(arr));

 