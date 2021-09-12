import { ProxyState } from "../AppState.js";
import { quoteService, QuoteService } from "../Services/QuoteService.js";

function _drawQuotes(quoteData){
    let template = ''
    if(ProxyState.quotes){
        template=ProxyState.quotes.Template
    }console.log(quoteData);
    document.getElementById('quotes').innerHTML= quoteData
}
    export class QuoteController{
        constructor(){
            ProxyState.on('quotes', _drawQuotes)
            this.getQuotes()

        }
        getQuotes(){
            try {
                quoteService.getQuotes()
            } catch (error) {
                console.log("😁" , error);
            }
        }
    }