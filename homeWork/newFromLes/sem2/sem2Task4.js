/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const inputEl = document.querySelector(".user-input");
const buttonEl = document.querySelector(".add-button");
const ulEl = document.querySelector(".item-list");
const divElError = document.querySelector(".error-message");

buttonEl.addEventListener("click", () => {
  const messege = inputEl.value;

  try {
    if (!(messege.length >= 3 && messege.length <= 10)) {
      throw new Error("неправильное сообщение");
    }
    ulEl.textContent = "";
    console.log("Попытка добавления элемента завершена");
  } catch (error) {
    ulEl.textContent = error.message;
  } finally {
    console.log("Попытка добавления элемента завершена");
  }
});