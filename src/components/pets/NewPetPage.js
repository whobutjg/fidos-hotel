import React from 'react';

class NewPet extends React.Component {
  state = {
    name: '',
    breed: '',
    size: ''
  }

  newPetHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmitPet = (event) => {
    console.log('Pet logged!');
    event.preventDefault();
    const petObj = {
      name: this.state.name,
      breed: this.state.breed,
      size: this.state.size
    };
    fetch('http://localhost:4000/api/v1/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petObj),
    })
    .then((result) => result.json())
    .then((petData) => petData)
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return(
      <div>
        <h3>Add a Pet</h3>
        <form onSubmit={this.handleSubmitPet}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            onChange={this.newPetHandler}
            required />
          </div>
          <div>
            <label htmlFor="name">Breed:</label>
            <input 
            type="text" 
            id="breed" 
            name="breed"
            onChange={this.newPetHandler}
            required />
          </div>
          <div>
            <label htmlFor="name">Size:</label>
            <input 
            type="text" 
            id="size" 
            name="size"
            onChange={this.newPetHandler}
            required />
          </div>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
}

export default NewPet;