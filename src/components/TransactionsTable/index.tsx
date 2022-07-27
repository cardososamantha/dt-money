import { Container } from './styles';

const tableTitles = ['Título', 'Preço', 'Categoria', 'Data'];

const dataExamples = [
	{
		title: 'Amazon',
		price: 23.5,
		category: 'Compra Online',
		data: 'hoje',
	},
	{
		title: 'Ebay',
		price: 105.5,
		category: 'Compra Online',
		data: 'hoje',
	},
	{
		title: 'Freelancer',
		price: 1000.5,
		category: 'Compra Online',
		data: 'hoje',
	},
];

export function TransactionTable() {
	return (
		<Container>
			<table>
				<thead>
					{tableTitles.map((title) => (
						<th>{title}</th>
					))}
				</thead>
				<tbody>
					{dataExamples.map((item) => (
						<tr>
							<td>{item.title}</td>
							<td className='deposit'>{item.price}</td>
							<td>{item.category}</td>
							<td>{item.data}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
