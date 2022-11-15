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
		padding: 1.25rem 2rem;
		font-weight: 400;

		& + input {
			margin-top: 0.5rem;
		}
	}

	input::placeholder {
		font-size: 0.7rem;
		color: var(--text);
	}

	button[type='submit'] {
		width: 100%;
		background-color: var(--green);
		border: 0;
		border-radius: 0.25rem;
		color: var(--shape);
		padding: 1.25rem 0;
		margin-top: 0.5rem;

		transition: opacity 0.5s;

		&:hover {
			opacity: 0.7;
		}
	}
`;

export const TransactionsTypeContainer = styled.div`
	width: 100%;
	display: flex;
	align-content: space-between;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
`;

interface TransactionsTypeButtonProps {
	isActive: boolean;
}

export const TransactionsTypeButton = styled.button<TransactionsTypeButtonProps>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border: 1px solid
		${(props) =>
			props.isActive ? 'rgba(51, 204, 149, 0.2)' : 'var(--input-border)'};
	color: var(--title);
	border-radius: 0.25rem;
	padding: 1.25rem 2rem;
	margin-top: 0.5rem;

	background: ${(props) =>
		props.isActive ? 'rgba(51, 204, 149, 0.2)' : 'tranparent'};

	transition: border-color 0.5s;

	&:hover {
		border-color: var(--text);
	}

	img {
		width: 18px;
	}
`;
