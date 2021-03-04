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
    .catch((err) => {
      console.log(err);
    });
    this.props.history.push('/pets');
  }

  render() {
    return(
      <>
      <div className='newpet-form'>
        <h3>Add a Pet</h3>
        <form onSubmit={this.handleSubmitPet}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
            className='rounded'
            type="text" 
            id="name" 
            name="name"
            onChange={this.newPetHandler}
            required />
          </div>
          <br/>
          <div>
            <label htmlFor="name">Breed: </label>
            <input 
            className='rounded'
            type="text" 
            id="breed" 
            name="breed"
            onChange={this.newPetHandler}
            required />
          </div>
          <br/>
          <div>
            <label htmlFor="name">Size: </label>
            <input 
            className='rounded'
            type="text" 
            id="size" 
            name="size"
            onChange={this.newPetHandler}
            required />
          </div>
          <br/>
          <button className='bg-blue-600 border-black rounded text-white' type="submit">Add Pet</button>
        </form>
      </div>
      </>
    );
  }
}

export default NewPet;