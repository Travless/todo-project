export class Project {
    constructor (name){
        this.name = name
        this.id = Date().toString()
        this.toDos = []
    }
}

export class ToDo {
    constructor (name, dueDate, priority){
        this.name = name
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Date().toString()
        this.complete = false
    }
}