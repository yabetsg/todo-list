import {
  selectors,
  activateProjectForm,
  activateTaskForm,
  renderSavedTasks,
  renderProjectName,
  cancelForm,
  activateForm
} from "./DOM";
import Task from "./task";

const task = new Task();


const projectButton = selectors().addProjectButton;
const projectFormContainer = selectors().projectFormContainer;
const addTaskButton = selectors().addTaskButton;
const todoFormContainer = selectors().todoFormContainer;
const todoForm = selectors().todoForm;
const projectForm = selectors().projectForm;
const mainTitle = selectors().mainTitle;
const cancelButton = selectors().cancelButton;
const inbox = selectors().inbox;

export const storage = [];
export const localStore = [];

export const local = localStorage;
localStore.push(local);
storage.push({ title: "Inbox" });
local.setItem('title','inbox');
localStore[0].clear();
console.log(localStore[0]);

export const addProjectButtonEvent = (() => {
  projectButton.addEventListener("click", () => {
    activateForm(true,false);
  });
})();

export const addTaskButtonEvent = (() => {
  addTaskButton.addEventListener("click", () => {
    activateForm(false,true);
  });
})();

export const inboxStorage = [];

export const projectFormEvent = (() => {
  projectForm.addEventListener("submit", (e) => {
    task.count = 0;
    const renderedProjectName = renderProjectName(storage).button;
    if (renderedProjectName.classList.contains("projectNameContainer")) {
      renderedProjectName.addEventListener("click", (e) => {
        task.removeTasks();
        const clickedProjectTitle = e.target.innerText;
        mainTitle.innerText = clickedProjectTitle;
        for (let i = 0; i < storage.length; i++) {
          const element = storage[i];
          if (element.title === mainTitle.innerText) {
            renderSavedTasks(element,true);
          }
        }
        deleteTask();
      });
    }
  });
})();
const deleteTask = () => {
  const deleteElement = document.querySelectorAll(".fa-trash");
  if (deleteElement[0]) {
    let parents;
    deleteElement.forEach((element) => {
      parents = element;
    });
    const grandParent = parents.parentNode;
    let taskContainer;
    if (deleteElement) {
      deleteElement.forEach((element) => {
        element.addEventListener("click", (e) => {
          console.log(element);
          taskContainer = element.parentNode.parentNode;
          taskContainer.remove();

          for (let i = 0; i < storage.length; i++) {
            const element = storage[i];
            for (const key in element) {
              if (element[key] === taskContainer.firstChild.textContent) {
               
                if(element['title']===mainTitle.textContent){
                  delete element[`task${key.split("")[4]}`];
                  delete element[`date${key.split("")[4]}`]; 
                }
              
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
    local.setItem('store',JSON.stringify(storage).replace('[','').replace(']',''));
    console.log(local);
    deleteTask();
  });
})();

cancelButton.forEach((element) => {
  element.addEventListener("click", () => {
    cancelForm();
  });
});

inbox.addEventListener("click", (e) => {
  task.removeTasks();
  mainTitle.innerText = "inbox";
  const clickedProjectTitle = e.target.innerText;
  mainTitle.innerText = clickedProjectTitle;
  console.log(clickedProjectTitle);
  for (let i = 0; i < storage.length; i++) {
    const element = storage[i];
    if (element != undefined) {
      renderSavedTasks(element,false);
    }
  }
  deleteTask();
});

const event = new Event("click");
inbox.dispatchEvent(event);
