import styled from 'styled-components';

export const Container = styled.header`
	background-color: var(--blue);
`;

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: flex;
	padding: 2rem 1rem 8.25rem;
	justify-content: space-between;
	align-items: center;

	button {
		font-size: 1rem;
		background-color: var(--blue-light);
		color: var(--shape);
		padding: 0rem 2rem;
		height: 3rem;
		border: 0;
		border-radius: 0.5rem;

		transition: opacity 0.2s;

		&:hover {
			opacity: 0.9;
		}
	}
`;
