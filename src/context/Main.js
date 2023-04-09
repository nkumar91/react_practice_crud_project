import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import { clearStorage, getStorage } from "../utils/Storage";
import { useNavigate } from "react-router-dom";

export default function Main({children}){
    const [userInfo,setUserInfo] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        if(getStorage()){
            setUserInfo(getStorage())
          //  navigate("/dashboard")
        }
    },[])
    function logout(){
        clearStorage()
        navigate("/")
    }

    function accountLogin(loginData){
        setUserInfo(loginData)
    }
    const initData = {
        userInfo,
        logout,
        accountLogin,


    }
    return(
      <UserContext.Provider value={initData}>
        {children}
      </UserContext.Provider>
    )
}