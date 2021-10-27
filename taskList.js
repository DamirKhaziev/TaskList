const inputNameEl = document.getElementById("name")
const inputTaskEl = document.getElementById("task")
const buttonEl = document.getElementById("append")
const resultEl = document.getElementById("result")

const list = []

class Tasks {
    constructor(name, task, id) {
        this.name = name
        this.task = task
        this.id = id
    }
}

buttonEl.addEventListener('click', () => {
    const name = inputNameEl.value
    const task = inputTaskEl.value
    const item = new Tasks(name, task, Math.random())
    list.push(item)

    renderList()

})

const renderList = () => {
    resultEl.innerHTML = ''

    for (let item of list) {
        const el = document.createElement('div')
        // el.innerHTML = `
        // <p>Название задачи: ${item.name}; Суть задачи: ${item.task}
        // <button id="${item.id}">
        // Удалить
        // </button>
        //
        // </p>`

        el.innerHTML = `
        <div class="alert alert-secondary" role="alert">Название задачи: ${item.name}; Суть задачи: ${item.task}
        <button id="${item.id}" type="button" class="btn btn-danger">
        Удалить
        </button>

        </div>`

        resultEl.appendChild(el)
        const deleteButtonEl = document.getElementById(item.id)

        deleteButtonEl.addEventListener('click', () =>{

            let index = list.findIndex(el => el.id === item.id)

            list.splice(index, 1)

            renderList()
        })
    }
}