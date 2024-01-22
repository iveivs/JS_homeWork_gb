const containerPhoto = document.querySelector(".photo-container")


const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'

let state = []

const fetchPhoto = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=2`
    const response = await fetch(url)
    const data = await response.json()
        console.log('test', data.length);
    if(response.ok ){
        state = data
        setPhoto()
    }
    console.log(data.urls.regular);
    } catch (error) {
        console.log(error);
    }

}

// const setPhoto = () => {
//     return `<img src=${state.urls.regular}>`
// }

// console.log('global',state);
fetchPhoto()




// containerPhoto.innerHTML = string

// function toHtml(obj){
//     return `
//         <h3>Random photo</h3>
//         <img src=${obj}>
//     `
// }

// function render() {
//     containerPhoto.insertAdjacentHTML('afterbegin', toHtml())
// }





