import { Container, Row,Col } from "react-bootstrap";
import Header from "../Layout/Header";

export default function Dashboard(){
    return(
        <>
        <Header />
        <Container>
            <Row>
                <Col>
                    <h1>My Dashboard</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}