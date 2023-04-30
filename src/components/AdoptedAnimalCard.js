import React, {Component, useState} from "react";
import { NavLink } from "react-router-dom";
import {Alert, Card, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

function AdoptedAnimalCard({image, name}) {
    return(
        <div>
            <Card>
                <Card.Img style={{ height: '250px' }} src={image} className="card-img-top" alt="..."/>
                <Card.Body>
                <Card.Title id="${name}" className="card-title" >{name}</Card.Title>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default AdoptedAnimalCard;
