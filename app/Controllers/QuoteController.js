import { ProxyState } from "../AppState.js";
import { quoteService} from "../Services/QuoteService.js";

function _drawQuotes(quoteData){
    let template = ''
    if(ProxyState.quotes){
        template=ProxyState.quotes.Template
    }console.log("what is quote data",quoteData);
    document.getElementById('quotes').innerHTML= quoteData
    
    
}
    export class QuoteController{
        constructor(){
            ProxyState.on('quotes', _drawQuotes)
            ProxyState.on('author', _drawAuthor)
            this.getAuthor()
            this.getQuotes()

        }
        getQuotes(){
            try {
                quoteService.getQuotes()
            } catch (error) {
                console.log("😁" , error);
            }
        }
        getAuthor(){
            try {
                quoteService.getAuthor()
            } catch (error) {
                console.log("😁" , error);
            }
        }
    }

function _drawAuthor() {
let template = ''
    if(ProxyState.author){
        console.log(ProxyState.author)
        

    }document.getElementById('author').innerText= ProxyState.author
}
