export default class Project {
    constructor(title){
        this.title = title; 
         this.list = [];
    }

    getTitle(){
        return this.title;
    }
    setTitle(newTitle){
        this.title = newTitle; 
    }
    setList(newList){
        this.list.push(newList);
    }
}