import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import expenseData from './components/expenseData';

class App extends React.Component {
	constructor() {
		super();
		this.state = { expenseData };
		this.handleDeleteButton = this.handleDeleteButton.bind(this);
	}

	handleDeleteButton(id) {
		this.setState((prevState) => {
			const updatedExpenseData = prevState.expenseData.filter((expense) => expense.id !== id);
			return {
				expenseData: updatedExpenseData
			};
		});
	}

	render() {
		return (
			<div className="container">
				<ExpenseForm />
				<ExpenseTable expenseData={this.state.expenseData} handleDeleteButton={this.handleDeleteButton} />
			</div>
		);
	}
}

export default App;
