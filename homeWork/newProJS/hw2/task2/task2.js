"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное id, для упрощения, используем `Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const container = document.querySelector('.container')

function cardTemplate(obj, index) {
  return `
  <div class="card" >
      <div class="card__img">
        <img src="phone.jpg">
      </div>
      <div class="card__info">
        <div class="card__title">
          <h5>${obj.product}</h5>
        </div>
        <div class="card__review">
          <h6>Отзывы:</h6>
          ${obj.reviews.map((elem) => {
            return `<p>${elem.text}</p>`
          }).join(" ")}
        </div>
        <form >
          <textarea data-index=${index} placeholder="Начинайте вводить сообщение, после чего нажмите Enter" class="card__textarea"></textarea>
        </form>
      </div>
  </div>
  `
} 

function render() {
  container.insertAdjacentHTML('beforeend', initialData.map((elem, index) => {
    return cardTemplate(elem, index)
  }
  ).join(" ")
  )
}
render()


container.addEventListener('keydown', (e)=> {
  if(e.target.closest('textarea')){
    const value = e.target.value
    const newReview = {}
    const dataIndex = e.target.dataset.index
    if (e.key === 'Enter' && value.length >= 5 && value.length < 500) {
            newReview.text = value
            newReview.id = Date.now()
            initialData[dataIndex].reviews.push(newReview)
            container.innerText = ''
            render()
          } else if (e.key === 'Enter' && value.length < 5) {
            alert('Отзыв должен содержать не менее 5 символов')
          } else if (e.key === 'Enter' && value.length > 500) {
            alert('Отзыв должен содержать не более 500')
          }
  }
})






