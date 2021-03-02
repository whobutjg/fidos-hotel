import React from 'react';
import PetsList from '../components/pets/PetsList';


class Pets extends React.Component {
  state = {
    pets: [],
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/pets/`)
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
    .catch((err) => console.log(err))
  }
  
  render() {
    return (
      <div>
        <PetsList pets={this.state.pets} />
      </div>
    )
  }
}

export default Pets;