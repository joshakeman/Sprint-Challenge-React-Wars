import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList'
import Character from './components/Character'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };



  render() {
    const Luke = this.state.starwarsChars[0]
    console.log(Luke)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Character params={this.state.starwarsChars[0]} /> 
        {/* {this.state.starwarsChars.map((char, index) => {
          <Character 
          key={index}
          charProp={char}
          />
        })} */}
      </div>
    );
  }
}

export default App;
