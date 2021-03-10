import React from 'react';
import DatePicker from 'react-datetime';

class EditBooking extends React.Component {
  state = {
    bookingsId: '',
    startDate: '',
    endDate: '',
  };

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/bookings/${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          ...this.state,
          bookingsId: data._id,
          startDate: data.startDate,
          endDate: data.endDate,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editBookingSubmit = (event) => {
    event.preventDefault();
    const bookingObj = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };
    fetch('http://localhost:4000/api/v1/bookings/' + this.state.bookingsId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        auth: this.props.token,
      },
      body: JSON.stringify(bookingObj),
    })
      .then((result) => result.json())
      .then((updatedData) => {
        console.log('Updated Data - ', updatedData);
      })
      .catch((err) => console.log(err));
    this.props.updatePets();
    this.props.history.push('/pets');
  };

  // editBookingHandler = (event) => {
  //   this.setState({
  //     ...this.state,
  //     [event.target.id]: event.target.value,
  //   });
  // };

  editStartDate = (date) => {
    this.setState({
      ...this.state,
      startDate: date,
    });
  };
  editEndDate = (date) => {
    this.setState({
      ...this.state,
      endDate: date,
    });
  };

  render() {
    return (
      <div className='editbooking-page'>
        <div className='newbooking-form'>
          <h1>Edit Booking:</h1>
          <form onSubmit={this.editBookingSubmit}>
            <div className='flex justify-evenly m-20'>
              <div>
                <label htmlFor='name'>Start Date:</label>
                <DatePicker
                  className='rounded'
                  type='text'
                  id='startDate'
                  name='startDate'
                  dateFormat='MM/DD/YYY'
                  value={this.state.startDate}
                  onChange={this.editStartDate}
                  required
                />
              </div>
              <div>
                <label htmlFor='name'>End Date:</label>
                <DatePicker
                  className='rounded'
                  type='text'
                  id='endDate'
                  name='endDate'
                  dateFormat='MM/DD/YYYY'
                  value={this.state.endDate}
                  onChange={this.editEndDate}
                  required
                />
              </div>
            </div>
            <br />
            <button
              className='bg-blue-700 text-white  hover:bg-blue-900 p-2 border rounded-md'
              type='submit'
            >
              Update Booking
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditBooking;
