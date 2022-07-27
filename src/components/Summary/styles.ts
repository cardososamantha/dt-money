import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-top: -5rem;

	div {
		background: var(--shape);
		border-radius: 0.25rem;
		padding: 1rem;
		color: var(--title);

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			p {
				font-size: 0.7rem;
			}

			img {
				width: 20px;
			}
		}

		strong {
			font-size: 1.5rem;
			font-weight: 500;
			line-height: 3rem;
		}
	}

	div:last-child {
		background-color: var(--green);
		color: var(--shape);
	}
`;
