import "./styles.css";
import TodoItem from "./items.js";
import createItem from "./dom.js";

// Global Variables
const content = document.getElementById("content");
const addBtn = document.getElementById("add-btn");
const dialog = document.getElementById("todo-modal");
const saveBtn = document.getElementById("save-btn");
const taskList = document.getElementById("tasks");

// Todo List Array
let todoList = [];

// Gloabl Functions
function modalClear() {
  document.getElementById("title").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("description").value = "";
  document.getElementById("project").value = "";
}

// Open Modal
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Make Todo Item
saveBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;
  const description = document.getElementById("description").value;
  const project = document.getElementById("project").value;

  const todoItem = new TodoItem(
    title,
    priority,
    dueDate,
    description,
    project,
    false
  );
  todoList.push(todoItem);
  dialog.close();
  modalClear();
  createItem(todoItem, taskList);
});
