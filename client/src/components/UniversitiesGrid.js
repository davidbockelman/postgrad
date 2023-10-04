import { Container, Row, Col } from "react-bootstrap";
import UniversityCard from "./UniversityCard";

function UniversitiesGrid() {
    return (
        <Container>
            <Row>
                <Col>
                    <UniversityCard />
                </Col>
            </Row>
        </Container>
    );
}

export default UniversitiesGrid;