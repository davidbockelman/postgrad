import { Container, Row, Col, Button, InputGroup } from "react-bootstrap";

function SearchBar() {
    return (
        <Container style={{width: '50%'}}>
            <InputGroup className="mb-3">
                <input type="text" className="form-control" placeholder="Search Colleges" aria-label="Search" aria-describedby="basic-addon1" />
                <Button variant="primary">Search</Button>
            </InputGroup>
        </Container>
    )
}

export default SearchBar;