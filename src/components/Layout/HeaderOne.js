import { Container, Row, Col } from "react-bootstrap";
import { IMAGE_PATH } from "../../constant/Url";
import { Link } from "react-router-dom";

export default function HeaderOne() {
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
                                <Link to="/" className="btn btn-sm btn-dark nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="btn bt-sm btn-danger nav-link ms-3">Signup</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </>
    )
}