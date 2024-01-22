const containerPhoto = document.querySelector(".photo-container")

const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'
const fetchPhoto = async () => {

}


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
