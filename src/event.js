import { selectors ,activateProjectForm, activateTaskForm,renderSavedTasks,renderProjectName} from "./DOM";
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
const cancelButton = selectors().cancelButton;
const inbox = selectors().inbox;
const clearTask = selectors().checkIcon;
const todoTaskInput = selectors().todoTaskInput;
const allTaskLists = selectors().allTaskLists;
export const storage = [];
storage.push({ title: "Inbox" });
console.log(storage);
export const addProjectButtonEvent = (() => {
  projectButton.addEventListener("click", () => {
       activateProjectForm();
  });
})();

export const addTaskButtonEvent = (() => {
  addTaskButton.addEventListener("click", () => {
      activateTaskForm();
  });
})();

export const inboxStorage = [];

export const projectFormEvent = (() => {
  projectForm.addEventListener("submit", (e) => {
    task.count = 0;
    const renderedName = renderProjectName(storage).button;
    if (renderedName.classList.contains("projectNameContainer")) {
      renderedName.addEventListener("click", (e) => {
        task.removeTasks();
        const clickedProjectTitle = e.target.innerText;
        mainTitle.innerText = clickedProjectTitle;
        for (let i = 0; i < storage.length; i++) {
          const element = storage[i];
          if (element.title === mainTitle.innerText) {
              renderSavedTasks(element);
          }
        }
        deleteMethod();
      });
    }
  });
})();
const deleteMethod = ()=>{
    const deleteTask = document.querySelectorAll(".fa-trash");
    
    if (deleteTask[0]) {
        let parents;
        deleteTask.forEach((element)=>{
        parents = element;
         
      });
      const grandParent = parents.parentNode;
       let grandGrandParent;
      if (deleteTask) {
       
        deleteTask.forEach((element) => {
          element.addEventListener("click", (e) => {
            console.log(element);
            grandGrandParent = element.parentNode.parentNode;
            grandGrandParent.remove();
          
            for (let i = 0; i < storage.length; i++) {
              const element = storage[i];
              for (const key in element) {
                if (element[key] === grandGrandParent.firstChild.textContent ) {
      
                  console.log(`date${key.split('')[4]}`);
                  delete element[key];
                  delete element[`date${key.split('')[4]}`]
                }
                
              }
            }
            
          });       
        });
      }
    }
};
export const taskFormEvent = (() => {
  todoForm.addEventListener("submit", () => {
    task.createTask();
    deleteMethod();
  });
})();

cancelButton.forEach((element) => {
  element.addEventListener("click", () => {
    projectFormContainer.classList.remove("active");
    todoFormContainer.classList.remove("active");
  });
});

inbox.addEventListener("click", (e) => {
  task.removeTasks();
  mainTitle.innerText = "inbox";
  const clickedProjectTitle = e.target.innerText;
  mainTitle.innerText = clickedProjectTitle;
  for (let i = 0; i < storage.length; i++) {
    const element = storage[i];
    if (element != undefined) {
      renderSavedTasks(element);
    }
  }
});

const event = new Event("click");
inbox.dispatchEvent(event);
