import React from 'react';
import PetsList from '../components/pets/PetsList';


const Pets = (props) => {
    return (
      <div>
        <PetsList pets={props.pets} updatePets={props.updatePets} bookingsModalShow={props.bookingsModalShow}/>
      </div>
    )
  }


export default Pets;