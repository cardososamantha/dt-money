import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createServer } from 'miragejs';

createServer({
	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return {
				transactions: [
					{
						id: 1,
						title: 'Amazon',
						amount: 23.5,
						type: 'deposit',
						category: 'food',
						date: 'hoje',
					},
					{
						title: 'Ebay',
						amount: 105.5,
						type: 'withdraw',
						category: 'food',
						date: 'hoje',
					},
					{
						title: 'Freelancer',
						amount: 1000.5,
						type: 'deposit',
						category: 'food',
						date: 'hoje',
					},
				],
			};
		});
	},
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
