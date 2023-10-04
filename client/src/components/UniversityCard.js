import {Card} from "react-bootstrap";

function UniversityCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>University Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Location</Card.Subtitle>
                <Card.Text>
                    Description
                </Card.Text>
                <Card.Link href="#">View</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default UniversityCard;