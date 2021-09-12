import { ProxyState } from "../AppState.js"


// @ts-ignore
const quotesApi=axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

export class QuoteService{
    async getAuthor() {
        let res =await quotesApi.get("")
        ProxyState.author = res.data.author
        console.log("author", ProxyState.author);
        
    }
    constructor(){
         
    }
    async getQuotes(quoteData){
        let res= await quotesApi.get("")
        ProxyState.quotes= res.data.content
        ProxyState.author= res.data.author
        console.log("quote", res.data.author)
        
    }
}
export const quoteService= new QuoteService();