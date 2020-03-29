import React from 'react'


        {/* Create a component class named DogName*/}

export DogName class App extends Component {
  constructor(props) {
    super(props);

        {/* Input value expects a string input*/}

    this.state = {value: ''}

        {/* Assign an event handler to the DogName component*/}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
        {/* Assign an event handler for once the user enters input*/}

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();

  } 

  render() {
    return (
    
      );
  }
      export default DogName;