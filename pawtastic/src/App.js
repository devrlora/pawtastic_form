import './App.css';
import React, { Component } from 'react'


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
        <h1>Yay, we love dogs!</h1>
<form onSubmit={this.handleChange}>
        <label>  
          Name: 
          <input type="text"  value={this.state.value} onChange={this.handleChange}/>
          {/* <input type="submit"  value="Submit" onClick={this.handleSubmit}/> */}
        </label>
      </form>
      <form onSubmit={this.handleChange}>
      <label>  
          Breed: 
          <input type="text"  value={this.state.value} onChange={this.handleChange}/>
          {/* <input type="submit"  value="Submit" onClick={this.handleSubmit}/> */}
        </label>
      </form>
      <form onSubmit={this.handleChange}>
      <label>  
          Birthday: 
          <input type="date"  value={this.state.value} onChange={this.handleChange}/>
          {/* <input type="submit"  value="Submit" onClick={this.handleSubmit}/> */}
        </label>
      </form>
     
      </div>
      
    )
  }
}

