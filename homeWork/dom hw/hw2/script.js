const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('#btnNext')
const btnPrev = document.querySelector('#btnPrev')
const paginationBox = document.querySelector(".pagination-box")

sliderItems.forEach((slide, index) => {
    // Скрываем все индексы кроме первого
    if(index != 0) {
        slide.classList.add('hidden')
    }
    // Добавляем индексы в дата-атрибут
    slide.dataset.index = index

    // Добавляем data атрибут для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '')
})

btnNext.addEventListener('click', () => {
    showNextSlide('next')
})

btnPrev.addEventListener('click', () => {
    showNextSlide('prev')
})

// создаём элементы пагинации
function toHTMLPagination(index) {
    return `
        <div data-index="${index}" class="small-circle"></div>
    `
}
// Добавляем пагинацию на страницу
function renerPaginationsElements() {
    sliderItems.forEach((elem, index) => {
        return paginationBox.insertAdjacentHTML('beforeend', toHTMLPagination(index))
    })
}
// 
renerPaginationsElements()

// получаем элементы со страницы
const paginationElements = Array.from(document.querySelectorAll(".small-circle"))

paginationElements[0].classList.add('pagination--active')

// Вешаем слушатель событий для дальнейшего изменения активного элемента
//  и переключения изображения
paginationElements.forEach(elem => {
    elem.addEventListener('click', (e) => {

        const currentIndex = e.target.getAttribute('data-index')

        sliderItems.forEach((elem, index) => {
            elem.classList.add('hidden')
        })

        sliderItems[currentIndex].classList.remove('hidden')

        paginationElements.forEach((elem) => {
            elem.classList.remove('pagination--active')
        })

        paginationElements[currentIndex].classList.add('pagination--active')

        const currentSlide = slider.querySelector('[data-active]')
        currentSlide.removeAttribute('data-active')
        sliderItems[currentIndex].setAttribute('data-active', '')
    })
})


function showNextSlide(dirrection) {
    // Получаем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    // currentSlide.classList.add('hidden')
    sliderItems.forEach((elem, index) => {
        elem.classList.add('hidden')
    })
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex;
    if(dirrection === 'next') {
        // показываем след слайд
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ?  0 : currentSlideIndex + 1
    } else if (dirrection === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
    }


    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')

    paginationElements.forEach((elem) => {
        elem.classList.remove('pagination--active')
    })
    paginationElements[nextSlideIndex].classList.add('pagination--active')
}

