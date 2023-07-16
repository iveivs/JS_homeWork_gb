const inputNum = document.getElementById('inputNum')
const createBtn = document.getElementById('btn')
const output = document.getElementById('output')
const clearBtn = document.getElementById('clear')

// console.log(inputNum.value);
createBtn.onclick = function () {
    let toFaringeit = (9 / 5) * Number(inputNum.value) + 32 
    console.log(toFaringeit);
    toFaringeit += ' °F'
    output.innerHTML = toFaringeit
}


clearBtn.onclick = function (e) {
    inputNum.value = ''
    output.innerHTML = ''
}
