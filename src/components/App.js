import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import ContactPage from "./ContactPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data/animalData.json'
import AnimalPage from './AnimalPage';
import AdoptedAnimalsPage from './AdoptedAnimalsPage'

function App() {
  const [dogImages, setDogImages] = useState([])
  const [cats, setCats] = useState([])
  useEffect(() => {
    getDogs();
    getCats();
  }, [])   
  
  function getDogs() {
    if (dogImages.length === 0){
    fetch('https://dog.ceo/api/breeds/image/random/6')
        .then (resp => resp.json())
        .then (dogImg => { 
            let randomDog = dogImg.message;
            let dogNames = getRandomName(data.dogNames)
            let newList = randomDog.map((dog, index) => {
              return {
                image: dog,
                name:  dogNames[index]
              }
            })
            setDogImages(newList)
    })}}
  
  function getRandomName(array) {
    let animalNames = [];
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * array.length)
        let name = array[randomNum];
        if (animalNames.includes(name)) {
            i--;
        } else {
            animalNames.push(name)
        }
    }
   return animalNames;
}

  function getCats() {
    setCats(getRandomName(data.catNames));
  }

  return(
    <>
    <NavBar/>
    <Switch>
      <Route path="/cats">
        <AnimalPage animalName={'Cats & Kittens'} animalArray={cats}/>
      </Route>
      <Route path="/dogs">
        <AnimalPage animalName={'Dogs & Puppies'} animalArray={dogImages}/>
      </Route>
      <Route path="/contact">
        <ContactPage/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/adopted-animals">
        <AdoptedAnimalsPage animalArray={data.adoptedAnimals} />
      </Route>
    </Switch>
    <Footer/>
    </>
  )
}

export default App;