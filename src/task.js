export default class Task {
    constructor(title,name){
        this.title = title;
        this.name = name;
        this.list = [];
        this.list2 = [];
    }

    getTitle(){
        return this.title;
    }
    setTitle(newTitle){
        this.title = newTitle; 
    }
    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName; 
    }
    setNameList(newList){
        this.list.push(newList);
    }
    setTitleList(newList){
        this.list2.push(newList);
    }

    getDueDate(){
        return this.dueDate;
    }
    setDueDate(){
        this.dueDate = this.dueDate;
    }
}