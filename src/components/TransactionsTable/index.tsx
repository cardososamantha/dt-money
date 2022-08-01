import { useEffect, useState } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

const tableTitles = ['Título', 'Preço', 'Categoria', 'Data'];

export function TransactionTable() {
	const [transactions, setTransactions] = useState({});

	async function getTransactions() {
		const response = await api.get('/transactions');
		setTransactions(response.data);
	}

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<Container>
			<table>
				<thead>
					{tableTitles.map((title) => (
						<th>{title}</th>
					))}
				</thead>
				<tbody>
					{/* {transactions.map((item) => (
						<tr>
							<td>{item.title}</td>
							<td className='deposit'>{item.price}</td>
							<td>{item.category}</td>
							<td>{item.date}</td>
						</tr>
					))} */}
				</tbody>
			</table>
		</Container>
	);
}
