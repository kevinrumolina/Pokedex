import React from 'react';

import Move from './Move/Move';

import './styles.css';

function Attacks({moves}) {
    console.log(moves)

    return (
        <div className='moves'>
            <h2>Moves</h2>
            <table className='moves-list'>
                <tr>
                    <th>Name</th>
                    <th>Accuracy</th>
                    <th>Type</th>
                </tr>
                {moves.map(move => (
                    <Move url={move?.move?.url} />
                ))}
            </table>
        </div>
    );
}

export default Attacks;