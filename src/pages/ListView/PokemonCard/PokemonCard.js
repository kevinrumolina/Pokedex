import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import './styles.css';

function ListView(pokemon, index) {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(pokemon.pokemon.url);
                setPokemonData(response.data)
            } catch (error) {
                console.error('Error fetching Pokémon card:', error);
            }
        };

        fetchPokemon();
    }, [pokemon.pokemon.url]);

    return (
        <Link className='container' to={`/pokemon?id=${pokemonData.id}`}>
            <li className='card' key={pokemon.index}>
                {pokemonData?.sprites?.front_default &&
                    <img
                        className='card-image'
                        src={pokemonData.sprites.front_default} 
                        alt={`${pokemon.pokemon.name} sprite`}>
                    </img>
                }
                {!pokemonData?.sprites?.front_default && <div className='notImage'>Not Image</div>}
                <p className='card-name'>{pokemon.pokemon.name.replaceAll('-', ' ')}<br/>#{pokemonData.id}</p>
            </li>
        </Link>
    );
}

export default ListView;