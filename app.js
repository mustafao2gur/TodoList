//! select işlemleri
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(" .todo-list");
const todoFilter=document.querySelector(".filter-todo");
const calender = document.getElementById("calender");

//! alert
const alertWarning = document.querySelector(".alert-warning");
const alertSucces = document.querySelector(".alert-succes ");

//! eventler
// document.addEventListener("DOMContentLoaded",function(){
//     getTodos();
// });
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck)
todoFilter.addEventListener("click",filterTodo)

//!takvim
let addItemValue;
let calenderValue;
plus.addEventListener("click", () => {
  if (addItem.value) {
    calender.classList.toggle("calender1");
  }
});

plus1.addEventListener("click", () => {
  if (calender.value) {
    addItemValue = addItem.value;
    calenderValue = calender.value;
    addList();
    calender.classList.remove("calender1");
    addItem.value = "";
  }
});



//!fonsiyonlar
function addTodo(e){
    e.preventDefault();

    const kontrol=str=>!str.trim().length;
if (kontrol(todoInput.value)) {
  alertWarning.style.display = "block";
  setTimeout(() => {
    alertWarning.style.display = "none";
  }, 2000);
  //clear
  todoInput.value = "";
} else {

  alertSucces.style.display = "block";
  setTimeout(() => {
    alertSucces.style.display = "none";
  }, 2000);
saveLocalTodos(todoInput.value);
                                                      //! listenin ana divini oluşturuyoruz
  const todoDIV = document.createElement("div");
  todoDIV.classList.add("todo");
                                              //! check butonu (sol) oluşturma
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check-circle icn'></i>";
  completedButton.classList.add("complete-btn");
  completedButton.classList.add("ortak");
  todoDIV.appendChild(completedButton);

                                                      //!ortadaki li
  const newTodo = document.createElement("li");
  newTodo.innerText = `${todoInput.value} ${calender.value}`;
  newTodo.classList.add("todo-item");
  todoDIV.appendChild(newTodo);
  

  //trash (sağ)button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fa fa-minus-circle icn'></i>";
  trashButton.classList.add("trash-btn");
  trashButton.classList.add("ortak");
  todoDIV.appendChild(trashButton);

  //append liste ekle
  todoList.appendChild(todoDIV);


  //clear
  todoInput.value = "";
}

}
 
function deleteCheck(e){
  const item = e.target;

  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocaleStorage(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}




//localStroge
function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
todos.push(todo)
localStorage.setItem("todos", JSON.stringify(todos))
  } 
  
  

// //get Todos
//   function getTodos(){
//    let todos;
//    if (localStorage.getItem("todos") === null) {
//      todos = [];
//    } else {
//      todos = JSON.parse(localStorage.getItem("todos"));
//    }
// todos.forEach((todo)=>{
//  const todoDIV = document.createElement("div");
//   todoDIV.classList.add("todo");
//   // check butonu (sol) oluşturma
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = "<i class='fas fa-check-circle icn'></i>";
//   completedButton.classList.add("complete-btn");
//   completedButton.classList.add("ortak");
//   todoDIV.appendChild(completedButton);

//   //ortadaki li
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todo;
//   newTodo.classList.add("todo-item");
//   todoDIV.appendChild(newTodo);
  

//   //trash (sağ)button
//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = "<i class='fa fa-minus-circle icn'></i>";
//   trashButton.classList.add("trash-btn");
//   trashButton.classList.add("ortak");
//   todoDIV.appendChild(trashButton);

//   //append liste ekle
//   todoList.appendChild(todoDIV);
// });
//   }

function removeLocaleStorage(todo){
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }//li yani
const todoIndex=todo.children[1].innerText;
  todos.splice(todos.indexOf(todoIndex),1);
localStorage.setItem("todos", JSON.stringify(todos));
}



