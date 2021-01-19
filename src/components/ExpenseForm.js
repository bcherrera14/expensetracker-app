import React from 'react';
import FormInputs from './FormInputs';

function ExpenseForm({ handleSubmitButton }) {
	return (
		<div className="card">
			<h1 className="display-4">Expense Tracker</h1>
			<h4>Add an expense item:</h4>
			<FormInputs handleSubmitButton={handleSubmitButton} />
		</div>
	);
}

export default ExpenseForm;
