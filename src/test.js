const test = {
  test1: () => {
  console.log('Test 1');
},
  test2: () => {
  console.log('Test 2');
},
  test3: () => {
  console.log('Test 3');
  },
  addBooking: (bookingObj) => {
    fetch('http://localhost:4000/api/v1/bookings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingObj),
    })
    .then((result) => result.json())
    .catch((err) => console.log(err));
  }
}
export default test;

