import React from 'react';
import PetCard from './PetCard';

const PetsList = (props) => {
  const pets = props.pets.map((petObj) => {
    return  (
      <PetCard key={petObj._id} pet={petObj} updatePets={props.updatePets}/>
    );
  });
  return pets;
}

export default PetsList;