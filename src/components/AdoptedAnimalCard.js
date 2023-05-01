import React from "react";
import { Card} from 'react-bootstrap';

function AdoptedAnimalCard({animal}) {
    return(
        <div>
            <Card>
                <Card.Img style={{ height: '250px' }} src={animal.image} className="card-img-top" alt="..."/>
                <Card.Body>
                <Card.Title id="${name}" className="card-title" >{animal.name}</Card.Title>
                <Card.Text style={{opacity: "0.5"}}>Adopted on: {animal.time}</Card.Text>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default AdoptedAnimalCard;
