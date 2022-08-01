import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
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
		<>
			<Header onOpenNewTransactionModal={handleOpenTransactionModal} />
			<Dashboard />
			<NewTransactionModal
				isOpen={isTransactionModalOpen}
				onRequestClose={handleCloseTransactionModal}
			/>
			<GlobalStyle />
		</>
	);
}

export default App;
