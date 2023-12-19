export default function createItem(obj, parent) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.classList.add(`priority-${obj.priority}`);
  item.textContent = obj.title;
  parent.appendChild(item);
}
