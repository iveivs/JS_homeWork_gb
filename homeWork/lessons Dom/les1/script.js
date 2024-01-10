// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.outerHeight);
// console.log(window.outerWidth);

// console.log('firstChild' ,document.body.firstChild)
// console.log('lastChild', document.body.lastChild)
// console.log('childNodes', document.body.childNodes)
// console.log('children', document.body.children)

// for(let val of document.body.children) {
//     console.log(val, val.localName === 'div' ? "Это DIV" : "Это не DIV" );
// }

const replayBtn = document.querySelectorAll(".replay-btn")

replayBtn.forEach( btn => {
    btn.addEventListener('click', () => {
        const comment = btn.closest('.comment')
        const replayForm = comment.querySelector(".replay-form")

        // Скрываем формы ответов
        const allReplayForms = document.querySelectorAll(".replay-form")
        allReplayForms.forEach(form => {
            if(form !== replayForm) {
                form.style.display = 'none'
            }
        })
        replayForm.style.display = 'block'
    })
})


const taskInput = document.querySelector(".task-input")
const addBtn = document.querySelector(".add-btn")
const taskList = document.querySelector(".task-list")

if(localStorage.getItem("tasks")){
    taskList.innerHTML = localStorage.getItem("tasks")
}

addBtn.addEventListener('click', () => {
    const taskDescription = taskInput.value
    if(taskDescription !== "") {
        const listItem = document.createElement('li')
        listItem.classList.add('task-item')
        listItem.innerHTML = `
        <span class="task-description">${taskDescription}</span>
        <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(listItem)
        taskInput.value = ''

        localStorage.setItem('tasks', taskList.innerHTML)
    }
})

taskList.addEventListener('click', event => {
    if(event.target.classList.contains("delete-btn")){
        const listItem = event.target.closest('li')
        listItem.parentNode.removeChild(listItem)

        localStorage.setItem('tasks', taskList.innerHTML)
    }
})
