const list = document.querySelector(".list")
const trilho = document.getElementById('trilho')
const todolist = document.querySelector(".container-todolist")
const body = document.querySelector('body')

function addnewtask() {

    const newtask = document.querySelector(".input").value
    const task = newtask
    const li = document.createElement("li")

    if(task !== '') {
        li.innerHTML = `
        <div class="task-box">
            <div class="task">
                <input type="checkbox" class="input-task">
                <span class="text">${task}</span>
            </div>
            <div>
                <button class="btn-edit">
                    <span class="material-symbols-outlined">edit_note</span>
                </button>
            </div>
            <div>
                <button class="btn-clear">
                    <span class="material-symbols-outlined">delete_forever</span>
                </button>
            </div>
        </div>
        `

        list.appendChild(li)
    } 

    const text = li.querySelector('.text')
    const checkbox = li.querySelector(".input-task")

    checkbox.addEventListener('change', function rasuraTexto() {

        if(this.checked) {
            text.style.textDecoration = 'line-through';
        } else {
            text.style.textDecoration = 'none';
        }

        }
    )

    const btnclear = li.querySelector(".btn-clear")

    btnclear.addEventListener('click', function aparar() {
        li.remove()
    })

    const btnedit = li.querySelector(".btn-edit")
    
    btnedit.addEventListener('click', function edit() {
        
        const novotext = window.prompt("Digite o novo texto")

        if(novotext !== null) {
            text.textContent = novotext
        }

    })

    
}

trilho.addEventListener('click', function() {
    trilho.classList.toggle("dark")
    body.classList.toggle("dark")
    todolist.classList.toggle("dark")
})

