import { ProxyState } from "../AppState.js";

function _drawtime() {
    
    document.getElementById('time').innerText = ProxyState.date
}
export class DateController{
constructor(){
    ProxyState.on('date', _drawtime)
    // this.time();
    setInterval(this.time, 1000);
    
    
}

time(){
    
    let Time = new Date();
    let h = Time.getHours();
    let m = Time.getMinutes();
    let s = Time.getSeconds();
    
   
   
    ProxyState.date= Time.toLocaleString();
}
}

