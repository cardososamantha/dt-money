import Modal from 'react-modal';
import CloseIcon from '../../assets/close.svg';

import { Container } from './styles';

Modal.setAppElement('#root');

interface NewTransactionsModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionsModalProps) {
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
			<Container>
				<h2> Cadastrar Transação </h2>
				<input type='text' placeholder='Título' />
				<input type='number' placeholder='Valor' />
				<input type='text' placeholder='Categoria' />
				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
