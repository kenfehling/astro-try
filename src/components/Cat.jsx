import React from 'react'
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

const CatContainer = styled.div`
	opacity: 0.5;
	width: 50%;
	border-radius: 4px;
	&:hover {
		opacity: 1;
	}
	& > img {
		width: 100%;
	}
`;

const Cat = ({image, name, description}) => (
	<CatContainer>
		<div>{name}</div>
 		<img src={image} alt={name} />
 		<div>{description}</div>
	</CatContainer>
);

export default Cat
