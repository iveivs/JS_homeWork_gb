const myPromise = new Promise((resolve, reject) => {})

console.log(myPromise);

myPromise
    .then((value) => {
        // value - значение переданное методом resolve
    })
    .catch((error) => {
        // действия для обработки ошибки
    })

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("ЧТО-ТО ПОШЛО НЕ ТАК " + error))

// ================================

// Упрощение (заготовка,  которую можно использовать в разных проектах)
const getData = (someUrl) =>
    new Promise((resolve, reject) => {
    fetch(someUrl)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error))
});
// Теперь мы можем работать с данными напрямую
getData(url)
    .then((data) => console.log(data))
    .catch((error) => console.error("ЧТО-ТО ПОШЛО НЕ ТАК " + error))

// =================================

// async await

const getData2 = async (someUrl) => {
    const res = await fetch(someUrl)
    const data = await res.json()
    return data
}
// const users = await getData2(url)
// console.log(users);

try {
    const users = await getData2(url)
    console.log(users);
} catch (error) {
    console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
}

// Axios - библиотека для работы с ассинхронными запросами и апишками