// import { storage } from "./event";
export const selectors = () => {
  return {
    addButton: document.querySelector(".addButton"),
    cancelButton: document.querySelectorAll(".cancelButton"),
    addProjectButton: document.querySelector(".addProjectButton"),
    addTaskButton: document.querySelector(".addTaskButton"),
    projectFormContainer: document.querySelector(".projectFormContainer"),
    todoFormContainer: document.querySelector(".todoFormContainer"),
    projectList: document.querySelector(".projectList"),
    projectForm: document.querySelector(".projectForm"),
    todoForm: document.querySelector(".todoForm"),
    projectNameInput: document.querySelector(".projectNameInput"),
    todoTaskInput: document.querySelector(".todoTaskInput"),
    taskList: document.querySelector(".tasks"),
    allTaskLists: document.querySelector(".todoTitle"),
    projectNameContainer: document.querySelector(".projectNameContainer"),
    mainTitle: document.querySelector(".mainTitle"),
    inbox: document.getElementById("inbox"),
    dueDate: document.getElementById("date"),
    checkIcon: document.getElementsByTagName("p"),
  };
};

export const activateProjectForm = () => {
  selectors().todoFormContainer.classList.remove("active");
  selectors().projectFormContainer.classList.add("active");
};
export const activateTaskForm = () => {
  selectors().projectFormContainer.classList.remove("active");
  selectors().todoFormContainer.classList.add("active");
};
export const renderSavedTasks = (element) => {
  const objectKeys = Object.keys(element);
  for (let j = 0; j < objectKeys.length; j++) {
    if (element[`task${j}`] != undefined) {
      
      const button = document.createElement("button");
      const span = document.createElement("span");
      const p = document.createElement("p");
      const leftSide = document.createElement("div");
      const rightSide = document.createElement("div");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("fa");
      deleteButton.classList.add("fa-trash");
      leftSide.classList.add("leftSide");
      rightSide.classList.add("rightSide");
      button.classList.add("todoTitle");
      span.classList.add("taskDueDate");
      p.innerText = element[`task${j}`];
      span.innerText = element[`date${j}`];
      leftSide.appendChild(p);
      rightSide.appendChild(span);
      rightSide.appendChild(deleteButton);
      button.appendChild(leftSide);
      button.appendChild(rightSide);
      selectors().taskList.appendChild(button);
    }
  }
};

export const renderProjectName = (storage)=>{
    const button = document.createElement("button");
    button.classList.add("projectNameContainer");
    const icon = document.createElement("i");
    const titleName = document.createElement("span");
    const projectName =  selectors().projectNameInput.value;

    titleName.innerText = projectName;
    console.log("un:" + projectName);
    button.appendChild(icon);
    button.appendChild(titleName);
    selectors().projectList.appendChild(button);
    storage.push({ title: projectName });
    selectors().projectFormContainer.classList.remove("active");
    selectors().projectNameInput.value = "";
    return {button};
}
