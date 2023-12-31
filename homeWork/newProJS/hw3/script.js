// # Заключительное задание.

// Создайте две html-страницы:

// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле 
// для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не 
// так, необходимо выводить ошибку пользователю.

// 2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" 
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются 
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв 
// из localstorage и со страницы. 
// Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из 
// localstorage, так и со страницы.

const input = document.querySelector('.input__product')
const textarea = document.querySelector('textarea')
const btnSubmit = document.querySelector('.btn-submit')

const listArr = checkLocalStorageData()

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    let id = listArr.length > 0 ? listArr.at(-1).id + 1 : 1
    let product = input.value
    let review = textarea.value
    const newReview = {
        id,
        product,
        review,
    }

    listArr.push(newReview)

    saveToLocStor()
    
    input.value = ''
    textarea.value = ''
})

function saveToLocStor() {
    localStorage.setItem("rews", JSON.stringify(listArr))
}

function checkLocalStorageData() {
    const data = localStorage.getItem("rews")
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}