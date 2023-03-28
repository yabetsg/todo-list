export default class Task {
    constructor(title){
        this.title = title;

    }

    getTitle(){
        return this.title;
    }
    setTitle(newTitle){
        this.title = newTitle; 
    }

    getDueDate(){
        return this.dueDate;
    }
    setDueDate(){
        this.dueDate = this.dueDate;
    }
}