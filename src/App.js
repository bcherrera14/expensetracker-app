import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<ExpenseForm />
				<ExpenseTable />
			</div>
		);
	}
}

export default App;
