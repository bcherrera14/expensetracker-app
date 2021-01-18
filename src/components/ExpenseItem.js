import React from 'react';
import DeleteButton from './DeleteButton';

class ExpenseItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.expense.description}</td>
				<td>{this.props.expense.merchantName}</td>
				<td>{this.props.expense.date}</td>
				<td>{this.props.expense.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
				<td className="delete">
					<DeleteButton />
				</td>
			</tr>
		);
	}
}

export default ExpenseItem;
