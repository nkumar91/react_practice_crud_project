import { Col, Container, Row } from "react-bootstrap";

export default function NotFound404(){
    return(
        <>
        <Container>
            <Row>
                <Col className="my-5">
                    <h1 className="text-center">Page Not Found</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}