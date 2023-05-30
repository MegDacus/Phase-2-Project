import AdoptedAnimalCard from '../AdoptedAnimalCard'
import {CardGroup, Container} from 'react-bootstrap'

function AdoptedAnimalsPage({animalArray}) {
    return(
        <Container className='adoptionDiv, text-center'>
            <h1 className="heading">Adopted Animals</h1>
            <CardGroup className="row row-cols-1 row-cols-md-3 g-4">
                {animalArray.map((animal, index) => <AdoptedAnimalCard key={index} animal={animal}/>
                )}
            </CardGroup>
        </Container>
    )
}

export default AdoptedAnimalsPage