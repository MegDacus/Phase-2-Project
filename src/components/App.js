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
  const [dogs, setDogs] = useState(retrieveLocalStorage("dogs"))
  const [cats, setCats] = useState(retrieveLocalStorage("cats"))
  useEffect(() => {
    getDogs();
    getCats();
  }, [])   
  function retrieveLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key)) || []
  }
  function saveLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  function getRandomMultipleOfFifty(min, max) {
    return( min + Math.floor( Math.random() * ( max-min+1 ) ) );
}
  function getDogs() {
    if (dogs.length < 6){
    fetch(`https://dog.ceo/api/breeds/image/random/${6 - dogs.length}`)
        .then (resp => resp.json())
        .then (dogImg => { 
            let randomDog = dogImg.message;
            let dogNames = getRandomName(data.dogNames, 6 - dogs.length)
            let newDogs = randomDog.map((dog, index) => {
              return {
                image: dog,
                name:  dogNames[index],
                fee: getRandomMultipleOfFifty(2, 6) * 50
              }
            })
            console.log(dogs.length)
            console.log(dogImg)
            let newDogList = dogs.concat(newDogs)
            setDogs(newDogList)
            saveLocalStorage("dogs", newDogList)
    })}}
    
  function getCats() {
    if (cats.length < 6){
      console.log("gettings cats")
    let newCats = getRandomName(data.catNames, 6 - cats.length).map(cat => {
      cat.fee = getRandomMultipleOfFifty(2, 6) * 50
      return cat
    })
    
    var joinedCatsList = cats.concat(newCats)
    saveLocalStorage("cats", joinedCatsList)
    setCats(joinedCatsList);
  }
  }
  function getRandomName(array, numOfNames) {
    let animalNames = [];
    for (let i = 0; i < numOfNames; i++) {
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


  return(
    <>
    <NavBar/>
    <Switch>
      <Route path="/cats">
        <AnimalPage animalType={'cats'} animalArray={cats} saveLocalStorage={saveLocalStorage} retrieveLocalStorage={retrieveLocalStorage}/>
      </Route>
      <Route path="/dogs">
        <AnimalPage animalType={'dogs'} animalArray={dogs} saveLocalStorage={saveLocalStorage} retrieveLocalStorage={retrieveLocalStorage}/>
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