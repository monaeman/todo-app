//bring in elements from todolist
const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");
const todos =JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo)=> {
      addTodo(todo);
    });
  }

form.addEventListener('submit', (e) => {
    e.preventDefault();
//console.log(e)

addTodo()

})
function addTodo(todo){
    let todoText = input.value
    if(todo){
        todoText = todo.text
    }
   console.log(todoText)
   if(todoText){
    const todoEL = document.createElement('li');
    // if there is 
    if(todo && todo.completed){
        // add strike through class
          todoEL.classList.add('completed')

    }
    //append this todo li item to the todo unordered list 
    todoEL.innerText = todoText
//append the todo li item to the todo unordered list
    todoUL.appendChild(todoEL);
    //clear out after enter
    input.value = " " 

    todoEL.addEventListener('click', () =>{
        todoEL.classList.toggle('completed');
        updateLS();
    })
   todoEL.addEventListener('contextmenu', (e) => {
       e.preventDefault();
       // remove list item
           todoEL.remove()
           updateLS()
   })


   }
   updateLS()

}

function updateLS(){
     const todosEl = document.querySelectorAll('li');

    const todos=[]
    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem("todos" , JSON.stringify(todos))
}

