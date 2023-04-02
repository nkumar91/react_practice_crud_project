import { API_BASE_URL } from "../constant/Url"
import { Route } from "../routes/Route"

export const loginApi = async ()=>{

}

export const signupApi = async (formData)=>{
     const res =    await fetch(`${API_BASE_URL}${Route.signup}`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(formData)

     })
     return await res.json()
}