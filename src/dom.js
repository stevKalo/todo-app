export function createInfo(item) {
  const body = document.querySelector('body');
  const modal = document.createElement('dialog');
  modal.setAttribute('id', 'info-modal');

  const titleInfo = document.createElement('h2');
  titleInfo.textContent = item.title;
  titleInfo.setAttribute('id', 'title-info');

  const dateInfo = document.createElement('date');
  dateInfo.textContent = item.dueDate;
  dateInfo.setAttribute('id', 'date-info');

  const projectInfo = document.createElement('span');
  projectInfo.textContent = item.project;
  projectInfo.setAttribute('id', 'project-info');

  const notesInfo = document.createElement('p');
  notesInfo.textContent = item.description;
  notesInfo.setAttribute('id', 'notes-info');

  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('id', 'close-btn');
  closeBtn.textContent = 'Close';
  closeBtn.addEventListener('click', () => {
    const modal = document.getElementById('info-modal');
    modal.close();
    modal.remove();
    // close modal
    // remove modal from DOM
  });

  body.appendChild(modal);
  modal.appendChild(titleInfo);
  modal.appendChild(dateInfo);
  modal.appendChild(projectInfo);
  modal.appendChild(notesInfo);
  modal.appendChild(closeBtn);

  // make modal
  // make info elements
  // make close button
  // add button functionality
  // push modal to dom
  // push elements to modal
}

export function createItem(obj, parent) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.classList.add(`priority-${obj.priority}`);
  item.addEventListener('click', () => {
    createInfo(obj);
    document.getElementById('info-modal').showModal();
  });

  const itemTitle = document.createElement('span');
  itemTitle.classList.add('item-title');
  itemTitle.textContent = obj.title;

  const itemDate = document.createElement('span');
  itemDate.classList.add('item-date');
  itemDate.textContent = obj.dueDate;

  parent.appendChild(item);
  item.appendChild(itemTitle);
  item.appendChild(itemDate);
}

export function createOption(project) {
  const projectOption = document.getElementById('project-options');
  const projectFilter = document.getElementById('nav-project');
  const autoOption = document.createElement('option');
  const filterOption = document.createElement('option');
  autoOption.value = project;
  filterOption.value = project;
  filterOption.textContent = project;
  projectOption.appendChild(autoOption);
  projectFilter.appendChild(filterOption);
}
