import React from 'react';
import HomePageCard from "../HomePageCard";
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap'


function Home() {

    return(
        <>
            <Container className="adoptionDiv, text-center" id="homeDiv">
                    <h1 className="heading">Animal Adoption</h1>
                    <h4 className="heading">Interested in Adopting?</h4>
                    <p className="pHeading heading">Choose below for a list of animals currently up for adoption!</p>
            </Container>
            <Container>
                <Row>
                    <Col>
                <HomePageCard animalName="Dogs & Puppies"/>
                </Col>
                <Col>
                <HomePageCard animalName="Cats & Kittens"/>
                </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
