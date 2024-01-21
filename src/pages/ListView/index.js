import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard/PokemonCard';

import './styles.css';

function ListView() {
	const [pokemonList, setPokemonList] = useState([]);
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(30);

	useEffect(() => {
		const fetchPokemonList = async () => {
			try {
				const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
				setPokemonList(response.data.results);
			} catch (error) {
				console.error('Error fetching Pokémon list:', error);
			}
		};

		fetchPokemonList();
	}, [offset, limit]);

	const newNextOffset = () => {
		if (offset + 100 >= 1302) {
			setOffset(1302 - limit)
		} else {
			setOffset(offset + limit)
		}
	}

	const newPrevOffset = () => {
		if (offset - 100 <= 0) {
			setOffset(0)
		} else {
			setOffset(offset - limit)
		}
	}

	return (
		<>
			<div className='top-container'>
				<ul>
					{pokemonList.map((pokemon, index) => (
						<PokemonCard pokemon={pokemon} index={index} />
					))}
				</ul>
			</div>
			<div className='bottom-container'>
				<div className='button left' onClick={newPrevOffset}>Prev Page</div>
				<div className='button right' onClick={newNextOffset}>Next Page</div>
			</div>
		</>
	);
}

export default ListView;