const listWrapper = document.querySelector('.list-wrapper')
// console.log(listWrapper);
// console.log(localStorage.getItem('rews'));

const arrayOfReviews = JSON.parse(localStorage.getItem('rews'))
console.log(arrayOfReviews);

function renderReviews(obj) {
    let markdown = `
    <div class="listItem">
        <h4>Наименование:${obj.product}</h4>
        <div class="text-wrapper hidden">
            <p class="text-toggle ">Отзыв: ${obj.review}</p>
            <button class="btn-del">удалить отзыв</button>
            <br>
        </div>
        
        <button class="btn-toggle">Показать Отзыв</button>
    </div>
    `
    listWrapper.insertAdjacentHTML('afterbegin', markdown)
}

const textReviewElem = document.querySelector 

arrayOfReviews.map(el => {
    renderReviews(el)
})

// const btnToggle = document.querySelectorAll('.btn-toggle')
// console.log(btnToggle);
listWrapper.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.closest('.btn-toggle')) {
        e.target.previousElementSibling.classList.toggle('hidden')
        if(e.target.textContent == 'Показать Отзыв'){
            e.target.textContent = 'Скрыть Отзыв'
        } else {
            e.target.textContent = 'Показать Отзыв'
        }
    }
})


