import { ProxyState } from "../AppState.js"


// @ts-ignore
const quotesApi=axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

export class QuoteService{
    constructor(){
         
    }
    async getQuotes(quoteData){
        let res= await quotesApi.get("")
        ProxyState.quotes= res.data.content
        console.log("quote", ProxyState.quotes)
        
    }
}
export const quoteService= new QuoteService();