import { ProxyState } from "../AppState.js";

// @ts-ignore
const imageApi=axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

class ImageService{
    constructor(){
    console.log("image service");

    }
    async getImage(){
        let res = await imageApi.get('',)
        console.log("img res", res)
        ProxyState.image= res.data
        console.log("proxy image" ,ProxyState.image)
    }

}

export const imageService = new ImageService()