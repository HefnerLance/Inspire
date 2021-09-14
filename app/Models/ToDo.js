export default class ToDo{
    constructor(data){
        this.id = data.id || ""
        this.completed = data.completed
        this.user = data.user
        this.description = data.description ||""
        

    }
    get Template(){
        return /*html*/`
        <div class="card">
        <div> <input type="checkbox" name="checkbox" id="${this.id}" onclick="app.toDoController.checkbox('${this.id}')"
        ${this.completed ? "checked" : ""} >${this.description} <p onclick="app.toDoController.deleteToDo('${this.id}')">Delete</p></div>
        </div>
        `
    }
    }