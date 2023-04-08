import { Container,Row,Col } from "react-bootstrap";
import HeaderOne from "../Layout/HeaderOne";
import { toast,ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { setStorage } from "../../utils/Storage";
import { UserContext } from "../../context/Context";
import { loginApi } from "../../api/Api";


export default function Login(){
    const {accountLogin} = useContext(UserContext)
    const [loginForm,setLoginForm] = useState({})
    const navigate = useNavigate()
    const handleChange = async (event)=>{
        setLoginForm({...loginForm,[event.target.name]:event.target.value})
    }


    const handleSubmit = async (event)=>{
     event.preventDefault()
      const res =  await  loginApi(loginForm)
      if(res.status === "success"){
            setStorage(res)
            accountLogin(res);
            toast.success(res.message)
            setTimeout(()=>{
                navigate("/dashboard")
            },2000)
      }
      else{
        toast.error(res.message)
      }
    }
    return(
        <>
        <HeaderOne />
        <Container>
            <Row>
                <Col>
                <form onSubmit={handleSubmit}>
                    <p><input type="text" name="email" placeholder="Enter Email" onChange={handleChange}></input></p>
                    <p><input type="text" name="password" placeholder="Enter Password" onChange={handleChange}></input></p>
                    <p><input type="submit" name="Login"></input></p>
                </form>
                </Col>
            </Row>
        </Container>
        <ToastContainer />
        </>
    )
}