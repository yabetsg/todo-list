import { selectors } from "./DOM";
import { storage , inboxStorage} from "./event";



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
      const leftSide = document.createElement('div');
      const rightSide = document.createElement('div');
      const icon = document.createElement('i');
      const p = document.createElement('p');
      const deleteButton = document.createElement('button');
      date.type = 'date';
      date.classList.add('dateInput');
      leftSide.classList.add('leftSide');
      rightSide.classList.add('rightSide');
      
      deleteButton.classList.add('fa');
      deleteButton.classList.add('fa-trash');
      
      
      span.classList.add('taskDueDate');
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
        leftSide.appendChild(p);
        rightSide.appendChild(span);
        rightSide.appendChild(deleteButton);
        button.appendChild(leftSide);
        button.appendChild(rightSide);
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
