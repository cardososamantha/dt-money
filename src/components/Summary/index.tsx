import { Container } from './styles';

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
	const { transactions } = useTransactions();

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'deposit') {
				acc.deposits += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.withdraws += transaction.amount;
				acc.total -= transaction.amount;
			}
			return acc;
		},
		{
			deposits: 0,
			withdraws: 0,
			total: 0,
		}
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={Income} alt='ícone de entradas' />
				</header>
				<strong>
					{summary.deposits.toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL',
					})}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={Outcome} alt='ícone de entradas' />
				</header>
				<strong>
					{summary.withdraws.toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL',
					})}
				</strong>
			</div>
			<div>
				<header>
					<p>Total</p>
					<img src={Total} alt='ícone de entradas' />
				</header>
				<strong>
					{summary.total.toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL',
					})}
				</strong>
			</div>
		</Container>
	);
}
