const tBody = document.querySelector(".tbody")

async function getData() {
    try {
        const res = await fetch('./data.json')
        const data = await res.json()
        render(data)

    } catch (error) {
        console.log(error);
    }
}

function render(arr = []) {
    const html = arr.map(toHTML).join('')
    tBody.innerHTML = html
}

function toHTML(lesson) {
    return `
    <tr>
        <td>${lesson.title}</td>
        <td>${lesson.time}</td>
        <td class="max">${lesson.max}</td>
        <td class="current">${lesson.current}</td>
        <td>
            <button id="btn-add" class="btn-add">записаться</buttton>
        </td>
    </tr>
    `
}

getData()

tBody.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-add')) {
        const parentElem = e.target.closest('tr')
        const current = parentElem.querySelector('.current')
        current.textContent = +current.textContent + 1

        const max = parentElem.querySelector('.max')
        if(+max.textContent === +current.textContent) {
            e.target.disabled = true
        }
    }
})




