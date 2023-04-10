let fruits = "Banana, 'Orange', 'Lemon', 'Melon', 'Appple', 'Plum'";
let fruits2 = "Banana, 'Orange', 'Lemon', 'Melon', 'Appple', 'Plum'";
let numbers = [1, 2, 4, 6, 8];

// console.log(fruits == fruits2);

////////////////////////////////Objects
// console.log(JSON.stringify(fruits) == JSON.stringify(fruits2)); //compare string
//привел к json и сравнил как string

//JSON берет как массив но сравнивает как стринг
//JSON считает ковычки, цифры, спецсимволы, пробелы не считает
// console.log(fruits.toString()===fruits2.toString());

/*In Javascript everything is an object
Boolean can be objects
Numbers can be objects
String can be objects
Dates are always objects
Math are always objects
Regular excpression are always
Functional are always objects
Objects are always objects
All JS values except primitives are objects

Objects are variables!
Its a common practice to declare objects with the const keyword
*/

// Key and value
// {key: values} - property

//=========================ОБЪЯВЛЕНИЕ ОБЪЕКТА =====================================
//в массиве обращ по индексу, а в объекте по ключу
// let arr = [["name", 'Olga']["age", 25]]
// let obj = new Object();
// let user = {}

// const person = {
//     name: "Anna",  // ключ - значение
//     surname: "Petrova", // key - это всегда string 
//     age: "35",
//     job: "QA Engeneer",
//     isAdmin: false
// }
// const person2 = {
//     id: '02',
//     personalinfo: {
//         name: { firstName: 'Jane', lastName: 'Howards',},
//         dob: "01/04/1980",
//         contactInfo: {
//             phone: '+6137899800',
//             email: 'null',
//             adress: {
//                 city: "Boston", state: "M"},
//         },
//     },
//     purchases: [null],
//     car: "Mazda"
// };
// console.log(person2.personalinfo.contactInfo);
// console.log(person2.personalinfo['name']);

//===========================================================================



// let obj2 = {
//     name: "Bob",
//     lastName: 22,
//     "isAdult": true,
//     "salary": undefined,
//     address:[],
//     myObj:{}
// };
//последнее свойство объекта property может заканчиваться запятой

//===========================================---РАБОТА с OBJECTS
// let user2 = new Object();
// let user3 = {
//     name: "Lena",
//     age: 30,
//     'high school': true, //ключ может состоять из неск. слов но тогда он должен быть заключен в кавычки
//     high_school: true //underscore 
// }
// console.log(user3["high school"]);// разбитый ключ, в котором нксколько слов, обращаемся через квадр. скобки
// console.log("Original: ", user3);
// // поменяли значение
// user3.age = 20;
// user3.name = 'Vera';

// console.log("Modified: ", user3);

// // добавить свойство address в объект user3:
// user3.address = {
//     city: 'Ottawa',
//     state: 'On',
//     country: 'Canada',
// }
// console.log(user3); // добавиили адрес
// user3.hello = 'Hi';// добавиили строку
// user3['hello2'] = 'Hey';
// console.log(user3); 
// Key с одинаковыми именами перезатираются, обображается нижний

//======================================оператор DELETE()==========================

// delete user3.address.country; // удаление свойства country
// console.log(user3); 

//========================================добавление свойства (property) ========================

//создаем объект
// const person = {};
// // присваиваем значение
// person.name = "Denys";
// person['likes green'] = true;
// person['age'] = 20;
// person['Date Birth'] = 'Canada';
// person['Car model'] = true;
// console.log(person);

/////////////////////////////////////////////////////////////// как добавить в объект через переменную:

// let carModel = ["Mazda"];
// let num = 2;
// person[carModel] = num; // добавляем через 2 переменные
// console.log(person);

/////////////////////////////////////////////////////////////// создание объекта с использованием переменной:

// let name = "Alex";
// let name2 = "Denys";
// let age = 14;
// const user = {
//     [name]: age, //[] - показывают что мы берем переменную в качестве ключа
//     [name2]: name2
// };
// console.log(user);

// ======================================================ОБРАЩЕНИЕ К СВОЙСТВАМ ОБЪЕКТА

// let arr = [1, 2, 3, 4, 5, 6];
// const customers = [
// // Array!!!!!!!![0]
//     {
//         id: '10',
//         'personal info': {name: {first: "Milla", last: "Kaidalova"},},},
//     {
//         id: '11',
//         'personal info': {name: {first: "Pavel", last: "Kaidalov"},},},
//     {
//          id: '12',
//         'personal info': {name: {first: "Alex", last: "Kaidalov"},},
    
//         purchases: [null], 
    
//     }, 
// ]

// // Свойство первого уровня -array elements;
// console.log(customers.length);
// console.log(customers[0]);

// // Свойства элемента второго уровня -array elements;

// console.log(customers[1].id);

// // Свойства элемента третьего уровня -array elements;

// console.log(customers[0]['personal info'].name.first);
// console.log(customers[0]['personal info'].name.first);

// // Свойства элемента четвертого уровня -array elements;

// console.log(customers[1]["personal info"].name.first);
// console.log(customers[1]["personal info"].name.last);
// console.log(customers[1]["personal info"]["name"]["last"]);

// //====================================================проверка на существования свойства==================

// let user4 = {
//     newKey: "MY KEY",
// }
// console.log(user4.newKey===undefined); // проверка есть оно или нет

//====================================================через оператор IN ==================

// let obj3 = {
//     name: "Bob",
//     lastName: 22,
//     "isAdult": true,
//     "salary": undefined,
//     address:[],
//     myObj:{job:"QA", depart: "IT"}
// };
// console.log("name" in obj3);// проверка через оператор IN
// console.log("lasdy" in obj3);// проверка через оператор IN
// console.log("job" in obj3.myObj);
// console.log(undefined in obj3); // ищет ключи underfined

//===================================================ЦИКЛ FOR IN ======================================

// для итерации по объекту используется for in

let obj4 = {
    name: "Bob",
    lastName: 22,
    "isAdult": true,
    "salary": undefined,
    address:[],
    myObj:{job:"QA", depart: "IT"}
};

for(let key in obj4){

}
console.log(key + ":" + obj4[key]);



