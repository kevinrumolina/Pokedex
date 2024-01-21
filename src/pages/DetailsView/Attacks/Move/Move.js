import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

function Move({url}) {
    const [moveData, setMoveData] = useState([]);

    useEffect(() => {
		const fetchMoveList = async () => {
			try {
				const response = await axios.get(url);
				setMoveData(response.data)
			} catch (error) {
				console.error('Error fetching Pokémon list:', error);
			}
		};

		fetchMoveList();
	}, []);

    return (
        <tr className='move'>
            <td>{moveData?.name}</td>
            <td>{moveData?.accuracy}</td>
            <td>{moveData?.type?.name}</td>
        </tr>
    );
}

export default Move;