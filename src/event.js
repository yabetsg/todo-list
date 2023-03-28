import { selectors } from "./DOM";

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

 
export const projectFormEvent = (() => { 

    projectForm.addEventListener('submit', (e) => { 
        const button = document.createElement('button');
        const icon = document.createElement('i');
        const span = document.createElement('span');
       
        span.innerText = projectNameInput.value; 
        button.appendChild(icon);
        button.appendChild(span);
        projectList.appendChild(button); 
        
        projectFormContainer.classList.remove('active');
        projectNameInput.value = '';
    });
})();

export const taskFormEvent = (() => { 

    todoForm.addEventListener('submit', (e) => { 
       
        const div = document.createElement('button');
        div.innerText = todoTaskInput.value;
        taskList.appendChild(div); 
        todoFormContainer.classList.remove('active');
        todoTaskInput.value = '';
       
    });
})();