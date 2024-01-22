const containerPhoto = document.querySelector(".photo-container")


// const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'


let state = []

const fetchPhoto = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    if(response.ok ){
        state = data
        setPhoto()
    }
    } catch (error) {
        console.log(error);
    }

}

const someFetch = () => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
    .then(response => response.json())
    .then(json => console.log(json))
    
}
someFetch()
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





