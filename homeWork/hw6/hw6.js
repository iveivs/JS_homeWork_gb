// Задача 1
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, 
// решение задание должно состоять из одной строки

// 1-й вариант
arr = [1, 5, 7, 9]
const minNum = Math.min(...arr)
console.log(minNum);


// 2-й вариант
const minNum2 = Math.min.apply(null, arr)
console.log(minNum2);

//  - - - - - - - - 

//  Задача 2
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0
    return obj = {
        increment: function (){
            count++
            console.log(count);
        },
        decrement: function(){
            count--
            console.log(count);
        }
    }
}
const someVar = createCounter()
someVar.increment()
someVar.decrement()


// Задача 3
// Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

// 1-й вариант
let sum = 1 
function factorial(n) {
    if( n === 0) {
        return sum
    } else {
        sum = sum * n
        factorial(n - 1)
    }
}
factorial(5)
console.log(sum);

// 2-й вариант
const factorial2 = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial2(n - 1);
    }
}

const getAnswer = factorial2(5);
console.log(getAnswer);




