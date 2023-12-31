export function createItem(obj, parent) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.classList.add(`priority-${obj.priority}`);
  item.textContent = obj.title;
  parent.appendChild(item);
}

export function createOption(item) {
  const projectOption = document.getElementById("project-options");
  const newOption = document.createElement("option");
  newOption.value = item;
  projectOption.appendChild(newOption);
}
