const containerPhoto = document.querySelector(".photo-container")

const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'
const dataPhoto = fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
.then(response => response.json())
.then(data => {
    console.log(data);
})

function toHtml(obj){
    return `
        <img src=${obj.urls}>
    `
}

function render() {
    containerPhoto.insertAdjacentHTML(a)
}
