export const selectors = () => {
  return {
    addButton: document.querySelector(".addButton"),
    cancelButton: document.querySelectorAll(".cancelButton"),
    addProjectButton: document.querySelector(".addProjectButton"),
    addTaskButton: document.querySelector(".addTaskButton"),
    projectFormContainer: document.querySelector('.projectFormContainer'),
    todoFormContainer: document.querySelector('.todoFormContainer'),
    projectList: document.querySelector('.projectList'),
    projectForm: document.querySelector('.projectForm'),
    todoForm: document.querySelector('.todoForm'),
    projectNameInput: document.querySelector('.projectNameInput'),
    todoTaskInput: document.querySelector('.todoTaskInput'),
    taskList: document.querySelector('.tasks'),
    allTaskLists: document.querySelector('.todoTitle'),
    projectNameContainer: document.querySelector('.projectNameContainer'),
    mainTitle: document.querySelector('.mainTitle'),
    inbox: document.getElementById('inbox'),
    dueDate: document.getElementById('date')
  };
};
