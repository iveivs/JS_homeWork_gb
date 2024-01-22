// Обращения(получение элемента)
// console.log(document.forms.superForm);
// console.log(document.forms[1]);
// - - 

const form = document.forms.superForm
// console.log(form.elements.first); 
// console.log(form.elements.second);
form.elements.second.value = 'New Value'

//  - - - - - - - - -

const someSelect = document.forms.superForm3.selectForm
// Следующие три строки делают(?) одно и тоже
// someSelect.options[2].selected = true
// someSelect.selectIndex = 2
// someSelect.value = "Dolor"

const selectedEl = Array.from(someSelect.options)
.filter(option => option.selected)
.map(option => option.value)
console.log(selectedEl); 
// - - - - - - - - - - -

// Задача
// Вы разрабатываете приложение для выбора и отображения данных о странах. У вас есть форма включающая элемент select,
// в котором пользователь может выбрать определённую страну. При выборе страны, вам необходимо динамически обновлять другой элемент на странице,
// например изображать информацию о столице страны

const selectElement = document.querySelector('#')





