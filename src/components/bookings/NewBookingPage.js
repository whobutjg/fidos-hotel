import React from 'react';
import DatePicker from 'react-datetime';

class NewBooking extends React.Component {
  state = {
    pet: '',
    startDate: '',
    endDate: '',
  };

  bookingStartHandler = (date) => {
    this.setState({
      ...this.state,
      startDate: date,
    });
  };
  bookingEndHandler = (date) => {
    this.setState({
      ...this.state,
      endDate: date,
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
          <div className='flex justify-between'>
            <div>
              <label htmlFor='name'>Start Date:</label>
              <DatePicker
                className='rounded'
                id='startDate'
                dateFormat='MM/DD/YYYY'
                selected={this.startDate}
                onChange={this.bookingStartHandler}
                required
              />
            </div>
            <div>
              <label htmlFor='name'>End Date:</label>
              <DatePicker
                className='rounded'
                id='endDate'
                dateFormat='MM/DD/YYYY'
                selected={this.endDate}
                onChange={this.bookingEndHandler}
                required
              />
            </div>
          </div>
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
