// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// Вывод: Name: John Smith
// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// Вывод: Name: Jane Doe. Department: Sales


class Employee {
    constructor(name) {
        this.name = name
    }
    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name)
        this.department = department
    }
    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}. Department: ${this.department}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
//  - - - - - - -

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber
    }
    products = []
    addProduct(product){
        this.products.push(product)
        console.log(this.products);
    }
    getTotalPrice(){
        let totalPrice = 0
        for(let key of this.products) {
            if(key.price) {
                totalPrice += key.price
            }
        }
        return totalPrice
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice())
// - - - - - - - - - - - - - - - - - -

// Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". 
// Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.

// const student = new Student();
// student.setName('Питер Паркер);
// student.setAge(20);
// student.setAverageGrade(85);
// student.displayInfo();

class Student {
    #name
    #age
    #averageGrade
    /*
    // Не знаю, вроде конструктор не нужен, и без него помоему всё работает, поэтому закоментировал дважды
    // constructor(name, age, averageGrade) {
    //     this.#name = name
    //     this.#age = age
    //     this.#averageGrade = averageGrade
    // }
    */
    set setName(name) {
        this.#name = name.trim().toLowerCase()
    }
    get getName() {
        console.log(this.#name);
        return this.#name
    }
    set setAge(age) {
        this.#age = age
    }
    get getAge () {
        return this.#age
    }
    set setAverageGrade(averageGrade) {
        this.#averageGrade = averageGrade
    }
    get getAverageGrade() {
        return this.#averageGrade
    }
    displayInfo(){
        console.log(`Name: ${this.#name},  Age: ${this.#age}, AverageGrade: ${this.#averageGrade}`);
    }
}
const student1 = new Student();
student1.setAge = 22
student1.setName = "Piter Pen"
student1.setAverageGrade = 99
student1.displayInfo()

// БОЛЕЕ ПРОСТОЙ ВАРИАНТ(ПОМОЕМУ УЖЕ УСТАРЕВШИЙ) почти то же самое, что и до этого
class Student2 {
    // Не знаю насколько нужен конструктор, поэтому пока закоментировал
    /*
    // constructor(name, age, averageGrade) {
    //     this._name = name
    //     this._age = age
    //     this._averageGrade = averageGrade
    // }
    */
    set setName(name){
        this._name = name.trim().toLowerCase()
        // this._name = name
    }
    get getName() {
        return this._name
    }
    set setAge(age){
        this._age = age
    }
    get getAge() {
        return this._age
    }
    set setAverageGrade(averageGrade){
        this._averageGrade = averageGrade
    }
    get getAverageGrade() {
        return this._averageGrade
    }
    displayInfo(){
        console.log(`Name: ${this._name},  Age: ${this._age}, AverageGrade ${this._averageGrade}`);
    }
}

const student2 = new Student2();
student2.setName = 'Piter Parker'
student2.setAge = 33
student2.setAverageGrade = 100
student2.displayInfo()

// const student3 = new Student2(123, 333, 'sadDsa');
// console.log(student3);