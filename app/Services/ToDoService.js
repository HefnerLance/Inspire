import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";


// @ts-ignore
const toDoApi =axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Lance/todos'
})
class ToDoService{
    async checkbox(id) {
        let foundtodo= ProxyState.toDo.find(t => t.id ==id)
        debugger
       if (foundtodo.completed == false) {
           foundtodo.completed= true   
        }else(foundtodo.completed= false)
        let res = await toDoApi.put(id ,foundtodo )
        console.log(res);
    }
    async deleteToDo(id) {
       const found= ProxyState.toDo.find(t => t.id == t.id)
       console.log(found);
        let res = await toDoApi.delete(''+ id)
        console.log("the response", res);
        this.getToDos() 
        // this.postToDo()
    }

    async getToDos(){
        
        let res= await toDoApi.get("")
        console.log("todo", res)
        ProxyState.toDo = res.data.map(t => new ToDo(t))
        console.log( "later",ProxyState.toDo);

    }
    async postToDo(){
        let res = await toDoApi.post("", new ToDo)
        

    }
    async createToDo(formData){
        
       let res= await toDoApi.post("",formData)
        console.log("proxytask", ProxyState.toDo)
        this.getToDos()
    }
}
export const toDoService = new ToDoService();