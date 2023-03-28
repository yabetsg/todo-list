export default class TaskList {
    constructor(list){
        this.list = [];
    }

    setList(newList){
        this.list.push(newList);
    }
}