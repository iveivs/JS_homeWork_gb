const url = 'https://jsonplaceholder.typicode.com/users'
const wrapElement = document.querySelector('.wrapper')


const getData4 = async (someUrl) => {
    const res = await fetch(someUrl)
    const data = await res.json()
    return data
}
// const users = await getData2(url)
// console.log(users);

try {
    const users = await getData4(url)
    console.log(users);
    users.forEach((element, index) => {
        wrapElement.insertAdjacentHTML(
            'beforeend',
            `
            <div class="box" id = "${index}">name: ${element.name} <br>  city: ${element.address.city} <br> 
            <button>delete</button></div>
            
            `
        )
        localStorage.setItem(`${index}`, JSON.stringify(element.name))

    });
    const btns = document.querySelectorAll('button')
    console.log(btns);
    btns.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            const delBox = document.getElementById(index)
            delBox.innerHTML = ' '
            localStorage.removeItem(index)
        }) 
    })
} catch (error) {
    console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
}






// всё что ниже просто рабочие моменты для личного пользования

// localStorage.spisok += JSON.stringify(`${element.name}`) // не пригодилось (добавление в ЛокСтор при переборе forEach)
// localStorage.spisok2 += JSON.stringify({name: `${element.name}`}) // не пригодилось (добавление в ЛокСтор при переборе forEach)
// delete users[index] // не знаю есть ли смысл удалять пришедший элемент массива

// localStorage.clear()
// console.log(localStorage.getItem('spisok'));

// localStorage.



// const user1 = localStorage.getItem('name')
// console.log(user1);




// - - - - - - - - - - - - - - - - - - - - - - - -
// Перебор массива с обёектами, который приходит с сервера
    // const arr = []
    // let str = ''
    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].name){
    //         arr.push(users[i].name)
    //         str += users[i].name
    //         localStorage.usersList += JSON.stringify(`${users[i].name}`)
    //     }
    // }
    // console.log(arr);
    // console.log(str);
// - - - - - - - - - - - - - - - - - - - - - - - -
// ШАГ 2
    // const arr = []
    // let str = ''
// for(let i = 0; i < users.length; i++) {
//     if(users[i].name){
//         arr.push(users[i].name)
//         str += users[i].name
//         localStorage.usersList += JSON.stringify(`${users[i].name}`)
//     }
// }
// console.log(arr);
// // console.log(str);
// // localStorage.setItem('name2', str) // не подходит, так как выводит всё подряд, без разделителя
// localStorage.setItem('name3', arr) // Leanne Graham,Ervin Howell,Clementine Bauch,Patricia Lebsack,Chelsey Dietrich.....

//  - - - - - - - - - - - - - - - 

// console.log("КЛИК");
// console.log(index);
// const box = document.querySelector('.box') // не подходит. Т.к. удаляет только один элемент
// box.innerHTML = ' '