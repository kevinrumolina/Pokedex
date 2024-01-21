import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

function Types({types}) {
    const [pokemonType1, setPokemonType1] = useState(null);
    const [pokemonType2, setPokemonType2] = useState(null);

    useEffect(() => {
        const fetchTypesData = async () => {
            try {
                console.log(types)
                if(types) {
                    const response1 = await axios.get(`${types[0]}`);
                    console.log(response1.data)
                    setPokemonType1(response1.data);
                }

                if(types && types.length > 1) {
                    const response2 = await axios.get(`${types[1]}`);
                    setPokemonType2(response2.data)
                } else {
                    setPokemonType2(null)
                }
            } catch (error) {
                console.error('Error fetching type', error);
            }
        };

        fetchTypesData();
    }, [types]);

    return (
        <div className='types'>
            <p>Types</p>
            <div className='types-list'>
                {pokemonType1 && <div>{pokemonType1.name}</div>}
                {pokemonType2 && <div>{pokemonType2.name}</div>}
            </div>
        </div>
    );
}

export default Types;