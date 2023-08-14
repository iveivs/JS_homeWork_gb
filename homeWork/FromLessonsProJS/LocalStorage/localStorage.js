localStorage.clear()
localStorage.setItem('name', 'Bob')
localStorage.setItem('age', '30')
localStorage.setItem('gender', 'male')

localStorage.removeItem('age')

const user = localStorage.getItem('name')
console.log(user);

console.log(localStorage.key(0));
localStorage.clear()
// localStorage.user1 = {name: "John"} // не сработает, т.к. localStorage работает только с строкой
localStorage.user1 = JSON.stringify({name: 'Ivan'})
const newUser = JSON.parse(localStorage.user1)
console.log(newUser);
