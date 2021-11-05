const inputNameEl = document.getElementById("name")
const inputTaskEl = document.getElementById("task")
const deleteAllButtonEl = document.getElementById("deleteAll")
const resultEl = document.getElementById("result")
const formEl = document.getElementById("form")

let list = []

class Tasks {
    constructor(name, task, id) {
        this.name = name
        this.task = task
        this.id = id
    }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = inputNameEl.value
    const task = inputTaskEl.value
    const item = new Tasks(name, task, Math.random())

    list.unshift(item)

    renderList()
})

deleteAllButtonEl.addEventListener('click', () =>{
    list.length = 0

    localStorage.clear()

    renderList()
})

const renderList = () => {
    resultEl.innerHTML = ''

    list.forEach((item, index) => {
        const el = document.createElement('div')

        let buttonsUpDown = ''

        if (index === 0) {
            buttonsUpDown = buttonsUpDown + `<button id="down">Вниз</button>`
        } else if (index === (list.length - 1)) {
            buttonsUpDown = buttonsUpDown + `<button id="up">Вверх</button>`
        } else {
            buttonsUpDown = buttonsUpDown + `<button id="up">Вверх</button> <button id="down">Вниз</button>`
        }

        el.innerHTML = `
        <div class="alert alert-secondary" role="alert">Название задачи: ${item.name}; Суть задачи: ${item.task} ${buttonsUpDown}

        <button id="${item.id}" type="button" class="btn btn-danger">
        Удалить
        </button>

        </div>`

        resultEl.appendChild(el)

        const deleteButtonEl = document.getElementById(item.id)

        deleteButtonEl.addEventListener('click', () => {

            let index = list.findIndex(el => el.id === item.id)

            list.splice(index, 1)

            renderList()
        })

        const buttonUpEl = el.querySelector('#up')
        const buttonDownEl = el.querySelector('#down')
        if (index !== 0) {
            buttonUpEl.addEventListener('click', () => {
                [list[index], list[index - 1]] = [list[index - 1], list[index]]
                renderList()
            })
        }
        if (index !== (list.length-1)) {
            buttonDownEl.addEventListener('click', () => {
                [list[index], list[index + 1]] = [list[index + 1], list[index]]
                renderList()
            })
        }
    })
    localStorage.setItem('task', JSON.stringify(list)) // САМЫЙ ПРОСТОЙ СПОСОБ
}

if (localStorage.getItem('task') !== null){
    list = JSON.parse(localStorage.getItem('task'))
    renderList()
}

console.log(localStorage.getItem('task'));