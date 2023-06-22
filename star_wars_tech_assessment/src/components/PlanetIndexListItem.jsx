import React from 'react'

const PlanetIndexListItem = ({planet, idx}) => {
	return (
		<div className='planet-list-index-item' key={idx}>
			<h3>
				{planet.name}
			</h3>
		</div>
	)
}

export default PlanetIndexListItem