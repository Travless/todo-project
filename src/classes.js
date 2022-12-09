export class Project {
    constructor (name){
        this.name = name
        this.id = Date().toString()
        this.toDos = []
    }
}

export class ToDo {
    constructor (name){
        this.name = name
        this.id = Date().toString()
        this.complete = false
    }
}