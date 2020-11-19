import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.changePokemon = this.changePokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.state = {
      Pokemons: props.pokemons,
      actualPokemon: props.pokemons[0],
      numberState: 0,
    };
  }
  changePokemon() {
    const { Pokemons, numberState } = this.state;
    if (numberState >= Pokemons.length - 1) {
      this.setState({
        Pokemons: Pokemons,
        actualPokemon: Pokemons[0],
        numberState: 0,
      });
    } else {
      this.setState({
        actualPokemon: Pokemons[numberState + 1],
        numberState: numberState + 1,
      });
    }
  }
  filterPokemon({ target }) {
    const { pokemons } = this.props;
    if (target.value === 'All') {
      this.setState({
        Pokemons: pokemons,
        actualPokemon: pokemons[0],
        numberState: 0,
      });
    } else {
      const filteredPokemons = pokemons.filter(
        (pokemon) => pokemon.type === target.value
      );
      this.setState({
        Pokemons: filteredPokemons,
        actualPokemon: filteredPokemons[0],
        numberState: 0,
      });
    }
  }
  render() {
    const { actualPokemon } = this.state;
    return (
      <div>
        <div className='pokedex'>
          <Pokemon pokemon={actualPokemon} />
          <button onClick={this.changePokemon}>Próximo Pokemon</button>
        </div>
        <div className='buttonTypes'>
          <button value='Psychic' className='psychic' onClick={this.filterPokemon}>
            Psíquico
          </button>
          <button value='Fire' className='fire' onClick={this.filterPokemon}>
            Fogo
          </button>
          <button value='All' className='all' onClick={this.filterPokemon}>
            Todos
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
