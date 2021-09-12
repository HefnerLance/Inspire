import { ProxyState } from "../AppState.js";

function _drawtime() {
    
    document.getElementById('time').innerText = ProxyState.date
}
export class DateController{
constructor(){
    ProxyState.on('date', _drawtime)
    this.time();
    
    
}

time(){
    
    setInterval(this.time, 1000);
        let Time = new Date();
        let h = Time.getHours();
        let m = Time.getMinutes();
        let s = Time.getSeconds();
     
        let timeString= (h + m+ s)
            console.log(timeString);  
        console.log(Time.toLocaleString());
       ProxyState.date= Time.toLocaleString();
    }
}

