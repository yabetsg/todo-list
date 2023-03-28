import { selectors } from "./DOM";
import Project from "./project";
import TaskList from "./tasklist";
import Task from "./task";


//Idea: combine project class with task class so project name will be associated with its tasks
//      or make a new class that combines both??? idk


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
 const task = new Task();
const taskLists = new TaskList();
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
export const projectFormEvent = (() => { 

    projectForm.addEventListener('submit', (e) => { 
       
      
      
        const button = document.createElement('button');
        button.classList.add('projectNameContainer')
        const icon = document.createElement('i');
        const span = document.createElement('span');
        project.setTitle(projectNameInput.value);
        project.setList(project.getTitle());
        span.innerText = project.getTitle(); 
        button.appendChild(icon);
        button.appendChild(span);
        projectList.appendChild(button); 
        
        projectFormContainer.classList.remove('active');
        projectNameInput.value = '';
        if(button.classList.contains('projectNameContainer')){
            button.addEventListener('click', () =>{
            const list = project.list;
            const indexOfProjectName = list.indexOf(span.innerText);   
            mainTitle.innerText = list[indexOfProjectName];
            while (taskList.childNodes.length > 0) {
                taskList.removeChild(taskList.firstChild);
              }
            
            
        });
        }else{
            console.log("not clicked");
        }
    });
     


})();
const createTask = (event) =>{
    event.preventDefault();
    const button = document.createElement('button');
        button.classList.add('todoTitle');
        console.log(todoTaskInput.value);
        task.setTitle(todoTaskInput.value);
        taskLists.setList(task.getTitle());
        console.log(taskLists);
        button.innerText = taskLists.list[count];
        count++
        taskList.appendChild(button); 
        todoFormContainer.classList.remove('active');
        todoTaskInput.value = '';
};
export const taskFormEvent = (() => { 
    todoForm.addEventListener('submit', createTask);
    // todoForm.addEventListener('submit', (e) => { 
       
    //     const button = document.createElement('button');
    //     button.classList.add('todoTitle');
    //     console.log(todoTaskInput.value);
    //     task.setTitle(todoTaskInput.value);
    //     taskLists.setList(task.getTitle());
    //     console.log(taskLists);
    //     button.innerText = taskLists.list[count];
    //     count++
    //     taskList.appendChild(button); 
    //     todoFormContainer.classList.remove('active');
    //     todoTaskInput.value = '';
       
    // });
})();

// export const projectNameContainerEvent = (() =>{
//     console.log(projectNameContainer);
//     if(projectNameContainer != null){
//         projectNameContainer.addEventListener('click', () =>{
//         console.log('clicked');
//     });
//     }else{
//         console.log("not clicked");
//     }
// })();