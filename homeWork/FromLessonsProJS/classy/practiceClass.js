// Задание 1. "Управление библиотекой книг"
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и
// методами:
// ● Свойство title (название) - строка, название книги.
// ● Свойство author (автор) - строка, имя автора книги.
// ● Свойство pages (количество страниц) - число, количество страниц в книге.
// ● Метод displayInfo() - выводит информацию о книге (название, автор и
// количество страниц)

class Book {
    title = 'Azbuka';
    author = 'Kirill and Mefodiy';
    pages = 1;
    constructor() {
        this.displayInfo = this.displayInfo.bind(this)
    }
    displayInfo() {
        console.log('Title:',this.title, ",", "Author:", this.author, ",", "Pages:", this.pages);
    }
}
// const someBook = new Book()
// someBook.displayInfo()
// setTimeout(someBook.displayInfo, 2000)

// - - - - - - - - - - - - - - - -
// class Student {
//     constructor(name, age, grade) {
//         name = this.name
//         age = this.age
//         grade = this.grade
//     }
// }

// const student1 = new Student("John Smith", "10th grade", 16)
// - - - - - - - - - - - - - - - -

// Задание
// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const Person = {
    name: this.name,
    age: this.age,
    gender: this.gender,
    introduce() {
        console.log(`My name is: ${this.name}. I'm ${this.age} year old and I identify as ${this.gender}`);
    },
    changeName(newName) {
        this.name = newName
    }
}

Person.name = 'John'
Person.age = 25
Person.gender = 'male'
Person.introduce();
Person.changeName("Mike")
Person.introduce()
//  - - - - - - - - - - - - -

// Задача 2
// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

const Animal = {
    name: this.name,
    eat() {
        console.log(`${this.name} is eating`);
    }
}

const Dog = {
    name: this.name,
    bark() {
        console.log(`${this.name} is barking`);
    }
}

Dog.name = "Reks"
Dog.eat = Animal.eat
Dog.eat( )
console.log(Dog);

// Задача 3
// Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// // ШАГ 1
// const calculator = {
//     add(num1, num2) {
//         return num1 + num2
//     },
//     subtract(num1, num2) {
//         return num1 - num2
//     },
//     multiply(num1, num2) {
//         return num2 * num2
//     }
// }

// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// ШАГ 2(используя apply)

const calculator = {
    arg1: 1,
    arg2: 2,
    add(num1, num2) {
        return num1 + num2
    },
    subtract(num1, num2) {
        return num1 - num2
    },
    multiply() {
        return this.arg1 * this.arg2
    }
}

const contextNumbers = {
    arg1: 20,
    arg2: 50
}
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// console.log(calculator.multiply.apply(contextNumbers));
// - - - - - - - - - - - - - 


// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce1() {
        console.log(`My name is: ${this.name}. I'm ${this.age} year old`);
    }
}

const newPerson = new Person2("John", 25);
// newPerson.introduce1()
// - - - - - - - - - - - - - - - -


// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber
        this.balance = balance
    }

    bankName = 'My Bank'

    deposit(amount) {
        this.balance += amount
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        } else {
            this.balance -= amount
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        }
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);
// - - - - - - - - - - - - - - - - - - -

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)