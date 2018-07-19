import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import SelectedPokemon from '../components/SelectedPokemon';
import PokemonStats from '../components/PokemonStats';

import axios from 'axios';

const API_URL = 'http://pokebase.herokuapp.com/api/v1/pokemons?name=';

class PokemonContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      selectedPokemon: [],
      isEmpty: true
    }
  }



  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`${API_URL}${this.state.searchfield}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          selectedPokemon: res.data.pokemons[0],
          isEmpty: false
        })
      })
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const pokemon = this.state.selectedPokemon
    return (
      <div>
        <SearchBox searchChange={this.onSearchChange} handleSubmit={this.handleSubmit} />
        {!this.state.isEmpty ? <div className="content">
          <SelectedPokemon pokemon={pokemon}/>
          <PokemonStats pokemon={pokemon}/>
        </div> : null }
      </div>
    );
  }
}

export default PokemonContainer;