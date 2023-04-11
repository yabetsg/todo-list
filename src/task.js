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
       inboxStorage.push({});
      const element = storage[i];
      const inboxElement = inboxStorage[i];
      const button = document.createElement('button');
      const date = document.createElement('input');
      const span = document.createElement('span');
      date.type = 'date';
      date.classList.add('dateInput')
      let dateValue = dueDate.value;
    
      button.classList.add('todoTitle');
      const taskName = todoTaskInput.value;
      
      if (element.title === mainTitle.innerText) {
        element[`task${this.count}`] = taskName;
        inboxElement[`task${this.count}`] = taskName;
       
        if(dateValue===''){
          dateValue = 'No Due Date';
        } 
        inboxElement[`date${this.count}`] = dateValue;
        element[`date${this.count}`] = dateValue;
        button.innerText = element[`task${this.count}`];
        span.innerText = element[`date${this.count}`];
        
        inboxStorage.push({[`task${this.count}`]:element[`task${this.count}`],[`date${this.count}`]:element[`date${this.count}`]});
        // inboxStorage[i]push({tasks:element[`task${this.count}`],date:element[`date${this.count}`]}); 
        // inboxElement[`task${this.count}`];
        button.appendChild(span);
        taskList.appendChild(button);
        // console.log(element);
        console.log(inboxStorage);
       
        
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
