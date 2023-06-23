import React from 'react';

const PlanetInfoBar = ({planet}) => {
	console.log(planet);
	const characteristics = ['population', 'climate', 'terrain', 'diameter']

	return (
		<div className='planet-info-bar'>
			<h2>
				Planet Overview
			</h2>
			<div className='planet-details-bar'>
				{characteristics.map((category) => {
					return (
						<div className='planet-category-detail'>
							<p id='planet-category'>
								{category}:
							</p>
							<p id='planet-detail'>
								{planet[`${category}`]}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PlanetInfoBar;
