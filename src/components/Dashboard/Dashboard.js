import { Container, Row,Col } from "react-bootstrap";
import Header from "../Layout/Header";
import { useEffect, useLayoutEffect, useState } from "react";
import { getEmployeeListApi } from "../../api/Api";
import UseRef from "./UseRef/Form";

export default function Dashboard(){
    const [employee,setEmployee] = useState([])
    const [loader,setLoader] = useState(true)

    const getEmp = ()=>{
        // getEmployeeListApi().then(value=>{
        //     setEmployee(value);
        //     setLoader(false)

        // })

        Promise.resolve(getEmployeeListApi()).then(value=>{
            setEmployee(value);
            setLoader(false)
        })
    }
    useLayoutEffect(()=>{
        getEmp()
    },[])
    return(
        <>
        <Header />
        <Container>
            <Row>
                <Col>
                    <h1>My Dashboard</h1>
                    {loader?<p>Loading....</p>:null}
                    <table>
                        <thead>
                            <tr>
                                <th>Emp Name</th>
                                <th>Emp Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee.map((ele,index)=>
                                    <tr key={index}>
                                        <td>{ele.empName}</td>
                                        <td>{ele.empEmail}</td>
                                    </tr> 
                                    )
                            }
                          
                        </tbody>
                    </table>
                </Col>
            </Row>
            <UseRef />
        </Container>
        </>
    )
}