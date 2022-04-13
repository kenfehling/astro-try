import React from 'react'
// import styled from 'styled-components'
// import {css} from '@emotion/react'
// import styled from '@emotion/styled'
import { css } from "astroturf";

// console.log("AMN");
// console.log(styled.div);

// const CatContainer = styled.div`
// 	opacity: 0.5;
// 	width: 50%;
// 	border-radius: 4px;
// 	&:hover {
// 		opacity: 1;
// 	}
// 	& > img {
// 		width: 100%;
// 	}
// `;

// const Cat = ({image, name, description}) => (
// 	<CatContainer>
// 		<div>{name}</div>
// 		<img src={image} alt={name} />
// 		<div>{description}</div>
// 	</CatContainer>
// );

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
