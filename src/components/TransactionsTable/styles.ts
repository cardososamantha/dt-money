import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 2rem;
	font-size: 0.7rem;
	color: var(--text);

	table {
		width: 100%;
		padding: 1.25rem 0;
		border-spacing: 0 0.5rem;

		thead {
			text-align: left;
			font-weight: 300;

			th {
				padding: 0rem 1rem;
			}
		}

		tbody {
			margin-top: 1rem;

			td {
				background-color: var(--shape);
				padding: 1rem 1rem;
				border: 0;
				border-radius: 0.25rem;
			}

			&:first-child {
				color: var(--title);
			}

			&.deposit {
				color: var(--green);
			}

			&.withdraw {
				color: var(--red);
			}
		}
	}
`;
