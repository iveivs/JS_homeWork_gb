// РАБОЧИЙ ВАРИАНТ 
const dogUrl = 'https://dog.ceo/api/breeds/image/random'
const imgBox = document.querySelector('.image-box')

const getData = async (someUrl) => {
    const res = await fetch(someUrl)
    const data = await res.json()
    return data
}

try {
    const dogPic = await getData(dogUrl)
    console.log(dogPic.message);
    imgBox.insertAdjacentHTML('beforeend', 
    `
    <img src="${dogPic.message}" alt="">
    `)
    
} catch (error) {
    console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
}
setTimeout(function(){
	location.reload();
}, 3000);

//  = = = = = = = = = = = = = = =

// НЕРАБОЧИЙ ВАРИАНТ
// const dogUrl = 'https://dog.ceo/api/breeds/image/random'
// const imgBox = document.querySelector('.image-box')

// const getData = async (someUrl) => {
//     const res = await fetch(someUrl)
//     const data = await res.json()
//     return data
// }

// try {
//     const dogPic = await getData(dogUrl)

//     function getNewPic() {
//         console.log('Test');
//         return dogPic.message
//     }

//     let setInt = setInterval(getNewPic, 3000);
//     imgBox.insertAdjacentHTML('beforeend', 
//     `
//     <img src="${setInt}" alt="">
//     `)

// } catch (error) {
//     console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
// }





