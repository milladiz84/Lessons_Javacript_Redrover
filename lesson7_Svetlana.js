let str = "Hello worls, how are you?";
// for(let i in str) {
//     console.log(str[i]);
// }


// let arr = ["Sam", 56, true, false, 2, "Hello"];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let person = {
//     name: "Anna",
//     lasname: "Kaidalova",
//     age: 5
// }

// for (let key in person) {
//     console.log((person[key]));//key работает как индекс, но это ключ в объекте, использ. как индекс
// }

let newObject = {}
// for (let i = 0; i < str.length; i++) {
//     newObject[i+1]=str[i]
    
// }

newObject["Id"] = 2
newObject["number"] = 3
newObject["name"] = "John"
newObject["key"] = "3"
// delete newObject.name

console.log(newObject)
console.log(Object.keys(newObject)); //вывести ключи
console.log(Object.values(newObject)); // вывести значения