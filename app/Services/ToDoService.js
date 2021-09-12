import { ProxyState } from "../AppState.js";

// @ts-ignore
const toDoApi =axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Lance/todos'
})
class ToDoService{
    constructor(){

    }

    async getToDos(){
        let res= await toDoApi.get()
        console.log("todo", res)

    }
}