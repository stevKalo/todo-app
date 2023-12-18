import "./styles.css";
import TodoItem from "./items.js";

const content = document.getElementById("content");

let newItem = new TodoItem(
  "title",
  "priority",
  "dueDate",
  "description",
  "project",
  false
);
console.log(newItem);
