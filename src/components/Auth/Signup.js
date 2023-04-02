import { Col, Container, Row } from "react-bootstrap";
import HeaderOne from "../Layout/HeaderOne";
import { signupApi } from "../../api/Api";
import { useContext, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setStorage } from "../../utils/Storage";
import { UserContext } from "../../context/Context";

export default function Signup() {
    const {accountLogin} = useContext(UserContext)
    const [signupForm,setSignupForm] = useState({})
    const navigate = useNavigate()
    const handleChange = async (event)=>{
            setSignupForm({...signupForm,[event.target.name]:event.target.value})
    }
    const handleSubmit = async (event)=>{
     event.preventDefault()
      const res =  await  signupApi(signupForm)
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
    return (
        <>
            <HeaderOne />
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <p><input type="text" name="name" onChange={handleChange} placeholder="Enter Name"></input></p>
                            <p><input type="text" name="email" onChange={handleChange} placeholder="Enter Email"></input></p>
                            <p><input type="text" name="phone" onChange={handleChange} placeholder="Enter Phone"></input></p>
                            <p><input type="password" name="password" onChange={handleChange} placeholder="Enter Password"></input></p>
                            <p><input type="submit" value="Register"></input></p>
                        </form>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </>
    )
}