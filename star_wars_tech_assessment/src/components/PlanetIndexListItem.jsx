import React from 'react';
import { Link } from 'react-router-dom';

const PlanetIndexListItem = ({planet, idx}) => {
	return (
		<Link
			to={`/planet-profile/${planet.name}`}
			state={{ planet: planet }}
		>
			<div className='planet-list-index-item' key={idx}>
				<h2>
					{planet.name}
				</h2>
				<p>
					pop. {planet.population}
				</p>
			</div>
		</Link>
	)
}

export default PlanetIndexListItem;