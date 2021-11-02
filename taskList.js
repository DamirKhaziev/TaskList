const inputNameEl = document.getElementById("name")
const inputTaskEl = document.getElementById("task")
const buttonEl = document.getElementById("append")
const resultEl = document.getElementById("result")
const formEl = document.getElementById("form")

const list = []

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
    list.push(item)

    renderList()

})

const renderList = () => {
    resultEl.innerHTML = ''

    list.forEach((item, index) => {
        const el = document.createElement('div')
        let buttonsUpDown = ''
        if (index === 0) {
        buttonsUpDown = buttonsUpDown + `<button>Вниз</button>`
        }
        else if (index === (list.length-1)){
            buttonsUpDown = buttonsUpDown + `<button>Вверх</button>`
        }
        else {
            buttonsUpDown = buttonsUpDown + `<button>Вверх</button> <button>Вниз</button>`
        }

        el.innerHTML = `
        <div class="alert alert-secondary" role="alert">Название задачи: ${item.name}; Суть задачи: ${item.task} ${buttonsUpDown}

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

        let buttonUpDownEl =
        // обработчик вверх/вниз
    })

}

// const swap = () =>{
//     for (let item of list){
//         if
//     }
// }

// const a = {
//     "1": 1,
//     "name": "some name"
// }
//
// console.log(JSON.stringify(a))

// localStorage.setItem('key1', 'value1')
// // localStorage.removeItem('key1')
// console.log(localStorage.getItem('key1'));