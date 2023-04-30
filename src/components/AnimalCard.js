import React, {Component, useState} from "react";
import { NavLink } from "react-router-dom";
import {Alert, Card, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

function AnimalCard({image, name, setShow}) {
    const [isDisabled, setIsDisabled] = useState(false)
    let fee = getRandomMultipleOfFifty(2, 6) * 50;
    
    function getRandomMultipleOfFifty(min, max) {
        return( min + Math.floor( Math.random() * ( max-min+1 ) ) );
    }

    function handleClick() {
        setShow(true)
        setIsDisabled(true)
        fetch('http://localhost:4000/adoptedAnimals', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            accept: 'application/json'
                        },
                        body: JSON.stringify({
                            name: name,
                            image: image
                        })
                    })
            
    }
    
    return(
        <div>
            <Card>
                <Card.Img style={{ height: '250px' }} src={image} className="card-img-top" alt="..."/>
                <Card.Body>
                <Card.Title id="${name}" className="card-title" >{name}{isDisabled ? " (Adopted)": ""}</Card.Title>
                <Card.Text id="fee" className="card-text">Fee: ${fee}</Card.Text>
                <Button variant="primary" onClick={handleClick} disabled={isDisabled}>Adopt Me!</Button>
                <Button href="/contact" variant="primary" disabled={isDisabled}>Enquire</Button>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default AnimalCard;
