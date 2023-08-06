// function test () {
//     console.log(arguments);
//     console.log([...arguments]);
// }

// test(2, 3, 4)

// тест работы метода фильтр
// const arr = [0, 3, 4, 5, 6, 7, 8, 9, 11]
// const filteredAr = arr.filter((elem) => {
//     return elem % 2 !== 0
// })
// console.log(filteredAr);

// Задачка про попрошайку(улучшение с помощью замыкания)
// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max - min)
//     return Math.floor(rand)
// }
// function createBeggar() {
//     let sum = 0
//     return function beggar() {
//         sum += randomInteger(0, 100)
//         console.log(sum);
//         if(sum >= 200) return
//         beggar()
//     }
// }

// let beg1 = createBeggar()
// beg1()