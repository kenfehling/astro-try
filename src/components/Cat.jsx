import React from 'react'
import { css } from '@linaria/core';

const Cat = ({image, name, description}) => (
	<div className={css`
		opacity: 0.5;
		width: 50%;
		border-radius: 4px;
		&:hover {
			opacity: 1;
		}
		& > img {
			width: 100%;
		}
	`}>
		<div>{name}</div>
 		<img src={image} alt={name} />
 		<div>{description}</div>
	</div>
);

export default Cat
