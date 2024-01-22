const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'
// const ACCESS_KEY = 'aBBWjpcNK1yT5UJTBGHYV-ulTL9SSv_UVV8by82_jMU'

const containerPhoto = document.querySelector(".photo-container")
const historyListElem = document.querySelector(".history-list")

let state = []
let arrFromLS = checkLoccalStorage()

const fetchPhoto = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok) {
            state = data
            setPhoto()

            let newObjToLocalStorage = {
                id: state.id,
                likedByUser: state.liked_by_user,
                name: state.user.name,
                urls: state.urls.regular,
                likes: state.likes,
            }
            
            arrFromLS.push(newObjToLocalStorage)

            saveToLocalStorage(arrFromLS)

            containerPhoto.addEventListener('click', (e) => {
                if(e.target.classList.contains('material-icons')){
                    e.target.classList.toggle('orange600')

                    newObjToLocalStorage = {
                        ...newObjToLocalStorage,
                        likedByUser: !newObjToLocalStorage.likedByUser ? true : false,
                        likes: newObjToLocalStorage.likes + 1
                    }
                    arrFromLS.pop()
                    arrFromLS.push(newObjToLocalStorage)
                    saveToLocalStorage(arrFromLS)
                    
                    if(e.target.classList.contains('orange600')){
                        e.target.nextElementSibling.textContent++
                    } else {
                        e.target.nextElementSibling.textContent = state.likes
                        newObjToLocalStorage = {
                            ...newObjToLocalStorage,
                            likedByUser: !newObjToLocalStorage.likedByUser ? true : false,
                            likes: state.likes
                            
                        }
                        arrFromLS.pop()
                    arrFromLS.push(newObjToLocalStorage)
                        saveToLocalStorage(arrFromLS)
                    }
                    

                }
            })
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
            <p class="neighboгr">${state.likes}</p>
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
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}
console.log('arrFromLS',arrFromLS);

fetchPhoto()

function renderHistory(arr) {
    arr.map(elem => {
        return historyListElem.insertAdjacentHTML('afterbegin', `
        <div class="history-item">
            <img src=${elem.urls}>
            <div>
            <i id="material-icons" class="material-icons ${elem.likedByUser ? 'orange600' : ''}" >favorite_border</i>
                <p class="neighboгr">${elem.likes}</p>
            </div>
        </div>
        `) 
    })
}

renderHistory(arrFromLS)






