const containerPhoto = document.querySelector(".photo-container")

const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'
const dataPhoto = fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
.then(response => response.json())
.then(data => {
    console.log('photo'data.urls.regular);
})

function toHtml(obj){
    return `
        <h3>Random photo</h3>
        <img src=${obj}>
    `
}

function render() {
    containerPhoto.insertAdjacentHTML('afterbegin', toHtml(dataPhoto))
}
render()
