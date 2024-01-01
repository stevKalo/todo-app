import "./styles.css";
import TodoItem from "./items.js";
import { createItem, createOption, createInfo } from "./dom.js";

// Global Variables
const content = document.getElementById("content");
const addBtn = document.getElementById("add-btn");
const homeBtn = document.getElementById("home-btn");
const importantBtn = document.getElementById("important-btn");
const dialog = document.getElementById("todo-modal");
const saveBtn = document.getElementById("save-btn");
const closeBtn = document.getElementById("modal-close");
const taskList = document.getElementById("tasks");
const projectNav = document.getElementById("nav-project");

// Todo List Array
let todoList;
let defaultList = [
  {
    description: "This is a test description for my Urgent object",
    dueDate: "2020-07-01",
    priority: "high",
    project: "Urgent Project",
    status: false,
    title: "Urgent Task",
  },
  {
    description: "This is a test description for my Sample object",
    dueDate: "2020-07-02",
    priority: "",
    project: "Test Project",
    status: false,
    title: "Sample Task",
  },
];

// Project List Array
let projectList = [];

function updateLocalStroage() {
  localStorage.setItem("todoList", `${JSON.stringify(todoList)}`);
}

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
  // if local storage has todoList
  // parse todoList from localStorage
  // else set todoList to default
  if (!window.localStorage["todoList"]) {
    todoList = defaultList;
    console.log(todoList);
    localStorage.setItem("todoList", `${JSON.stringify(todoList)}`);
  } else {
    todoList = JSON.parse(localStorage.getItem("todoList"));
  }
  todoList.map((item) => {
    createItem(item, taskList);
    updateProjectList(item.project);
  });
};

// Open Modal
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Modal Buttons

// Save Item
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
  updateLocalStroage();
});

// Close Modal
closeBtn.addEventListener("click", () => {
  modalClear();
  dialog.close();
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

// Priority Filtering
importantBtn.addEventListener("click", () => {
  todoClear();
  todoList.map((item) => {
    if (item.priority == "high") {
      createItem(item, taskList);
    }
  });
});

// Filter Reset
homeBtn.addEventListener("click", () => {
  todoClear();
  todoList.map((item) => {
    createItem(item, taskList);
  });
});
