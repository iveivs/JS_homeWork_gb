// const arr25 = [1, 2, 3, 5, 10]
// function findMax(param1, param2, ...rest) {
//     if(param1 > param2){
//         console.log(param1);
//     } else {
//         console.log(param2);
//     } 
//     console.log(rest);
// }

// console.log(findMax(...arr25));
// - - - - - - -

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

const studentsPracticeTime2 = [
    {
        firstName: 'Ivanov',
        practiceTime: 51
    },
    {
        firstName: 'Petrov',
        practiceTime: 151
    },
    {
        firstName: 'Sidorov',
        practiceTime: 92
    },
    {
        firstName: 'Belkin',
        practiceTime: 101
    }
]

// Напишем не очень удобную, но показательную функцию, которая
// умеет принимать неограниченное число аргументов, и находить
// максимум среди них. Функция должна вызываться подобным образом: const maximum = findMax(4, 7, 10);
function findMax() { 
    const values = arguments // аrguments - переменная доступная внутри каждой функции, которая содержит в себе аргументы, 
    // переданные в функцию. Является псевдомассивом
    let maxValue = -Infinity
    // так как arguments является псевдомассивом мы не можем применять к нему новые методы массивов, такие как forEach или reduce, 
    // поэтому будем итерировать по старинке
    for (let index = 0; index < values.length; index++) {
        if(values[index] > maxValue) maxValue = values[index] 
    }
    return maxValue
}    

const group1PracticeTime = studentsPracticeTime.map((student) => student.practiceTime)
console.log(group1PracticeTime);

const group2PracticeTime = studentsPracticeTime2.map((student) => student.practiceTime)
console.log(group2PracticeTime);

const maxTimeFromGroup1 = findMax(...group1PracticeTime)
console.log(maxTimeFromGroup1);

const maxTimeFromGroup2 = findMax(...group2PracticeTime)
console.log(maxTimeFromGroup2);

const bothGroupTime = [...group1PracticeTime, ...group2PracticeTime]
const maxBothGroupTime = findMax(...bothGroupTime)
console.log(maxBothGroupTime);
// - - - - - - - - - - - - - - - - - -
// ЧИСТЫЕ ФУНКЦИИ
const student = {
    firstName: 'Ivan',
    age: 25,
}

// Функция вычисления года рождения. Принимает текущий год и вычисляет год рождения. Это функция с побочным эффектом. 
// Она сильно зависит от глобальной переменной
// const getYearOfBirth = (currentYear) => {
//     return currentYear - student.age
// }

// console.log(getYearOfBirth(2023));

// Чистая версия функции
const getYearOfBirth = (age, currentYear) => {
    return currentYear - age
}

console.log(getYearOfBirth(37, 2023));

// Другой пример
// const addField = (object, key, value) => {
//     object[key] = value;
//     return object;
// };
// const updateStudent = addField(student, 'lastName', 'Belkin')
// {firstName: "Ivan", age: 25, lastName:
// "Belkin"} - вызвав нашу функцию добавления поля, мы изменили
// начальный объект, что может привести к нежелательным последствиям
// в остальном коде, которые порой очень сложно обнаружить. Например
// дальше по коду может идти итерация объекта student и вывод только
// начальных полей, но мы добавили в него третье поле, которое тоже
// будет проитерировано.
// console.log(student);

// Чистый вариант функции - нам нужно создать новый объект внутри
// функции для изменения и возврата.

const addFieldPureVersion = (object, key, value) => {
    return { // возвращаем новый объект.
    ...object, // Воспользуемся оператором spread, для получения
    // копии свойств исходного объекта.
    [key]: value // Добавим новое свойство.
    }
};
const updatedStudentPure = addFieldPureVersion(student, 'practiceTime', 148);
console.log(student);
console.log(updatedStudentPure); 

const newStud = {...student}
newStud.adress = 'Baker Street'
console.log(newStud);

// Замыкания

// const createCounter = () => {
//     let counter = 0
//     return () => {
//         return ++counter
//     }
// }
// // создаём счётчик
// const counter1 = createCounter()
// counter1()
// counter1()
// console.log(counter1());
// // создаём ещё один счётчик, который будет работать независимо
// const counter2 = createCounter()
// counter2()
// counter2()
// counter2()
// counter2()
// console.log(counter2());
//  - - - - - - - - - 

// const closureFunction = () => {
//     const cash = {}
//     return (x) => {
//         if(cash[x]) return cash[x]
//         const result = x * x
//         cash[x] = result
//         console.log(cash);
//     }
// }

// const cachedPow = closureFunction()
// console.log(cachedPow(2));
// console.log(cachedPow(8));
// console.log(cachedPow(2));

// КРИВОЙ ПРИМЕР(КОСЯК В МЕТООДИЧКЕ ГБ И НА УРОКЕ)
// =================================
// const houses = []
// let i = 0
// while (i < 10) {
//     let house = function () {
//         let houseNumber = i;
//         console.log(houseNumber);
//     }
//     houses.push(house)
//     i++
// }
// houses[0]();
// =================================

// Нормальный пример
// const houses = [];
// let i = 0;
// while (i < 10) {
//     let houseNumber = i; // Здесь мы создаём блочную переменную,
//     // которая сохранит значение i для конкретной итерации цикла, и
//     // именно её значение попадёт в лексическое окружение функции house.
//     let house = function () { // функция «дом»
//         console.log(houseNumber); // выводит номер дома
//     };
//     houses.push(house);
//     i++;
// }
// houses[0]();
// =================================
// Задача из семинара
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы проиграли”

// Простое решение
// const riddles = {
//     qustions: 'Zagadka',
//     answer: 'Otgadka',
//     askQuestion: function() {
//         let userAnswer = prompt(this.qustions)
//         console.log(userAnswer);
//         if(userAnswer !== this.answer) {
//             alert('Mission Failed')
//         } else {
//             alert('Congratulations')
//         }
//     }
// }
// riddles.askQuestion()

// Расширенное решение
const question = 'Зимой и летом одним цветом'
const spoilers = ['Зелёная', 'Колючая']
const answer = 'елка'

const riddles = {
    question,
    spoilers,
    answer,
    askQuestion: function() {
        let userAnswer = prompt(this.question).toLowerCase();
        console.log(userAnswer);
        if(userAnswer === this.answer){
            alert('Congratulations')
        } else {
            for(key of this.spoilers) {
                alert(key)
                let userAnswer = prompt(this.question).toLowerCase();
                if(userAnswer === this.answer){
                    alert('Congratulations')
                    return;
                }
            }
            alert('Mission Failed')
        }
        
    }
}
// riddles.askQuestion() // вызываем метод


// ЧЕРЕЗ ООП

// код

// ===================

