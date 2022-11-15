import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

const tableTitles = ['Título', 'Preço', 'Categoria', 'Data'];

export function TransactionTable() {
	const { transactions } = useTransactions();

	return (
		<Container>
			<table>
				<thead>
					{tableTitles.map((title) => (
						<th key={title}>{title}</th>
					))}
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								{transaction.amount.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</td>
							<td>{transaction.category}</td>
							<td>
								{new Date(transaction.createdAt).toLocaleDateString('pt-br')}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
