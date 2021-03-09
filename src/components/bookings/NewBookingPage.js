import React from 'react';

class NewBooking extends React.Component {
  state = {
    pet: '',
    startDate: '',
    endDate: '',
  };

  bookingDateHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  bookingDateSubmit = (event) => {
    console.log('Booking submitted');
    event.preventDefault();
    this.props.submitBookingHandler(
      this.state.pet,
      this.state.startDate,
      this.state.endDate
    );
    if (this.props.bookingsModalShow) {
      this.props.bookingsModalShow(false);
    }
    this.setState({
      pet: '',
      startDate: '',
      endDate: '',
    });
  };

  handleChangePet = (event) => {
    this.setState({
      pet: event.target.value,
    });
    console.log('Change', event.target.value);
  };

  render() {
    let petOptions = this.props.pets.map((pet) => {
      return (
        <option value={pet._id} key={pet._id}>
          {pet.name}
        </option>
      );
    });
    petOptions = [
      <option value={''} key={0}>
        Choose A Pet
      </option>,
      ...petOptions,
    ];
    return (
      <div className='newbooking-form'>
        <h1>Bookings Page:</h1>
        <select onChange={this.handleChangePet}>{petOptions}</select>
        <form onSubmit={this.bookingDateSubmit}>
          <div>
            <label htmlFor='name'>Start Date:</label>
            <input
              className='rounded'
              type='text'
              id='startDate'
              name='startDate'
              onChange={this.bookingDateHandler}
              required
            />
          </div>
          <div>
            <label htmlFor='name'>End Date:</label>
            <input
              className='rounded'
              type='text'
              id='endDat'
              name='endDate'
              onChange={this.bookingDateHandler}
              required
            />
          </div>
          <br />
          <button
            id='booking-button'
            className='bg-blue-600 rounded text-white'
            type='submit'
          >
            Book Visit!
          </button>
        </form>
      </div>
    );
  }
}

export default NewBooking;
