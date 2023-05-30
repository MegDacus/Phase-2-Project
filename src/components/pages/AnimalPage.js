import React, {useState} from 'react';
import AnimalCard from '../AnimalCard';
import {CardGroup, Container, Alert, Button} from 'react-bootstrap'

function AnimalPage({animalArray, animalType, saveLocalStorage, retrieveLocalStorage}) {
    const [show, setShow] = useState(false)
    const alertHeader = <Alert  variant="success">
    <Alert.Heading>Congratulations!</Alert.Heading>
    <p>You have successfully adopted your new best friend!</p>
    <hr />
    <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
        Thank you!
        </Button>
    </div>
</Alert>
    
    return(
        <Container className='text-center'>
            {show && alertHeader}
            <h1 className="heading">Animal Adoption</h1>
            <h4 className="heading">Available {animalType === "dogs" ? "Dogs & Puppies" : "Cats & Kittens"}</h4>
            <p className="pHeading heading">Click the "Adopt Me!" button to submit your inquiry. We will be in contact within 5 business days.</p>
            <CardGroup className="row row-cols-1 row-cols-md-3 g-4">
                {animalArray.map((animal, index) => <AnimalCard key={index} animal={animal} setShow={setShow} saveLocalStorage={saveLocalStorage} retrieveLocalStorage={retrieveLocalStorage} animalType={animalType}/>
                )}
            </CardGroup>
        </Container>
    )
}

export default AnimalPage;
