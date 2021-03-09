import React from "react";
import Navbar from "./universalComps/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PetPage from "./components/pets/NewPetPage";
import BookingPage from "./components/bookings/NewBookingPage";
import EditBookingPage from './components/bookings/EditBookingPage';
import Pets from "./pages/Pets";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePage from './pages/Profile';
import Modal from "./universalComps/Modal";


class App extends React.Component {
  state = {
    pets: [],
    token: null,
    isTokenValid: false,
    displayLoginModal: false,
    displaySignupModal: false,
    displayBookingsModal: false
  }


  componentDidMount() {
    let localToken = localStorage.getItem('token')
    this.setState({
      token: localToken,
      isTokenValid: true
    })
    if (localToken) {
      fetch('http://localhost:4000/api/v1/pets/', {
        headers: {
          'Content-Type': 'application/json',
          'auth': localToken
        }
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          ...this.state,
          pets: data
        })
      })
      .catch((err) => console.log(err));
    } else {
      console.error('No Pets');
    }
  }

  submitPetHandler = (name, breed, size) => {
    console.log('submitPetHandler logged!');
    const petObj = {
      name: name,
      breed: breed,
      size: size,
      bookings: []
    }
    fetch('http://localhost:4000/api/v1/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': this.state.token
      },
      body: JSON.stringify(petObj),
    })
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log('Result log',data)
      this.setState({
        ...this.state,
        pets: [...this.state.pets, data]
      })  
    })
    .catch((err) => {
      console.log(err);
    });
  }


  submitBookingHandler = (pet, startDate, endDate) => {
    const bookingObj = {
      startDate: startDate,
      endDate: endDate,
      pet: pet
    }
    fetch('http://localhost:4000/api/v1/bookings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth': this.state.token
        },
        body: JSON.stringify(bookingObj),
      })
      .then((result) => result.json())
      .then((data) =>  {
        console.log('Booking handler - ', data);
        this.setState((prevState) => {
          let petsCopy = prevState.pets.slice()
          petsCopy.forEach((pet) => {
            if (pet._id === data.pet) {
              pet.bookings.push(data)
            }
          }) 
          return { pets: petsCopy }
        })
      })
      .catch((err) => console.log(err));
  }

  updatePets = () =>  {
    fetch(`http://localhost:4000/api/v1/pets/`, {
      headers: {
        'Content-Type': 'application/json',
        'auth': this.state.token
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({
        ...this.state,
        pets: data
      })
    })
    .catch((err) => console.log(err));
  };

  setToken = (newToken) => {
    this.setState({
      token: newToken
    });
  }

  logoutHandler = (event) => {
    console.log('logoutHandler - ');
    event.preventDefault();
    localStorage.removeItem('token');
    this.setState({
      token: null
    });
  }

  isLoggedIn = () => (this.state.token ? true : false);

  loginModalShow = (newState) => {
    this.setState({
      ...this.state,
      displayLoginModal: newState
    });
  }
  signupModalShow = (newState) => {
    this.setState({
      ...this.state,
      displaySignupModal: newState
    });
  }
  bookingsModalShow = (newState) => {
    this.setState({
      ...this.state,
      displayBookingsModal: newState
    });
  }


  render() {
    return (
    <>
    <Modal display={this.state.displayLoginModal} closeHandler={() => this.loginModalShow(false)}></Modal>
    <Modal display={this.state.displaySignupModal} closeHandler={() => this.signupModalShow(false)}></Modal>
    <Modal display={this.state.displayBookingsModal} closeHandler={() => this.bookingsModalShow(false)}>
      <BookingPage 
        pets={this.state.pets} 
        token={this.state.token} 
        submitBookingHandler={this.submitBookingHandler} 
        bookingsModalShow={(newState) => this.bookingsModalShow(newState)}
        />
    </Modal>
      <div>
        <Navbar loggedIn={this.isLoggedIn()} loggedOut={this.logoutHandler} />
        <div id="app">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/pets" loggedIn={this.isLoggedIn()} component={() => <Pets updatePets={this.updatePets} pets={this.state.pets} bookingsModalShow={(newState) => this.bookingsModalShow(newState)} />}/>
            <Route path="/newpet" loggedIn={this.isLoggedIn()} component={(props) => <PetPage submitPetHandler={this.submitPetHandler} {...props} />} />
            <Route path='/editbooking/:id' loggedIn={this.isLoggedIn()} component={(props) => <EditBookingPage token={this.state.token}  updatePets={this.updatePets} {...props} />} />
            <Route path='/login' component={() => <Login setToken={this.setToken} />} />
            {this.state.token || !this.state.isTokenValid ? <Route path='/profile' component={ProfilePage} /> : <Redirect to='/login'/>}
            <Route path="/signup" component={Signup} />
            <Route path='/logout' component={Homepage} />
          </Switch>
        </div>
      </div>
    </>
    );
  }
}

export default App;


// When you get result back from the post modify the state to show updated pets in the submitPetHandler - done
// Change API so it responds with new pets, - done
// On pets page make sure componentDidMount is off - done
// Make sure all components are functional outside of state in the App.js - done
// Momentjs used to convert strings to dates
