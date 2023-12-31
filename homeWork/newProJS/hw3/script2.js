const listWrapper = document.querySelector('.list-wrapper')

const arrayOfReviews = JSON.parse(localStorage.getItem('rews'))

const productNameList = []
arrayOfReviews.map((elem) => {
    productNameList.push(elem.product)
})
const uniqKeys = new Set(productNameList)

// шаблон для вывода данных
function renderReviews(productName) {
    let tempObjArr = arrayOfReviews.filter(elem => {
        if (elem.product == productName) {
            return elem
        }
    })
    let markdown = `
    <div class="wrap-item" data-prodname=${productName}>
        <h4>Наименование:${productName}</h4>
        <div class="text-wrapper hidden">
            <p class="text-toggle "> ${tempObjArr.map(elem => {
        return `<p 
                    class="list-item" 
                    data-id=${elem.id} 
                    data-prodname=${productName}
                    > 
                        Отзыв: ${elem.review} 
                    <button class="btn-del">Удалить Отзыв</button><br> 
                </p>`
        }).join(" ")} </p>
            <br>
        </div>
        
        <button class="btn-toggle">Показать Отзывы</button>
    </div>
    `
    listWrapper.insertAdjacentHTML('afterbegin', markdown)
}

const textReviewElem = document.querySelector 

uniqKeys.forEach(el => {
    renderReviews(el)
})

// вешаем слушатель события но обёртку списка
listWrapper.addEventListener('click', (e) => {
    // переключение названия кнопки
    if(e.target.closest('.btn-toggle')) {
        e.target.previousElementSibling.classList.toggle('hidden')
        if(e.target.textContent == 'Показать Отзывы'){
            e.target.textContent = 'Скрыть Отзывы'
        } else {
            e.target.textContent = 'Показать Отзывы'
        }
    }
    // удаление по клику кнопки 
    if(e.target.closest('.btn-del')){
        let elemForDel = e.target.closest('.list-item')
        elemForDel.remove()
        let id = elemForDel.getAttribute('data-id')

        const dataLocStor = JSON.parse(localStorage.getItem("rews"))
        const filteredArrToLS = dataLocStor.filter(el => el.id != id)
        localStorage.setItem("rews", JSON.stringify(filteredArrToLS))

        
        const dataAtributOfProduct = elemForDel.getAttribute("data-prodname")
        const dataLocStor2 = JSON.parse(localStorage.getItem("rews"))
        tempArr = []
        dataLocStor2.map((elem) => {
            tempArr.push(elem.product)
        })

        const wrapItem = document.querySelector(`[data-prodname=${dataAtributOfProduct}]`)

        if(!tempArr.includes(dataAtributOfProduct)){
            wrapItem.remove()
        }
    }
})


