import React, { useState, useEffect } from 'react'
import PlanetIndexListItem from './PlanetIndexListItem';

const PlanetsIndex = () => {
	const [planets, setPlanets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const fetchPlanets = async () => {
			
			try {
				let page = 1;
				let allPlanets = [];

				while (true) {
					const response = await fetch(`https://swapi.dev/api/planets?page=${page}`);
	
					if (!response.ok) {
						throw new Error('Failed to fetch planets')
					}
	
					const data = await response.json();
					allPlanets = [...allPlanets, ...data.results];
	
					if (data.next) {
						page++;
					} else {
						setPlanets(allPlanets);
						setIsLoading(false);
						break;
					}
				}
			}
			catch(error) {
			}
		}

		fetchPlanets()
	}, [])

	if (isLoading === true) {
		return (
			<div className='loading-tag'>
				Loading...
			</div>
		)
	}

	return (
		<div className='planets-index'>
			{planets.map((planet, idx) => (
				<PlanetIndexListItem planet={planet} idx={idx}/>
			))}
		</div>
	)
}

export default PlanetsIndex;