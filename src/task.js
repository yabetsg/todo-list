import { selectors } from "./DOM";
import { storage , inboxStorage} from "./event";
import { format } from "date-fns";


const todoFormContainer = selectors().todoFormContainer;
const todoTaskInput = selectors().todoTaskInput;
const taskList = selectors().taskList;
const mainTitle = selectors().mainTitle;

console.log(format(new Date(2020,8,11),'yyyy-MM-dd'));
export default class Task {
  constructor() {
    this.count = 0;
  }

  createTask() {
    for (let i = 0; i < storage.length; i++) {
      
      const element = storage[i];
      const button = document.createElement('button');
      const date = document.createElement('input');
      
      date.type = 'date';
      date.classList.add('dateInput')
     
      console.log(date);
      button.classList.add('todoTitle');
      const taskName = todoTaskInput.value;
      console.log(element.title);
      console.log(mainTitle.innerText);
      
      button.appendChild(date);
      if (element.title === mainTitle.innerText) {
        element[`task${this.count}`] = taskName;
        button.innerText = element[`task${this.count}`];
        inboxStorage.push(element[`task${this.count}`]); 
        
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
