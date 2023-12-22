// const newWindow = window.open('https://www.example.com', '_blank')

// Опциональная цепочка вызовов методов и оператор нулевого слияния

const someUser = {
    name: "John",
    age: 30,
    adress: {
        city: "New Fork",
        street: " 123 main st"
    },
    contacts: {
        phone: 54321,
        email: "qwerty@MediaList.com"
    }
}
// Опциональная цепочка вызовов методов
const mail = someUser?.contacts?.email
console.log(mail);

// Если значение не определено или null или udefined, то используется значение по умолчанию
const defaultValue = someUser?.someValue ?? "This value doesn't exist"

// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = someUser?.adress?.street ?? "Unknown"
console.log(streetName); // выводит " 123 main st"

function divideNumbers(a,b) {
    try {
        const result = a / b
        if(isNaN(result)) {
            throw new Error('Результат не является числом')
        }
        console.log('Результат деления:' , result);
    } catch (error) {
        console.error('Ошибка деления', error);
    } finally {
        console.log('Операция деления завершена');
    }

}
// divideNumbers(10, 2)
// divideNumbers(10, 'a')
// divideNumbers(10, 0)



