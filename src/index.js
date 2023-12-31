import "./styles.css";
import TodoItem from "./items.js";
import { createItem, createOption, createInfo } from "./dom.js";

// Global Variables
const content = document.getElementById("content");
const addBtn = document.getElementById("add-btn");
const importantBtn = document.getElementById("important-btn");
const dialog = document.getElementById("todo-modal");
const saveBtn = document.getElementById("save-btn");
const taskList = document.getElementById("tasks");
const projectNav = document.getElementById("nav-project");

// Todo List Array
let todoList = [];

// Project List Array
let projectList = [];

function updateProjectList(item) {
  projectList.push(item);
  createOption(item);
}

// Clear Functions
function modalClear() {
  document.getElementById("title").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("project").value = "";
}

function todoClear() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// On Load Functions
window.onload = () => {
  const urgentSample = new TodoItem(
    "This is an Urgent Task",
    "high",
    "2020-07-01",
    "This is a test description for my urgent todo object",
    "Test Project",
    false
  );
  updateProjectList("Test Project");
  todoList.push(urgentSample);
  createItem(urgentSample, taskList);

  const normalSample = new TodoItem(
    "This is a Sample Task",
    "",
    "2020-07-02",
    "This the another description of  Todo item",
    "Sample Project",
    false
  );
  updateProjectList("Sample Project");
  todoList.push(normalSample);
  createItem(normalSample, taskList);
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

// Project Filtering
projectNav.addEventListener("change", (event) => {
  const selectedProject = event.target.value;
  todoClear();
  if (selectedProject != "default") {
    todoList.map((item) => {
      if (item.project == selectedProject) {
        createItem(item, taskList);
      }
    });
  } else {
    todoList.map((item) => {
      createItem(item, taskList);
    });
  }
});

importantBtn.addEventListener("click", () => {
  todoClear();
  todoList.map((item) => {
    if (item.priority == "high") {
      createItem(item, taskList);
    }
  });
});
