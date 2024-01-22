const containerPhoto = document.querySelector(".photo-container")


const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'


const fetchPhoto = async () => {
    const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    const response = await fetch(url)
    const data = await response.json()

    if(response.ok && data.l){
        
    }
    console.log(data.urls.regular);
    // const string = `
    //     <h3>Random photo</h3>
    //     <img src=${data.urls.regular} >
    // `
    // console.log(string);
}

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





