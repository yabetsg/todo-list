import { selectors } from "./DOM";
import Project from "./project";
import TaskList from "./tasklist";
import Task from "./task";






const projectButton = selectors().addProjectButton;
const projectFormContainer = selectors().projectFormContainer;
const addTaskButton = selectors().addTaskButton;
const todoFormContainer = selectors().todoFormContainer;
const todoForm = selectors().todoForm;
const projectForm = selectors().projectForm;
const projectList = selectors().projectList;
const projectNameInput = selectors().projectNameInput;
const todoTaskInput = selectors().todoTaskInput;
const taskList = selectors().taskList;
const projectNameContainer = selectors().projectNameContainer;
const mainTitle = selectors().mainTitle;
 
const allTaskLists = selectors().allTaskLists;
let count = 0;
export const addProjectButtonEvent = (() =>{

    projectButton.addEventListener('click', ()=>{
        todoFormContainer.classList.remove('active');
        projectFormContainer.classList.add('active');
    });   
})();

export const addTaskButtonEvent = (() =>{

    addTaskButton.addEventListener('click', ()=>{
        projectFormContainer.classList.remove('active');
        todoFormContainer.classList.add('active');
    });
})();

  const project = new Project();
  const storage = [];

export const projectFormEvent = (() => { 
    const task = new Task();
    projectForm.addEventListener('submit', (e) => { 
       
        count = 0;
        
        const button = document.createElement('button');
        button.classList.add('projectNameContainer')
        const icon = document.createElement('i');
        const titleName = document.createElement('span');
        
        task.setTitle(projectNameInput.value);
        titleName.innerText = task.getTitle(); 
        task.setNameList({tite: task.getTitle()});
      
        button.appendChild(icon);
        button.appendChild(titleName);
        projectList.appendChild(button); 
        storage.push({title: task.getTitle()});
         console.log(storage);
         
        projectFormContainer.classList.remove('active');
        projectNameInput.value = '';
        if(button.classList.contains('projectNameContainer')){
            button.addEventListener('click', (e) =>{
                while (taskList.firstChild) {
                    taskList.removeChild(taskList.firstChild);
                }
                const clickedTitle = e.target.innerText;
                console.log(e.target.innerText);
                mainTitle.innerText = clickedTitle;

                for (let i = 0; i < storage.length; i++) {
                    const element = storage[i];
                    if( element.title === mainTitle.innerText){
                        const objectKeys = Object.keys(element)
                        console.log(objectKeys.length);
                        for (let j = 0; j < objectKeys.length; j++) { 
                            if(element[`task${j}`]!=undefined){
                                const button = document.createElement('button'); 
                                button.classList.add('todoTitle'); 
                                button.innerText = element[`task${j}`]; 
                                taskList.appendChild(button); 
                            }
                           
                        } 
                       
                        console.log(element);
                        
                }
                
                }
                
               taskFormEvent();
        
        });
        }else{
            
        }
    });
     


})();
const createTask = () =>{
         const task = new Task();
        for (let i = 0; i < storage.length; i++) {
            const element = storage[i];
            const button = document.createElement('button');
            button.classList.add('todoTitle'); 
            task.setName(todoTaskInput.value);
            if( element.title === mainTitle.innerText){
                element[`task${count}`] = task.getName(); 
                button.innerText =  element[`task${count}`]; 
                taskList.appendChild(button); 
                console.log(element);
                count++;
        }
        
        }
        todoFormContainer.classList.remove('active');
        todoTaskInput.value = ''; 
          
};
export const taskFormEvent = () => { 
    todoForm.addEventListener('submit', createTask);
    
};
taskFormEvent();
