import "./styles.css";
import TodoItem from "./items.js";
import { createItem, createOption, createInfo } from "./dom.js";

// Global Variables
const content = document.getElementById("content");
const addBtn = document.getElementById("add-btn");
const dialog = document.getElementById("todo-modal");
const saveBtn = document.getElementById("save-btn");
const taskList = document.getElementById("tasks");

// Todo List Array
let todoList = [];

let projectList = [];

function updateProjectList(item) {
  projectList.push(item);
  createOption(item);
}

// Gloabl Functions
function modalClear() {
  document.getElementById("title").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("project").value = "";
}

// On Load Functions
window.onload = () => {
  const todoItem = new TodoItem(
    "This is an Urgent Task",
    "high",
    "2020-07-01",
    "This is a test description for my sample todo object",
    "Test Project",
    false
  );
  updateProjectList("Test Project");
  todoList.push(todoItem);
  createItem(todoItem, taskList);
};

// Open Modal
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Make Todo Item
saveBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;
  const description = document.getElementById("notes").value;
  const project = document.getElementById("project").value;

  if (project != "") {
    if (!projectList.includes(project)) {
      updateProjectList(project);
    }
  }
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
