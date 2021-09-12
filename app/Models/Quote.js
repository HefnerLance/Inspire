import { ProxyState } from "../AppState.js"

export default class Quote{
    constructor(quoteData){
        this.content= quoteData.content
        this.author = quoteData.author
        
    }
    
    get Template(){
        return /*html*/`
        
        <div class="card">
        <div class="card-header">
            <div class="card-body">
            <p>${ProxyState.quotes}</p>
            <p class="visually-hidden">${ProxyState.author}</p>
            </div>
        </div>
        </div>
        `
    }
}