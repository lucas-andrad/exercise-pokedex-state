import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.changePokemon = this.changePokemon.bind(this);
        this.state = {
            Pokemons: props.pokemons,
            actualPokemon: props.pokemons[0],
            numberState: 0,
        }
    }
    changePokemon() {
        const { Pokemons, numberState } = this.state;
        if (numberState >= (Pokemons.length - 1)) {
            this.setState({
                Pokemons: this.props.pokemons,
                actualPokemon: this.props.pokemons[0],
                numberState: 0,
            })
        } else{
            this.setState({
                actualPokemon: Pokemons[numberState + 1],
                numberState: numberState + 1
        })  
        }

    }
    render() {
        const { actualPokemon } = this.state;
        return (
            <div className="pokedex">
                {<Pokemon pokemon={actualPokemon} />}
                <button onClick={this.changePokemon}>Próximo Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;