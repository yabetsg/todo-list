import { selectors } from "./DOM";
import { storage , inboxStorage} from "./event";
import { format } from "date-fns";


const todoFormContainer = selectors().todoFormContainer;
const todoTaskInput = selectors().todoTaskInput;
const taskList = selectors().taskList;
const mainTitle = selectors().mainTitle;
const dueDate = selectors().dueDate;

export default class Task {
  constructor() {
    this.count = 0;
  }
  
  createTask() {
    
    for (let i = 0; i < storage.length; i++) {
      
      const element = storage[i];
      const inboxElement = inboxStorage[i];
      const button = document.createElement('button');
      const date = document.createElement('input');
      const span = document.createElement('span');
      const div = document.createElement('div');
      const div2 = document.createElement('div');
      const icon = document.createElement('i');
      const p = document.createElement('p');
      date.type = 'date';
      date.classList.add('dateInput');
      div.classList.add('leftSide');
      span.classList.add('taskDueDate')
      let dateValue = dueDate.value;
    
      button.classList.add('todoTitle');
      const taskName = todoTaskInput.value;
      
      if (element.title === mainTitle.innerText) {
        element[`task${this.count}`] = taskName;
       
       
        if(dateValue===''){
          dateValue = 'No Due Date';
        } 
        
        element[`date${this.count}`] = dateValue;
        p.innerText = element[`task${this.count}`];
        span.innerText = element[`date${this.count}`];
      //  div.appendChild(icon);
        div.appendChild(p);
        div2.appendChild(span);
        button.appendChild(div);
        button.appendChild(div2);
        taskList.appendChild(button);
        
       
        
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
