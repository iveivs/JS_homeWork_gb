const generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1
            if (randomNumber) {
                return resolve(randomNumber)
            } else {
                return reject("ERROR")
            }
        }, 1000);
    });
}

generateRandomNumber()
    .then((number) => {
        console.log('Сгенероровано случайное число', number);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    })

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject('Ошибка', error))
    });
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('Ошибка !',error)
})