// let  sum = (a, b) => a*b;
// console.log(sum(12, 67));

//индекс массы тела
let bmi = (height, weight) => (weight / height ** 2).toFixed(2); //ToFixed возвр строку, округлили, + приводит к number, до 2 знаков после запятой
console.log(bmi(1.65, 55));
// console.log(typeof bmi());

//цельсий в фаренгейт
//c = (f - 32) * 5 / 9;
let celsius = f => +(( f-32 ) * 5 / 9).toFixed(1);
console.log(celsius(100));


function lovefunc(flower1, flower2){
    // moment of truth
    if (flower1 % 2 === 0 && flower2 % 2 === 1){
      return true
    }  else if  (flower2 % 2 === 0 && flower1 % 2 === 1) {
        return true
    }    
    
      else {
        return false
      }
    }