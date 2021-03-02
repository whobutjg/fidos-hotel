import React from 'react';


class NewBooking extends React.Component {
  state = {
    petId: '',
    startDate: '',
    endDate: '',
  }

  bookingDateHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  bookingDateSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <h1>Bookings Page:</h1>
      </div>
    );
  }
}

export default NewBooking;