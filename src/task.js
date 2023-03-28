export default class Task {
    constructor(title,dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }

    getTitle(){
        return this.title;
    }
    setTitle(){
        this.title = this.title; 
    }

    getDueDate(){
        return this.dueDate;
    }
    setDueDate(){
        this.dueDate = this.dueDate;
    }
}