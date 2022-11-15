import {
	useState,
	useEffect,
	createContext,
	useContext,
	ReactNode,
} from 'react';
import { api } from '../services/api';

interface Transaction {
	id: number;
	title: string;
	amount: number;
	category: string;
	type: string;
	createdAt: string;
}

type NewTransaction = Pick<
	Transaction,
	'title' | 'amount' | 'category' | 'type'
>;

interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: NewTransaction) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	async function getTransactions() {
		const response = await api.get('/transactions');
		setTransactions(response.data.transactions);
	}

	useEffect(() => {
		getTransactions();
	}, []);

	async function createTransaction(transactionInput: NewTransaction) {
		const response = await api.post('/transactions', transactionInput);
		const { transaction } = response.data;

		setTransactions([...transactions, transaction]);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransactions() {
	const context = useContext(TransactionsContext);
	return context;
}
