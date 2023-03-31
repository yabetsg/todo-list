import { selectors } from "./DOM";
import Task from "./task";


const task = new Task();




const projectButton = selectors().addProjectButton;
const projectFormContainer = selectors().projectFormContainer;
const addTaskButton = selectors().addTaskButton;
const todoFormContainer = selectors().todoFormContainer;
const todoForm = selectors().todoForm;
const projectForm = selectors().projectForm;
const projectList = selectors().projectList;
const projectNameInput = selectors().projectNameInput;
const taskList = selectors().taskList;
const mainTitle = selectors().mainTitle;
 
export const storage = [];
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
        task.count = 0;
        const button = document.createElement('button');
        button.classList.add('projectNameContainer')
        const icon = document.createElement('i');
        const titleName = document.createElement('span');
        const projectName = projectNameInput.value
        
        titleName.innerText = projectName; 
        button.appendChild(icon);
        button.appendChild(titleName);
        projectList.appendChild(button); 
        storage.push({title: projectName});
        projectFormContainer.classList.remove('active');
        projectNameInput.value = '';

        if(button.classList.contains('projectNameContainer')){
            button.addEventListener('click', (e) =>{
                task.removeTasks();
                const clickedProjectTitle = e.target.innerText;
                mainTitle.innerText = clickedProjectTitle;

                for (let i = 0; i < storage.length; i++) {
                    const element = storage[i];
                    if( element.title === mainTitle.innerText){
                        const objectKeys = Object.keys(element)
                        for (let j = 0; j < objectKeys.length; j++) { 
                            if(element[`task${j}`]!=undefined){
                                const button = document.createElement('button'); 
                                button.classList.add('todoTitle'); 
                                button.innerText = element[`task${j}`]; 
                                taskList.appendChild(button); 
                            }
                           
                        } 
                        
                }
                
                }
      
        
        });
        }else{
            
        }
    });
     


})();

export const taskFormEvent = (() => { 
    todoForm.addEventListener('submit', ()=>{
        task.createTask();
    });

})();
