const containerPhoto = document.querySelector(".photo-container")
const historyList = document.querySelector(".history-list")

const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'
// const ACCESS_KEY = 'aBBWjpcNK1yT5UJTBGHYV-ulTL9SSv_UVV8by82_jMU'

let state = []

const fetchPhoto = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok) {

            state = data
            console.log(state);
            setPhoto()

            const newObjToLocalStorage = {
                id: state.id,
                urls: state.urls.regular,
                
            }
        }
    } catch (error) {
        console.log(error);
    }

}

const toHtml = () => {
    return `
    <div>
        <h5>Photo by: ${state.user.name}</h5>
        <div class="likes" data-likes=""> 
            <i class="material-icons " >favorite_border</i> 
            <p>${state.likes}</p>
            </div> 
    </div>
    <img src=${state.urls.regular}>
    
    `
}

const setPhoto = () => {
    containerPhoto.innerHTML = toHtml()
}

const arrayOfHistory = JSON.parse(localStorage.getItem('history'))

function saveToLocalStorage(obj) {
    localStorage.setItem('history', JSON.stringify(obj))
}

fetchPhoto()






