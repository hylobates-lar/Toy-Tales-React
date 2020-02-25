import React from 'react';
import './App.css';

import Header from './components/Header';
import ToyForm from './components/ToyForm';
import ToyContainer from './components/ToyContainer';

import data from './data'


class App extends React.Component{

  state = {
    toyData: data
    
  }

  addToy = (toy) => {
    let newToy = {
      name: toy.name,
      image: toy.image,
      likes: 0,
      id: this.state.toyData[this.state.toyData.length - 1].id + 1
    }
    this.setState({
      toyData: [...this.state.toyData, newToy]
    })
  }

  donate = (id) => {
    let filteredToys = this.state.toyData.filter( toy => (toy.id !== id))
    this.setState({
      toyData: filteredToys
    })
  }

  addLike = (id) => {
    let updatedToys = this.state.toyData.map( toy => {
      // return toy.id === id ? {...toy, likes: toy.likes + 1} : toy
      if (toy.id === id) {
        toy.likes += 1
      }
      return toy 
    })
    this.setState({
      toyData: updatedToys
    })
  }

  render(){
    console.log(this.state.toyData)
    return (
      <div>
        <Header/>
        <ToyForm addToy={this.addToy}/>
        <ToyContainer toyData={this.state.toyData} donate={this.donate} addLike={this.addLike}/>
      </div>
    );
  }

}

export default App;
