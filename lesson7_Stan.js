const arr =[2, 6, 7, 8, 9, 4, 9, 0, 7, 4, 0, 1];
const newarr =['yyy', 'den', 'a', 'w', 's', 'b'];
// foreach - ничего не возвращает
// arr.forEach(el => el > 3 ? newarr.push(el) : '');
// console.log((newarr));

// arrNew = arr.sort() // по умолчанию сорт всегда в алфав. порядке
// console.log(newarr);

// newarr.sort().reverse()

let sq = arr.map(el=> el**2)

console.log(sq);