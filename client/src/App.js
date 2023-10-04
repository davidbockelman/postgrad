import React from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import UniversitiesTab from "./components/UniversitiesTab";
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
      <Row style={{justifyContent: 'center'}}>
        <h3 style={{padding: '7%', paddingBottom: '1%', width: '50%', alignSelf: 'center', textAlign: 'center'}}>Universities</h3>
      </Row>
      <UniversitiesTab />
    </Container>
  );
}

export default App;
