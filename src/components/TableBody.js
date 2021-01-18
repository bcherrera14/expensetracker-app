import React from 'react';
import ExpenseItem from './ExpenseItem';
import expenseData from './expenseData';

class TableBody extends React.Component {
	render() {
		const expenseItemComponents = expenseData.map((expense) => <ExpenseItem expense={expense} key={expense.id} />);
		return <tbody>{expenseItemComponents}</tbody>;
	}
}

export default TableBody;
