import { FormEvent, useState } from 'react';

import Modal from 'react-modal';

import CloseIcon from '../../assets/close.svg';
import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

import {
	Container,
	TransactionsTypeContainer,
	TransactionsTypeButton,
} from './styles';

Modal.setAppElement('#root');

interface NewTransactionsModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionsModalProps) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState('deposit');
	const [category, setCategory] = useState('');

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();
		await createTransaction({ title, amount, category, type });
		onRequestClose();

		setTitle('');
		setAmount(0);
		setType('deposit');
		setCategory('');
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<button
				type='button'
				onClick={onRequestClose}
				className='react-modal-close-icon'
			>
				<img src={CloseIcon} alt='ícone para fechar o modal' />
			</button>
			<Container onSubmit={handleCreateNewTransaction}>
				<h2> Cadastrar Transação </h2>
				<input
					type='text'
					placeholder='Título'
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input
					type='number'
					placeholder='Valor'
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
				/>

				<TransactionsTypeContainer>
					<TransactionsTypeButton
						type='button'
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
					>
						<img src={IncomeIcon} alt='ícone entradas' />
						Entrada
					</TransactionsTypeButton>
					<TransactionsTypeButton
						type='button'
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
					>
						<img src={OutcomeIcon} alt='ícone saídas' />
						Saída
					</TransactionsTypeButton>
				</TransactionsTypeContainer>

				<input
					type='text'
					placeholder='Categoria'
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>
				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
