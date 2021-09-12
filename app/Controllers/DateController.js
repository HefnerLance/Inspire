import { ProxyState } from "../AppState.js";

function _drawtime() {
    let template= ''
    document.getElementById('time').innerText= template
}
export class DateController{
constructor(){
    ProxyState.on('date', _drawtime)
    setTimeout(this.time, 1000)
    this.time();
    
    
}

time(){
    
        let Time = new Date();
        let h = Time.getHours();
        let m = Time.getMinutes();
        let s = Time.getSeconds();
     
        let timeString= (h + m+ s)
            console.log(timeString);  
        console.log(Time.toLocaleString());
       ProxyState.date= Time.toLocaleString()
    }
}

