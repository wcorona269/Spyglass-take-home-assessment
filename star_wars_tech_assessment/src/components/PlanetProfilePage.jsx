import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LoadingMessage from './LoadingMessage';
import PlanetInfoBar from './PlanetInfoBar'
import ResidentListItem from './ResidentListItem';
 

const PlanetProfilePage = () => {
	const {planetName } = useParams();
	const location = useLocation();
	const { planet } = location.state;

	const [residents, setResidents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	console.log(residents);


	useEffect(() => {
		const fetchResidents = async () => {
			setIsLoading(true)
			let allResidents = [];

			for (let resident of planet.residents) {
				try {
					const response = await fetch(`${resident}`);
					if (!response.ok) {
						throw new Error('Failed to fetch planet residents')
					}

					const data = await response.json();
					allResidents = [...allResidents, data];
					setResidents(allResidents);
				}
				catch(error) {
					console.error(error);
				}
			}

			setIsLoading(false);
		}

		fetchResidents();
	}, []);

	if (isLoading === true) {
		return (
			<LoadingMessage/>
		)
	}

	return (
		<div className='planet-profile-page'>
			<h1 id='planet-name'>
				{planetName}
			</h1>
			<PlanetInfoBar planet={planet}/>
			<h2 id='residents-header'>
				Residents
			</h2>
			{residents.map((resident, idx) => (
				<ResidentListItem resident={resident} key={idx}/> 
			))}
		</div>
	)
}

export default PlanetProfilePage;