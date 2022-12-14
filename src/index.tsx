import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelancer',
					type: 'deposit',
					amount: 10000,
					category: 'Dev',
					createdAt: new Date('2022-08-01 18:00:00'),
				},
			],
		});
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);
			return schema.create('transaction', { ...data, createdAt: new Date() });
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
