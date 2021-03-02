import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import PetPage from '../components/pets/NewPetPage';
import BookingPage from '../components/bookings/NewBookingPage';
import Pets from '../pages/Pets';


class Routes extends React.Component {


  render() {
    return (
      <>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path='/pets' component={ Pets } />
        <Route path='/newpet' component={ PetPage } />
        <Route path='/newbooking' component={ BookingPage } />
      </Switch>
      </>
    );
  }
}

export default Routes;