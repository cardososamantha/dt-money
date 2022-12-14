import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/Globals';

function App() {
	const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

	function handleOpenTransactionModal() {
		setIsTransactionModalOpen(true);
	}

	function handleCloseTransactionModal() {
		setIsTransactionModalOpen(false);
	}
	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleOpenTransactionModal} />
			<Dashboard />
			<NewTransactionModal
				isOpen={isTransactionModalOpen}
				onRequestClose={handleCloseTransactionModal}
			/>
			<GlobalStyle />
		</TransactionsProvider>
	);
}

export default App;
