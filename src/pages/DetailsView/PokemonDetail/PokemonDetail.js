import React from 'react';

import { pokemonImage } from '../../../utils';

import Types from '../Types/Types';
import Attacks from '../Attacks/Attacks';

import './styles.css';

function PokemonDetail({pokemonData}) {

    return (
        <div className='pokemon-detail'>
            
            <h1>{pokemonData?.name.replaceAll('-', ' ')}</h1>
            <img className="pokemon-detail__image" src={pokemonImage(pokemonData.sprites)} alt={`${pokemonData?.name.replaceAll('-', ' ')}`} />
            <p className='pokemon-detail__number'>#{pokemonData.id}</p>
            <Types types={pokemonData.types.map(type => type.type.url)}/>
            <Attacks moves={pokemonData.moves} />
        </div>
    );
}

export default PokemonDetail;