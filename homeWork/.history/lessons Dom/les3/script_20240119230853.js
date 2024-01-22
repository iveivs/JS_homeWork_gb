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

const selected




