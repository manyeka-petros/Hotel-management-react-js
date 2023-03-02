import axios from "axios"

const baseUrl = "http://localhost:8080/"

export const singleFileUplo = async(data)=>{
    try{
        await axios.post(baseUrl+'upload',data)

    }catch(error){
        throw error

    }
}