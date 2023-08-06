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
//  - - - - - - - - - - - - - - - - - - - -

// Задание 2
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }
    displayInfo() {
        console.log(`name: ${this.name}, age: ${this.age}, grade: ${this.grade}`);
    }
}

const student1 = new Student("John Smith", 16, "10th")
student1.displayInfo()

const student2 = new Student("Jane Doe", 17, "11th");
student2.displayInfo();

// ****** Задача необязательная для выполнения:
// Это расширенная версия задачи с банком, которую мы решлали на семинаре:
// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. 
// Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.
// Пример работы:

// const bank = new Bank("Мой Банк");

// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);

// bank.addClient(client1);
// bank.addClient(client2);

// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);

// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

class Bank {
    name = 'My Bank'
    clientsList = []
    accountList = []
    accountNumber = 1
    addClient(client) {
        this.clientsList.push(client)
    }
    openAccount(client, balance) {
        this.accountNumber++
        let newAccountNumber = this.accountNumber
        const newObj = {client, balance, newAccountNumber}
        this.accountList.push(newObj)
    }
    displayInfoClient() {
        for(let key of this.accountList){
            if(key.client === 'Мария'){
                console.log(key);
            }
        }
    }
    deposit(amount) {
        
    }
}

class Client {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

const bank = new Bank("Мой Банк");
bank.addClient(client1)
// console.log(bank);

bank.openAccount(client1.name, 500)
// console.log(bank);


bank.addClient(client2)
bank.openAccount(client2.name, 1000)
// console.log(bank);

bank.displayInfoClient()

console.log(bank.accountList);


