import React, {useEffect} from 'react';
import HomePageCard from "./homePageCard";
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import {Row, Col} from 'react-bootstrap'


function Home() {

    return(
        <>
            <Container className="adoptionDiv, text-center" id="homeDiv">
                    <h1 className="heading">Animal Adoption</h1>
                    <h4 className="heading">Interested in Adopting?</h4>
                    <p className="pHeading heading">Choose below for a list of animals currently up for adoption!</p>
            </Container>
            <CardGroup>
                <HomePageCard animalName="Dogs & Puppies"/>
                <HomePageCard animalName="Cats & Kittens"/>
            </CardGroup>
        </>
    )
}

export default Home;
