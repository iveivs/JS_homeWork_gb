// const arr =[]
// for(let i = 1; i < 4; i++) {
//     let num = +prompt('Введите положительные числа, для нахождения максимального')
//     arr.push(num)
// }

// let maxNumber = function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
// }
// console.log(alert('Максимальное число: ' + maxNumber(arr)));

// let maxNumber = Math.max.apply(null, arr)

// console.log(alert('Наибольшим числом является: ' + maxNumber));

// ==============================

// const user = {
//     name: 'John',
//     age: 44,
//     surname: 'Ivanov'
// }

// const {name, age, surname} = user

// user.middle = 'Smith'
// delete user.surname
// console.log(user);

// function log() {
//     let str = `${name} - ${age} - ${surname}`
//     return str
// }
// console.log(log(user));

// - - - - 

// Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const dayOfWeek = {}

// for(let i = 0; i < arr1.length; i++) {
//     dayOfWeek[arr1[i]] = arr2[i]
// }
// console.log(dayOfWeek);

// Задание:
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.
// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// }

// for(key in obj) {
//     obj[key] = obj[key] ** 2
// }
// Object.keys(obj).forEach((el) => {
//     obj[el] = obj[el] ** 2
// }) 
// console.log(obj);

// ПРИМЕР ИЗ СЕМИНАРА
//  Задание:
//  Найдите сумму элементов приведенного объекта.
const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

// считаем сумму в объекте
let sum = 0
for (const key in obj) {
    for(const el in obj[key]) {
        sum += obj[key][el]
    }
}
console.log(sum);

const objValues = Object.values(obj)
console.log(objValues);   // [
//                              { key1: 1, key2: 2, key3: 3 },
//                              { key1: 4, key2: 5, key3: 6 },
//                              { key1: 7, key2: 8, key3: 9 }
//                           ]
const newArrNumber = [].concat(...objValues.map(el => Object.values(el)))
const summ = newArrNumber.reduce((acc, el) => acc += el, 0)
console.log("SUMM " + summ); 

// Метод concat(объединение массивов)
const massiv = []
const massiv1 = [1,2,3]
const massiv2 = [4,5,6]
console.log(massiv.concat(massiv1, massiv2));
// то же самое через spread оператор
const resMassiv = [...massiv1, ...massiv2]
console.log(resMassiv);

// С помощью метода values получаем значения самого главного объекта
const arrForSumm = objValues.reduce((array, element) => array.concat(Object.values(element)), [])
console.log(arrForSumm);



// ПРИМЕР ИЗ УРОКА
// const product = {
//     name: 'Stol',
//     price: 2000,
//     count: 0,
//     userRegistred: false,
//     registration: function() {
//         this.userRegister = true
//     },
//     countProduct: function() {
//         this.count > 0 ? console.log('You can to by this product') : console.log("You can't to add this product");
//     },
//     buyProduct: function () {
//         if(this.userRegistred) {
//             console.log('Product in the cart');
//         } else {
//             console.log('You need to have a registration');
//         }
//     }
// }
// product.countProduct()
// product.buyProduct()
//  - - - - - - - - - - - - - - -

const productTest = {
    text: 'hello',
    price: 100
}
// Выводим ключ из объекта
for(key in productTest){
    console.log(key);
}

// Выводим значение из объекта
for(key in productTest) {
    console.log(productTest[key]);
}

// ДОСТАЁМ КЛЮЧИ И ЗНАЧЕНИЯ ИЗ ОБЪЕКТОВ(возвращаются массивы)
const keysOfProdTest = Object.keys(productTest)
console.log(keysOfProdTest);

const valuesOfProdTest = Object.values(productTest)
console.log(valuesOfProdTest);

const entriesOfProdTest = Object.entries(productTest)
console.log(entriesOfProdTest);
// - - - - - - - - - - - - - - -

// ПРИМЕРЫ ИЗ МЕТОДИЧКИ 
// Дан массив с объектами
const studentsPracticeTime = [
    {
        firstName: 'Ivanov',
        practiceTime: 56
    },
    {
        firstName: 'Petrov',
        practiceTime: 156
    },
    {
        firstName: 'Sidorov',
        practiceTime: 99
    },
    {
        firstName: 'Belkin',
        practiceTime: 189
    }
]
// ОБХОД МАССИВА С ОБЪЕКАТАМИ С ПОМОЩЬЮ МЕТОДА map (занесение в таблицу)
// const dataForTable = studentsPracticeTime.map((student) => {
//     if(student.practiceTime < 100) {
//         return {
//             Student: student.firstName,
//             Practice: 'Not passed'
//         }
//     } else {
//         return {
//             Student: student.firstName,
//             Practice: 'Passed'
//         }
//     }
// })

// console.table(dataForTable);

const studentsPassedPractice = studentsPracticeTime.filter((student) => {
    if(student.practiceTime < 100) return false
    return true
})
console.log(studentsPassedPractice);

// Обход массива без reduce(считаем общее количество часов практики у студентов)
let totalTime = 0
for (let index = 0; index < studentsPracticeTime.length; index++) {
    totalTime = totalTime +studentsPracticeTime[index].practiceTime 
}
console.log(totalTime);

// обход с reduce
const totalTime2 = studentsPracticeTime.reduce((acc, student) => {
    return acc + student.practiceTime
}, 0)
console.log(totalTime2);
// 

// ПРИМЕРЫ ИЗ УРОКА ГБ
// ========================================
// const array = [1, 2, 3, 10, 15]
// const arrayUp = array.map(item => {
//     return item * 2
// })
// console.log(arrayUp);

// const arrayFilter = array.filter(item => item >= 10)
// console.log(arrayFilter);

// const arraySumm = array.reduce((a, b) => a + b)
// console.log(arraySumm);
// ========================================

// Пример Сани Трифонова
// let d = document.getElementById("result")

// let c = 0 
// function func() {
//   c++;
//   d.innerHTML += "<br/>" + c;

//   if(c==3) {
//     clearInterval(id)
//   }
// }


// let id = setInterval(func, 1000)

