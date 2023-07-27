// Задание 1

// for (let i = 0; i < 11; i++) {
//     if(i === 0) {
//         console.log(i + ' - это ноль');
//     }
//     if(i % 2 !== 0 && i != 0) {
//         console.log(i + ' - нечётное число');
//     }
//     if(i % 2 == 0 && i != 0) {
//         console.log(i + ' - чётное число');
//     }
// }

// Задание 2

// const arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(3, 2)
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// Метод рандомного заполнения
const arr = []
for(let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 11)
    arr.push(randomNumber)
}
// const arr = [5, 3, 0, 1, 9]

// считаем сумму(ограничился редьюсом)
console.log('Массив: ' + arr);
let summ = arr.reduce((acc, num) => acc + num, 0)
console.log('Сумма чисел в массиве: ' + summ);



// Поиск минимального значения в массиве

// 1-й способ
let minFor = arr[0]
for (const item of arr) {
    if(item < minFor) {
        minFor = item; // если находим другое минимальное число, то сохраняем в переменную
    }
}
console.log('Минимальное значение: ' + minFor);

//  2-й способ
const minNum = Math.min(...arr);
console.log('Минимальное значение: ' + minNum);

// 3-й способ
// function findMinNumber(array) {
//     array.sort(function(a, b) {
//             return a - b;
//         });
//         const minNumberOfArray = array[0]
//         return minNumberOfArray
// }
// findMinNumber(arr)
// console.log('Min Number of array is: ' + findMinNumber(arr));


// Поиск заданного числа в массиве
function findNumber() {
    const findNum = arr.indexOf(3)
    if(findNum === 0 || findNum >= 1) {
        console.log('Индекс искомого значения: ' + findNum);
    } else if(findNum === -1){
        console.log('Искомое значение не найдено');
    }
}
findNumber()

// Задание 4
// let str = ''
// for(let i = 1; i <= 20; i++) {
//     str += 'x'
//     console.log(str);
// }
