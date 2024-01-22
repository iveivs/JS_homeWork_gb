const containerPhoto = document.querySelector(".photo-container")


const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'

fetchPhoto()
function toHtml(obj){
    return `
        <h3>Random photo</h3>
        <img src=${obj}>
    `
}

function render() {
    containerPhoto.insertAdjacentHTML('afterbegin', toHtml(fetchPhoto()))
}
const fetchPhoto = async () => {
    const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(typeof data.urls.regular);
    return data.urls.regular
    render()
}




