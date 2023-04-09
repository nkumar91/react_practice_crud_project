import { API_BASE_URL } from "../constant/Url"
import { Route } from "../routes/Route"
import { getToken } from "../utils/Storage"



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

export const loginApi = async (formData)=>{
    const res =    await fetch(`${API_BASE_URL}${Route.login}`,{
       method:"POST",
       headers:{
           "Content-type":"application/json"
       },
       body:JSON.stringify(formData)

    })
    return await res.json()
}


export const getEmployeeListApi = async ()=>{
  
    const res = await fetch(`${API_BASE_URL}${Route.employeeList}`,
    {
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${getToken()}`
        }
    })

    return await res.json()
}


export const uploadImage = async (formData)=>{
    const res =    await fetch(`${API_BASE_URL}${Route.uploadFile}`,{
       method:"POST",
       headers:{
           "Authorization":`Bearer ${getToken()}`
       },
       body:formData

    })
    return await res.json()
}