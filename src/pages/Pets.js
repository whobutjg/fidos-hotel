import React from 'react';
import PetsList from '../components/pets/PetsList';
import { Redirect } from 'react-router-dom';

const Pets = (props) => {
  let redirect = props.loggedIn ? <Redirect to='/pets' /> : null;
  return (
    <div className='pets-page'>
      {redirect}
      <PetsList
        pets={props.pets}
        updatePets={props.updatePets}
        bookingsModalShow={props.bookingsModalShow}
      />
    </div>
  );
};

export default Pets;
