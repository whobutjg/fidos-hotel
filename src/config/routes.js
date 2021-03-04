import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import PetPage from '../components/pets/NewPetPage';
import BookingPage from '../components/bookings/NewBookingPage';
import Pets from '../pages/Pets';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


class Routes extends React.Component {


  render() {
    return (
      <>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path='/pets' component={ Pets } />
        <Route path='/newpet' component={ PetPage } />
        <Route path='/newbooking' component={ BookingPage } />
        <Route path='/login' component={ Login } />
        <Route path='/signup' component={ Signup } />
        </Switch>
      </>
    );
  }
}

export default Routes;