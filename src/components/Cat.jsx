import React from 'react';
import './Cat.css';

const Cat = ({image, name, description}) => (
		<div>
				<div>{name}</div>
				<img className='cat-image' src={image} alt={name} />
				<div>{description}</div>
		</div>
);

export default Cat
