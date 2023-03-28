export default class Project {
    constructor(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }
    setTitle(){
        this.title = this.title; 
    }
}