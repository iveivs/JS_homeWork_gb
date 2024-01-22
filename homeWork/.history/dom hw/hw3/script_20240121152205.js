const containerPhoto = document.querySelector(".photo-container")
const historyListElem = document.querySelector(".history-list")

// const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'
const ACCESS_KEY = 'aBBWjpcNK1yT5UJTBGHYV-ulTL9SSv_UVV8by82_jMU'

let state = []
let arrFromLS = checkLoccalStorage()

const fetchPhoto = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok) {

            state = data
            console.log(state);
            setPhoto()

            let newObjToLocalStorage = {
                id: state.id,
                name: state.user.name,
                urls: state.urls.regular,
                likes: state.likes,
                likedByUser: state.liked_by_user
            }

            containerPhoto.addEventListener('click', (e) => {

                if(e.target.classList.contains('material-icons')){
                    e.target.classList.toggle('orange600')

                    newObjToLocalStorage = {
                        ...newObjToLocalStorage,
                        likedByUser: !newObjToLocalStorage.likedByUser ? true : false
                    }
                    console.log(newObjToLocalStorage);
                }
            })
            
            arrFromLS.push(newObjToLocalStorage)

            // console.log(arrFromLS);
            saveToLocalStorage(arrFromLS)
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
            <i id="material-icons" class="material-icons" >favorite_border</i> 
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

function checkLoccalStorage () {
    const data = localStorage.getItem("history")
    console.log(data);
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}
console.log('arrFromLS',arrFromLS);

fetchPhoto()

function renderHistory(arr) {
    arr.map()
}






