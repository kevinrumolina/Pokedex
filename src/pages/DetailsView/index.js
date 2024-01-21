import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PokemonDetail from './PokemonDetail/PokemonDetail';

import './styles.css';

const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
};

function DetailsView() {
    const [pokemonId, setPokemonId] = useState(parseInt(getQueryParam("id")));
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching Pokémon list:', error);
            }
        };

        fetchPokemonData();
    }, [pokemonId]);

    return (
        <>
            <Link className='button' to='/'>Home</Link>
            {pokemonData?.name && <PokemonDetail pokemonData={pokemonData} />}
            <div className='bottom-container'>
                <div className='button' onClick={() => setPokemonId(pokemonId - 1)}>#{pokemonId - 1}</div>
                <div className='button' onClick={() => setPokemonId(pokemonId + 1)}>#{pokemonId + 1}</div>
            </div>
        </>
    );
}

export default DetailsView;