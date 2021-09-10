import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"

 function _drawimage(){

    document.getElementById('bigimage').style.backgroundImage = `url('${ProxyState.image.url}')`
}
export class ImageController{
    constructor(){
        ProxyState.on('image', _drawimage)
        this.getNewImage()
    }
    async getNewImage(){
        try {
            imageService.getImage()
            
        } catch (error) {
            console.log("🤦‍♂️" , error)
        }
    }
    

}