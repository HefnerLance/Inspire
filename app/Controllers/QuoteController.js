import { ProxyState } from "../AppState.js";
import { quoteService, QuoteService } from "../Services/QuoteService.js";

function _drawQuotes(quoteData){
    let template = ''
    if(ProxyState.quotes){
        template=ProxyState.quotes.Template
    }
    document.getElementById('quotes').innerHTML= template
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