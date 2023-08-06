// Задания из семенара
// Задание 1
// моё решение без функции
const arr1 = [1,2,3]
const arr2 = [4,5,6]
// const arrRes = [...arr1, ...arr2]
// console.log(arrRes);

// решение с семенара через функцию
const mergeArrays = (array1, array2) => [...array1, ...array2]

// console.log(mergeArrays(arr1, arr2));

// Задание 2

function removeDuplicates(...numbers) {
    const inputArr = [...numbers]
    // console.log(inputArr);
    return inputArr.filter((el, index) => {
        return inputArr.indexOf(el) === index
    })
}

// console.log(removeDuplicates(2,3,4,54, 3, 3, 0));
// - - - - - - - - - - - - - - - -

// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.\

// =================================
// моё решение
function getEvenNumbers(arrNum) {
    const newArrNum  = arrNum.filter((elem) => {
    return elem % 2 === 0
    })
    return newArrNum
}

// console.log(getEvenNumbers([0, 3, 4, 5, 6, 7, 8, 9, 11]));
// =================================


// Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

// =================================
// моё решение
const arr26 = [0, 1, 2, 3, 4]
function calculateAverage(arrOfNum) {
    const total2 = arrOfNum.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    })
    return total2 / arrOfNum.length
};

// console.log(calculateAverage(arr26));
// =================================


// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

let str = 'hello my friend'

function capitalizeFirstLetter(str) {
    const strSplit = str.split(" ")
    newArrUpFirstLetter = []
    for(let key of strSplit) {
        newArrUpFirstLetter.push(key[0].toUpperCase() + key.slice(1))
    }
    console.log(newArrUpFirstLetter.join(' '));
}

// capitalizeFirstLetter(str);

// решение из семинара
const capitalizeFirstLetter2 = (str) => {
    return str.replace(/(^|\s)\S/g, (char) => char.toUpperCase())
}
// console.log(capitalizeFirstLetter2(str));



// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном случае.

// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: true
// console.log(isPasswordValid('secret')); // Ожидаемый результат: false


function createPasswordChecker(lenghtPassword) {
    return function getPassword (password) {
        if(password.length === lenghtPassword) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

// const word = createPasswordChecker(4)
// word('qwer')
// console.log();

// Задание:
// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращаетсумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

const sumDigits = (num) => {
    if(num < 10) {
        return num
    } else {
        return (num % 10) + sumDigits(Math.floor(num / 10))
    }
}

// console.log(sumDigits(241));
