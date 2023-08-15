// Рекурсивный setTimeout

function showNumber(num) {
  console.log(num);
  if(num < 5) {
    setTimeout(showNumber, 1000, ++num)
  }
  
}

setTimeout(showNumber, 1000, 1)








