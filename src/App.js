import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const BASE_URL = 'https://rickandmortyapi.com/api/character/?page=';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  /* 
  Using Rick and Morty API
  671 chars over 34 pages // * Need to have it loops through pages and add it all to the useState
  https://rickandmortyapi.com/api/character/?page=1
  Receieve Object with info and results
  */

  const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  /* useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(res => {
        const pages = res.data.info.pages;
        console.log(pages)
        // console.log(res.data.results)
        for (let i = 1; i < (pages +1); i++) {
          axios
            .get(`${BASE_URL}${i}`)
            .then(res => {
              // for (let key in res.data.results) {
              //   res.data.results[key].forEach(character => {
              //     setCharacterList(characterList + character);
              //   })}
              res.data.results.forEach(character =>{
                setCharacterList(c => c + character);
              })
              })
            .catch(err => {
              debugger;
            })
        }
      })
      .catch(err => {
        debugger;
      })
  }, []);
console.log(characterList)
 */

useEffect(() => {
  axios
    .get(`/* ${BASE_URL} */`)
    .then(res => {
      setCharacterList(res.data.results);
    })
    .catch(err => {
      // debugger
    })
},[]) //array of objects

// 
// console.log(characterList);




  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
