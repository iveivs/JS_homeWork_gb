// const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=hYg0GLzuKFi9Px5IVJJUFoHcKcIxCxObpbiRzyct' // просто ссылка для запроса

// добавляем к ссылке "&count=10"
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=hYg0GLzuKFi9Px5IVJJUFoHcKcIxCxObpbiRzyct&count=10'

const divElem = document.querySelector('.wrapper')

const getData3 = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}
// const users = await getData2(url)
// console.log(users);

try {
    const data = await getData3(nasaUrl);
    // console.log(data);
    data.forEach((element) => {
        divElem.insertAdjacentHTML(
            'beforeend',
            `
            <figure>
                <img src="${element.url}" alt="picture" />
                <figcaption>${element.explanation}</figcaption>
            </figure>
        `)
    });
} catch (error) {
    console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
}