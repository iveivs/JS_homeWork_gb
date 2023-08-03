// Задания из семенара
// Задание 1
// моё решение без функции
const arr1 = [1,2,3]
const arr2 = [4,5,6]
// const arrRes = [...arr1, ...arr2]
// console.log(arrRes);

// решение с семенара через функцию
const mergeArrays = (array1, array2) => [...array1, ...array2]

console.log(mergeArrays(arr1, arr2));

// Задание 2

function removeDuplicates(...numbers) {
    const inputArr = [...numbers]
    console.log(inputArr);
    return inputArr.filter((el, index) => {
        return inputArr.indexOf(el) === index
    })
}

console.log(removeDuplicates(2,3,4,54, 3, 3, 0));

// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(arrNum) {
    
}