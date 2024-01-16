// на странице есть список элементов, какждый из которых имеет атрибут data-price, содержайший
// цену товара. Создайте функцию, которая принимает максимальную цену  и скрывает все элементы с ценой выше указанного значения.
const filterElementByDataAtribute = (attributeName, maxPrice) => {
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`))
    elements.forEach(element => {
        const price = parseFloat(element.getAttribute(attributeName))
        if(price > maxPrice) {
            element.style.display = 'none'
        }
    })
}

filterElementByDataAtribute('data-price', 50)

// отсотрировать элементы по рейтингу
const sortElementByDataAtribute = attributeName => {
    const rating = document.querySelector('.rating')
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`))

    elements.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute(attributeName))
        const ratingB = parseInt(b.getAttribute(attributeName))
        return ratingA - ratingB
    })

    elements.forEach(element => {
        rating.appendChild(element)
    })
}

// checkbox
sortElementByDataAtribute('data-rating')

const checkbox = document.getElementById('toggleCheckbox')
const content = document.querySelector('.content')

checkbox.addEventListener('change', function(e) {
    if (this.checked) {
        content.classList.add('visible')
    } else {
        content.classList.remove('visible')
    }
})

// preloader

window.addEventListener('load', function(e) {
    const contentEl = this.document.querySelector('.content1')
    contentEl.classList.remove('hidden')

    const loaderEl = this.document.querySelector('.loader')

    loaderEl.style.display = 'none'

})
// Список

const list = document.getElementById('list')

list.addEventListener('click', function (e) {
    if(e.target.tagName === 'LI') {
        console.log(`Вы нажали на ${e.target.textContent}`);
    }
})

//  модальное окно 
const modal = document.querySelector("#modal")
const openModalBtn = document.querySelector(".open-modal-btn")

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

document.addEventListener('mousedown', function (event) {
    if(!modal.contains(event.target) && event.target !== openModalBtn) {
        modal.style.display = 'none'
    }
})

// пользовательское событие

const button = document.querySelector('#btn')
button.addEventListener('click', function(event) {
    if(event.isTrusted) {
        console.log('клик событие ялвяется доверенным');
    } else {
        console.log('клик событие не ялвяется доверенным');
    }
})

function simulateClick() {
    const clickEvent = new Event('click', { bubbles: true})
    button.dispatchEvent(clickEvent)
}

setTimeout(simulateClick, 2000)
