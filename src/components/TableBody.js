import React from 'react';
import ExpenseItem from './ExpenseItem';

function TableBody({ expenseData, handleDeleteButton }) {
	const expenseItemComponents = expenseData.map((expense) => (
		<ExpenseItem expense={expense} key={expense.id} handleDeleteButton={handleDeleteButton} />
	));

	return <tbody>{expenseItemComponents}</tbody>;
}

export default TableBody;
