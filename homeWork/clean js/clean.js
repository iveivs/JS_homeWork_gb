// Рекурсивный setTimeout

// function showNumber(num) {
//   console.log(num);
//   if(num < 5) {
//     setTimeout(showNumber, 1000, ++num)
//   }
  
// }

// setTimeout(showNumber, 1000, 1)
const values = [1, 100, 5, 6, 13, 13, 22, 5];
// предположим, что у нас есть числовой массив
const duplicates = values.filter((number, index, numbers) => {
console.log(number); // number - элемент массива
console.log(index); // index - индекс элемента массива
console.log(numbers); // numbers - представление массива values
return numbers.indexOf(number) !== index;
});










