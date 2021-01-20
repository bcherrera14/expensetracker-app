import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

class App extends React.Component {
	constructor() {
		super();
		this.state = { expenseData: this.getSavedExpenses() };
		this.handleDeleteButton = this.handleDeleteButton.bind(this);
		this.handleSubmitButton = this.handleSubmitButton.bind(this);
	}

	getSavedExpenses() {
		return JSON.parse(localStorage.getItem('expenses')) || [];
	}

	saveExpense(expense) {
		const savedExpenses = this.getSavedExpenses();
		const updatedExpenses = [ ...savedExpenses, expense ];
		localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
	}

	handleDeleteButton(id) {
		this.setState((prevState) => {
			const updatedExpenseData = prevState.expenseData.filter((expense) => expense.id !== id);
			localStorage.setItem('expenses', JSON.stringify(updatedExpenseData));
			return {
				expenseData: updatedExpenseData
			};
		});
	}

	handleSubmitButton(newExpense, clearFormData) {
		this.setState((prevState) => {
			const id = prevState.expenseData.length + 1;
			newExpense.id = id;
			this.saveExpense(newExpense);
			const updatedExpenseData = [ ...prevState.expenseData, newExpense ];
			return {
				expenseData: updatedExpenseData
			};
		});
		clearFormData();
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
