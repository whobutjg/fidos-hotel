import React from 'react';
import { Redirect } from 'react-router-dom';

class NewPet extends React.Component {
  state = {
    name: '',
    breed: '',
    size: '',
    notes: '',
  };

  newPetHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmitPet = (event) => {
    console.log('Pet logged!');
    event.preventDefault();
    this.props.submitPetHandler(
      this.state.name,
      this.state.breed,
      this.state.size,
      this.state.notes
    );
    if (this.props.petsModalShow) {
      this.props.petsModalShow(false);
    }
    this.props.history.push('/pets');
    console.log(this.props);
  };

  render() {
    let redirect = this.props.loggedIn ? null : <Redirect to='/' />;
    return (
      <>
        <div className='newpet-page'>
          {redirect}
          <div className='newpet-form'>
            <h3>Add a Pet</h3>
            <form onSubmit={this.handleSubmitPet}>
              <div className='p-3 align-middle'>
                <label htmlFor='name'>Name: </label>
                <input
                  className='rounded'
                  type='text'
                  id='name'
                  name='name'
                  onChange={this.newPetHandler}
                  required
                />
              </div>

              <div className='p-3 align-middle'>
                <label htmlFor='breed'>Breed: </label>
                <input
                  className='rounded'
                  type='text'
                  id='breed'
                  name='breed'
                  onChange={this.newPetHandler}
                  required
                />
              </div>

              <div className='p-3 align-middle'>
                <label htmlFor='size'>Size: </label>
                <input
                  className='rounded'
                  type='text'
                  id='size'
                  name='size'
                  onChange={this.newPetHandler}
                  required
                />
              </div>
              <div className='p-3 align-middle'>
                <label htmlFor='size'>Notes: </label>
                <textarea
                  className='rounded'
                  type='text'
                  id='notes'
                  name='notes'
                  onChange={this.newPetHandler}
                  required
                />
              </div>
              <button
                className='bg-blue-700 text-white  hover:bg-blue-900 p-2 border rounded-md'
                type='submit'
              >
                Add Pet
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default NewPet;
