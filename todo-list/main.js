const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const taskList = document.getElementsByClassName("taskList")[0];

const tasks = [
  {
    title: "",
    isDone: false,
    isEdit: false,
    transiction: true,
  },
];

addBtn.addEventListener("click", () => {
  addtask();
});
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addtask();
  }
});

function addtask() {
  tasks.push({ title: todoInput.value, isDone: false });
  renderTodo();
  todoInput.value = "";
}

function deleteTodo(index) {
  console.log("delete", index);
  tasks.splice(index, 1);
  tasks[index].transiction = !tasks[index].transiction;
  renderTodo();
}
function checkTodo(i) {
  tasks[i].isDone = !tasks[i].isDone;
  renderTodo();
}
function editTodo(i) {
  tasks[i].isEdit = !tasks[i].isEdit;
  if (!tasks[i].isEdit) {
    const newInput = document.getElementsByClassName(`edito-${i}`)[0];
    console.log(newInput);
    tasks[i].title = newInput.value;
  }
  renderTodo();
}
function renderTodo() {
  taskList.innerHTML = "";

  for (let i = 1; i < tasks.length; i++) {
    taskList.innerHTML += `<div class="tasks anima1">
            ${
              tasks[i].isEdit
                ? `<input class="edito edito-${i}" type="text" value="${tasks[i].title}"/>`
                : `<h3 class="${tasks[i].isDone ? "done" : "inprogress"} " >${
                    tasks[i].title
                  }</h3>`
            }
            <div class="buttons">
                <button class="editBtn" onclick= "editTodo(${i})"> ${
      tasks[i].isEdit ? "save" : "edit"
    }</button>   
                <button class="checkBtn" onclick= "checkTodo(${i})">check</button>
                <button class="deleteBtn" onclick= "deleteTodo(${i})" >delete</button>
                </div>
            </div>`;
  }
}

let arr = [1, 2, 3];
console.log(arr);
arr.splice(0, 1);
console.log(arr);
{
  /* <h3 class="${tasks[i].isDone ? "done" : "inprogress"} ${tasks[i].isEdit ? "edito" : "ingropress"}" >${tasks[i].title}</h3> */
}
