import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import dogImg from '../images/adopt-dog.jpeg';
import catImg from '../images/adopt-cat2.jpeg';

function HomePageCard({animalName}) {
    const [animal, setAnimal] = useState('')
    const [animalDescription, setAnimalDescription] = useState('')
    const [animalImg, setAnimalImg] = useState('')

    useEffect(() => {
        if (animalName === 'Dogs & Puppies') {
            setAnimal('/dogs')
            setAnimalDescription('Our beautiful canines have all been de-sexed, vaccinated, microchipped, and wormed. A thorough health check has also been conducted and paperwork can be requested if desired.')
            setAnimalImg(dogImg)
        }
        if (animalName === 'Cats & Kittens') {
            setAnimal('/cats')
            setAnimalDescription('Our precious felines have all been health-checked, de-sexed, microchipped, and vaccinated. They have also been behaviourally assessed to be sure they are ready for their new homes!')
            setAnimalImg(catImg)
        }
    }, [])
    

  return (
    <Card style={{ width: '50%', margin: '1%' }}>
      <Card.Img style={{ height: '250px' }} variant="top" src={animalImg} />
      <Card.Body>
        <Card.Title className='text-center'>Available {animalName}</Card.Title>
        <Card.Text className='text-center'>
            {animalDescription}
        </Card.Text>
        <Button href={animal}>View Available Animals</Button>
      </Card.Body>
    </Card>
  );
}

export default HomePageCard;
