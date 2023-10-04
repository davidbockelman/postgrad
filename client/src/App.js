import React from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import {Row, Col} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <NavigationBar />
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <h1  style={{padding: '10%', width: '50%', alignSelf: 'center', textAlign: 'center'}}>Postgrad: This is placeholder text</h1>
      </Row>
      <Row>
        <SearchBar />
      </Row>
    </Container>
  );
}

export default App;
