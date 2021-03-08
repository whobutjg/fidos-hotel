import React from 'react';
import Pets from '../../pages/Pets';
 
class EditBooking extends React.Component {
  state = {
    bookingsId: '',
    startDate: '',
    endDate: ''
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/bookings/${this.props.match.params.id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        ...this.state,
        bookingsId: data._id,
        startDate: data.startDate,
        endDate: data.endDate
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  editBookingSubmit = (event) => {
    event.preventDefault();
    const bookingObj = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    fetch('http://localhost:4000/api/v1/bookings/' + this.state.bookingsId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth': this.props.token
      },
      body: JSON.stringify(bookingObj)
    })
    .then((result) => result.json())
      .then((updatedData) => {
      console.log('Updated Data - ', updatedData)
    })
    .catch((err) => console.log(err))
    this.props.updatePets();
    this.props.history.push('/pets')
  }


  editBookingHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value
    });
  }
  

  render() {
    return(
      <div className="newbooking-form">
      <h1>Edit Booking:</h1>
    <form onSubmit={this.editBookingSubmit}>
    <div>
          <label htmlFor="name">Start Date:</label>
          <input 
          className='rounded'
          type="text" 
          id="startDate" 
          name="startDate"
          value={this.state.startDate}
          onChange={this.editBookingHandler}
          required />
        </div>
        <div>
          <label htmlFor="name">End Date:</label>
          <input
          className="rounded"
          type="text" 
          id="endDate" 
          name="endDate"
          value={this.state.endDate}
          onChange={this.editBookingHandler}
          required />
        </div>
        <br/>
        <button className='bg-blue-600 rounded text-white' type="submit">Update Booking</button>
      </form>
    </div>
    )
  }
}

export default EditBooking;