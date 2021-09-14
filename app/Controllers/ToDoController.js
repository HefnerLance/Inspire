import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { toDoService } from "../Services/ToDoService.js";

function _drawToDo(){
    
let template=''
ProxyState.toDo.forEach(t => template += t.Template)
document.getElementById('todo').innerHTML= template
}



export class ToDoController{
    constructor(){
        this.getToDo()
        ProxyState.on('toDo', _drawToDo)
        ProxyState.on('count', )
        
    }
    async getToDo(){
        try {
            toDoService.getToDos()
            
        } catch (error) {
            console.log("😁😁😁" ,error);
        }
    }
     async addToDo(){
       
    
       event.preventDefault();
       let form= event.target
       let formData= {
           // @ts-ignore
           description: form.name.value,
           
        } 
            toDoService.createToDo(formData)
    }
    async deleteToDo(id){
        try {
            toDoService.deleteToDo(id)
            this.getToDo()
            console.log(ProxyState.toDo);
            _drawToDo() 
          let newstate =ProxyState.toDo.filter(t=> t.id !== t)
          ProxyState.toDo=newstate
           
           
        } catch (error) {
            console.log("delete", error);
        }
    }
    async checkbox(id){
        try {
            toDoService.checkbox(id)
        } catch (error) {
            
        }
    }
}
