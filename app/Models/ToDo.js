export default class ToDo{
    constructor(data){
        this.id = data.id || ""
        this.completed = data.completed
        this.user = data.user
        this.description = data.description ||""
        

    }
    get Template(){
        return /*html*/`
        <div class="card m-auto">
        <div class="pb-2"> 
        <label for="checkbox">Completed:</label>
        <input type="checkbox" name="checkbox" id="${this.id}" onclick="app.toDoController.checkbox('${this.id}')"
        ${this.completed ? "checked" : ""} >
        <p>${this.description} </p>
        <p onclick="app.toDoController.deleteToDo('${this.id}')">Delete</p></div>
        </div>
        `
    }
    }