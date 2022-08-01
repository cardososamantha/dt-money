import styled from 'styled-components';

export const Container = styled.form`
	h2 {
		color: var(--title);
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		background-color: var(--input-gray);
		border: 1px solid var(--input-border);
		border-radius: 0.25rem;
		padding: 1.25rem 0;
		font-weight: 400;

		& + input {
			margin-top: 0.5rem;
		}
	}

	input::placeholder {
		font-size: 0.7rem;
		color: var(--text);
		padding-left: 2rem;
	}

	button {
		width: 100%;
		background-color: var(--green);
		border: 0;
		border-radius: 0.25rem;
		color: var(--shape);
		padding: 1.25rem;
		margin-top: 0.5rem;

		transition: opacity 0.5s;

		&:hover {
			opacity: 0.7;
		}
	}
`;
