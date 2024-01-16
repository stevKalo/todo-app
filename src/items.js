export default class TodoItem {
  constructor(
    title = '',
    priority = '',
    dueDate = '',
    description = '',
    project = '',
    status = false
  ) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.project = project;
    this.status = status;
  }

  changeStatus() {
    this.status === false ? (this.status = true) : null;
  }

  changeProp(prop, value) {
    this[prop] = value;
  }
}
