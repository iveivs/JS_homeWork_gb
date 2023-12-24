/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

class User {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

const someUser = new User('ivan', "Ivanov")
console.log(someUser);

class PremiumUser extends User {
    constructor(firstName, lastName, premiumExpiration){
        super(firstName, lastName)
        this.premiumExpiration = premiumExpiration
    }
}
const premiumUser = new PremiumUser("Petr", "Petrov", new Date().getFullYear() + 1)
console.log(premiumUser);

class RegularUser extends User {
    constructor(firstName, lastName){
        super(firstName, lastName)
    }
}
const regularUser = new RegularUser("Sidor", "Sidorov")
console.log(regularUser);

function getAccountInfo(user) {
    if (user instanceof RegularUser) {
        console.log("нет премиум доступа");
    }
    if (user instanceof PremiumUser) {
        console.log(user.premiumExpiration);
    }
}
getAccountInfo(premiumUser);
getAccountInfo(regularUser);