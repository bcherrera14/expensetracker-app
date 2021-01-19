import React from 'react';
import ExpenseItem from './ExpenseItem';

class TableBody extends React.Component {
	render() {
		const expenseItemComponents = this.props.expenseData.map((expense) => (
			<ExpenseItem expense={expense} key={expense.id} handleDeleteButton={this.props.handleDeleteButton} />
		));

		return <tbody>{expenseItemComponents}</tbody>;
	}
}

export default TableBody;
