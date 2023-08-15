// РАБОЧИЙ ВАРИАНТ 
const dogUrl = 'https://dog.ceo/api/breeds/image/random'
const imgBox = document.querySelector('.image-box')
const imgBox2 = document.querySelector('.image-box2')

const getData = async (someUrl) => {
    const res = await fetch(someUrl)
    const data = await res.json()
    return data
}

try {
    // старый вариант(без учёта количества показов картинки)
    // - - - - - - - - - - - - - - - - -
    // console.log(dogPic.message);
    // imgBox.insertAdjacentHTML('beforeend', 
    // `
    // <img src="${dogPic.message}" alt="">
    // `)
    
    // // setTimeout(function() {
    // //     imgBox2.innerHTML = `<div><img src="${dogPic.message}" alt=""></div>`
    // // }, 3000)
    // - - - - - - - - - - - - - - - - -
    // Второй вариант
    async function showPic(count){
        const dogPic = await getData(dogUrl)
        console.log(count);
        imgBox2.innerHTML = `<div>${count}<img src="${dogPic.message}" alt=""></div>`
        if(count < 10){
            setTimeout(showPic, 3000, ++count)
        }
    }
    setTimeout(showPic, 1000, 1)
    
} catch (error) {
    console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
}


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

// РАБОЧИЙ ВАРИАНТ 
// const dogUrl = 'https://dog.ceo/api/breeds/image/random'
// const imgBox = document.querySelector('.image-box')

// const getData = async (someUrl) => {
//     const res = await fetch(someUrl)
//     const data = await res.json()
//     return data
// }

// try {
//     const dogPic = await getData(dogUrl)
//     console.log(dogPic.message);
//     imgBox.insertAdjacentHTML('beforeend', 
//     `
//     <img src="${dogPic.message}" alt="">
//     `)
//     // setTimeout(function(){
//     //     location.reload();
//     // }, 3000);
    
// } catch (error) {
//     console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
// }





