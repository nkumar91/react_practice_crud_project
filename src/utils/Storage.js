export const setStorage = (storageData)=>{
    localStorage.setItem("login-info",JSON.stringify(storageData))
}
export const getStorage = ()=>{
    if(localStorage.getItem("login-info"))
        return JSON.parse(localStorage.getItem("login-info"))
    return false
}

export const getToken = ()=>{
    if(localStorage.getItem("login-info"))
        return JSON.parse(localStorage.getItem("login-info")).token
}

export const clearStorage = ()=>{
    localStorage.removeItem("login-info")
}