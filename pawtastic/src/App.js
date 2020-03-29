import './App.css';
import React, { Component } from 'react'
import DogName from './components/DogName'
import DogBreed from './components/DodBreed'
import DogDob from './components/DogDob';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();

  } 

  render() {
    return (
      <div>

        <img src="https://i.dlpng.com/static/png/6103810-dog-paw-paw-prints-transparent-background-png-clipart-hiclipart-black-paw-print-png-800_750_preview.png"alt="paw logo"/>
        
        {/* Welcome text */}
        <h1>Yay, we love dogs! Give Us the basics about your pup.</h1>  
        <div>
           <DogName>
           <DogBreed>
           <DogDob>
      <div>
      <input type="submit" value="Submit" />
      </div>
      
      
           </div>
       
     
      </div>
      
    )
  }
}

