import React from 'react';
import moment from 'moment';


const SelectedPokemon = ({ pokemon }) => {
  const age = moment().diff(`${pokemon.birthdate}`, 'years');

  return (
    <div className="pokemon-container">
      <div className="pokemon-info">
        <img src={`http://pokebase.herokuapp.com/images/full/${pokemon.poke_id}.png`} alt={pokemon.name} className="pokemon-img"/>
        <h2>{pokemon.name}</h2>
        <div>Attack: {pokemon.attack}</div>
        <div>Defense: {pokemon.defence}</div>
        <div>Stamina: {pokemon.stamina}</div>
        <div>Age: {age}</div>
      </div>
    </div>
  );
}

export default SelectedPokemon;