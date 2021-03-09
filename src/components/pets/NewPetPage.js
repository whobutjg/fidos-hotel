import React from 'react';
import { Redirect } from 'react-router-dom';

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
    this.props.submitPetHandler(
      this.state.name,
      this.state.breed,
      this.state.size
      );
    this.props.history.push('/pets');
    console.log(this.props);
  }

  render() {
    let redirect = this.props.loggedIn ? null : <Redirect to='/' />;
    return(
      <>
      {redirect}
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
            <label htmlFor="breed">Breed: </label>
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
            <label htmlFor="size">Size: </label>
            <input 
            className='rounded'
            type="text" 
            id="size" 
            name="size"
            onChange={this.newPetHandler}
            required />
          </div>
          <button className='bg-blue-600 border-black rounded text-white' type="submit">Add Pet</button>
        </form>
      </div>
      </>
    );
  }
}

export default NewPet;