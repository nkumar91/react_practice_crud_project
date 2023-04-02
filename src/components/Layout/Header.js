import { Container, Row, Col } from "react-bootstrap";
import { IMAGE_PATH } from "../../constant/Url";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/Context";

export default function Header() {
    const {userInfo,logout} = useContext(UserContext)
    return (
        <>
            <Container fluid>
                <Row className="py-3">
                    <Col md={3}>
                        <img src={`${IMAGE_PATH}favicon.ico`} width={30} height={30} alt="logo"></img>
                    </Col>
                    <Col md={9}>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link to="" className="btn btn-sm btn-dark nav-link">Hi {userInfo?.name}</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn bt-sm btn-danger nav-link ms-3" onClick={()=>logout()}>Logout</button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </>
    )
}