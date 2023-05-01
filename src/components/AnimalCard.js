import React, {useState} from "react";
import {Card, Col, Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

function AnimalCard({animal, setShow, saveLocalStorage, retrieveLocalStorage, animalType}) {
    const [isDisabled, setIsDisabled] = useState(false)
    
    function handleClick() {
        setShow(true)
        setIsDisabled(true)
        var animals = retrieveLocalStorage(animalType)
        animals = animals.filter(currentAnimal => currentAnimal.name != animal.name)
        saveLocalStorage(animalType, animals)
        var date = new Date();
        var current_date = date.getDate() +"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
        fetch('http://localhost:4000/adoptedAnimals', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            accept: 'application/json'
                        },
                        body: JSON.stringify({
                            name: animal.name,
                            image: animal.image,
                            time: current_date
                        })
                    })
    }
    return(
        <div>
            <Card>
                <Card.Img style={{ height: '250px' }} src={animal.image} className="card-img-top" alt="..."/>
                <Card.Body>
                <Card.Title id="${name}" className="card-title" >{animal.name}{isDisabled ? " (Adopted)": ""}</Card.Title>
                <Card.Text id="fee" className="card-text">{isDisabled ? <br/> : `Fee: $${animal.fee}`}</Card.Text>
                <Container>
                <Row>
                    <Col>
                <Button variant="primary" onClick={handleClick} disabled={isDisabled}>Adopt Me!</Button>
                </Col>
                <Col>
                <Button href="/contact" variant="primary" disabled={isDisabled}>Enquire</Button>
                </Col>
                </Row>
                </Container>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default AnimalCard;
