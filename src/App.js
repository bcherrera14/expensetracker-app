import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

class App extends React.Component {
	constructor() {
		super();
		this.state = { expenseData: [] };
		this.handleDeleteButton = this.handleDeleteButton.bind(this);
		this.handleSubmitButton = this.handleSubmitButton.bind(this);
	}

	handleDeleteButton(id) {
		this.setState((prevState) => {
			const updatedExpenseData = prevState.expenseData.filter((expense) => expense.id !== id);
			return {
				expenseData: updatedExpenseData
			};
		});
	}

	handleSubmitButton(newExpense) {
		if (!newExpense.description || !newExpense.merchantName || !newExpense.date || !newExpense.amount) {
			alert('The form is incomplete.');
			return false;
		}
		this.setState((prevState) => {
			const id = prevState.expenseData.length + 1;
			newExpense.id = id;
			const updatedExpenseData = [ ...prevState.expenseData, newExpense ];
			return {
				expenseData: updatedExpenseData
			};
		});
		const formInputs = document.querySelectorAll('input');
		formInputs.forEach((input) => (input.value = ''));
		return false;
	}

	render() {
		return (
			<div className="container">
				<ExpenseForm expenseData={this.state.expenseData} handleSubmitButton={this.handleSubmitButton} />
				<ExpenseTable expenseData={this.state.expenseData} handleDeleteButton={this.handleDeleteButton} />
			</div>
		);
	}
}

export default App;
