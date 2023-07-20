
// Задача 1
// let num1 = Number(prompt('Введите число'))
// let num2 = Number(prompt('Введите число'))
// num1 >= 1 ? console.log(true) :  console.log(false);
// num2 >= 3 ? console.log(true) :  console.log(false);
// console.log(num1, num2);


// Задача 2
// let test = true
// test ? console.log('+++') : console.log('---')
// console.log(test);

// Задача 3
// const day = 14
// if (day <= 9) {
//     console.log(`${day} is a first decade`);
// } else if (day <= 19 || day >= 10) {
//     console.log(`${day} is a second decade`);
// } else if (day <= 31 || day >= 19) {
//     console.log(`${day} is a third decade`);
// }

// Задача 4

// let inputNum = Number(prompt('Введите число не больше 9999'))
// let thousand = 0
// let hundred = 0
// let ten = 0
// let unit = 0


// thousand = ((inputNum % 10000) - (inputNum % 1000)) / 1000

// hundred = ((inputNum % 1000) - (inputNum % 100)) / 100

// ten = ((inputNum % 100) - (inputNum % 10)) / 10

// unit = inputNum % 10

// alert(`В числе ${inputNum} количество тысяч: ${thousand}, сотен: ${hundred}, десятков: ${ten}, единиц: ${unit}`);

// Второе решение

// let str = prompt('Введите число не больше 9999')
// let arr = str.split('')

// if(arr.length === 4 ) {
//     alert(`В числе ${str} количество тысяч: ${arr[0]}, сотен: ${arr[1]}, десятков: ${arr[2]}, единиц: ${arr[3]}`);
// } else if (arr.length === 3 ) {
//     alert(`В числе ${str} количество сотен: ${arr[0]}, десятков: ${arr[1]}, единиц: ${arr[2]}`);
// } else if (arr.length === 2 ) {
//     alert(`В числе ${str} количество десятков: ${arr[0]}, единиц: ${arr[1]}`);
// } else if (arr.length === 1 ) {
//     alert(`В числе ${str} количество единиц: ${arr[1]}`);
// }


