import React, { useState, useEffect } from 'react'

const ResidentListItem = ({resident, key}) => {
	return (
		<div key={key} className='resident-list-item'>
			<h2>
				{resident.name}
			</h2>
			<div className='resident-details-bar'>
				<p>
					born: {resident.birth_year}
				</p>
				<p>
					gender: {resident.gender}
				</p>
				<p>
					height: {resident.height} cm
				</p>
				<p>
					skin: {resident.skin_color}
				</p>
				<p>
					hair: {resident.hair_color}
				</p>
				<p>
					eyes: {resident.eye_color}
				</p>
				<p>
					weight: {resident.mass} kg
				</p>
			</div>
		</div>
	)
}

export default ResidentListItem;