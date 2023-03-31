import { selectors } from "./DOM";
import { storage } from "./event";
const todoFormContainer = selectors().todoFormContainer;
const todoTaskInput = selectors().todoTaskInput;
const taskList = selectors().taskList;
const mainTitle = selectors().mainTitle;
export default class Task {
  constructor() {
    this.count = 0;
  }

  createTask() {
    console.log(`storage: ${storage}`);
    for (let i = 0; i < storage.length; i++) {
      const element = storage[i];
      const button = document.createElement('button');
      button.classList.add('todoTitle');
      const taskName = todoTaskInput.value;
      
      if (element.title === mainTitle.innerText) {
        element[`task${this.count}`] = taskName;
        button.innerText = element[`task${this.count}`];
        taskList.appendChild(button);
        console.log(element);
        this.count++;
      }
    }
    todoFormContainer.classList.remove('active');
    todoTaskInput.value = '';
  };

  removeTasks() {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}
