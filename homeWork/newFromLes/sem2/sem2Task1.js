/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/
function checkAmount(amount) {
    if (amount < 0) {
        throw new Error("вносимая сумма должны быть больше 0");
    }
    if (!Number.isFinite(amount)) {
        throw new Error("Некорректная сумма");
    }
    if (!Number.isInteger(amount * 100)) {
        throw new Error("введите число с 2 знаками после запятой");
    }
}

class BankAccount {
    #balance = 0;

    get balance() {
        return this.#balance
    }

    deposit(amount) {
        checkAmount(amount)
        this.#balance = this.#balance + amount
    }

    withdraw(amount) {
        checkAmount(amount)
        if (this.balance < amount) {
            throw new Error("недостаточно средств");
        }
        this.#balance = Math.round((this.#balance - amount) * 100) / 100
    }
}

const bankAccount = new BankAccount();
bankAccount.deposit(1000.22);
console.log(bankAccount.balance);
bankAccount.withdraw(200);
console.log(bankAccount.balance);