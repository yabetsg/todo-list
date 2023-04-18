import { selectors } from "./DOM";
import Task from "./task";


const task = new Task();

// TODO: fix inbox due date issue

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
const cancelButton = selectors().cancelButton;
const inbox = selectors().inbox;
 const clearTask = selectors().checkIcon;
const todoTaskInput = selectors().todoTaskInput;
const allTaskLists = selectors().allTaskLists;
export const storage = [];
storage.push({title:"Inbox"});
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




export const inboxStorage = [];

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
                                const span = document.createElement('span');
                                const p = document.createElement('p');
                                button.classList.add('todoTitle'); 
                                span.classList.add('taskDueDate');
                                p.innerText = element[`task${j}`]; 
                                span.innerText = element[`date${j}`];
                                button.appendChild(p);
                                button.appendChild(span);
                                
                                taskList.appendChild(button); 
                                
                            }
                           
                        }    
                }
                
             }
        
        });
        }
    });
     
})();

export const taskFormEvent = (() => { 
    todoForm.addEventListener('submit', ()=>{
         task.createTask();
            console.log('storage::'+ JSON.stringify(storage));
            
    });

})();


cancelButton.forEach(element => {
    element.addEventListener('click', ()=>{
            projectFormContainer.classList.remove('active');
            todoFormContainer.classList.remove('active');
        })

}); 


// allTaskLists.addEventListener('click',(e)=>{
//     console.log(e);
// });


 inbox.addEventListener('click', (e) =>{
   
        task.removeTasks();
        mainTitle.innerText = 'inbox';
        const clickedProjectTitle = e.target.innerText;
        mainTitle.innerText = clickedProjectTitle; 
      
        for (let i = 0; i < storage.length; i++) {
            const element = storage[i];
            if( element != undefined){
                const objectKeys = Object.keys(element)
                for (let j = 0; j < objectKeys.length; j++) { 
                    if(element[`date${j}`]!=undefined){
                        const button = document.createElement('button'); 
                        const span = document.createElement('span');
                        const p = document.createElement('p');
                        button.classList.add('todoTitle'); 
                        span.classList.add('taskDueDate');
                        p.innerText = element[`task${j}`]; 
                        span.innerText = element[`date${j}`];
                        button.appendChild(p);
                        button.appendChild(span);
                        taskList.appendChild(button); 
                        
                    }
                   
                }    
        }
        
     }
    });

const event = new Event('click');
inbox.dispatchEvent(event);