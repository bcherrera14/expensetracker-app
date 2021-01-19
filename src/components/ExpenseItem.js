import React from 'react';

class ExpenseItem extends React.Component {
	handleClick() {
		console.log('DELETE');
	}
	render() {
		return (
			<tr>
				<td>{this.props.expense.description}</td>
				<td>{this.props.expense.merchantName}</td>
				<td>{this.props.expense.date}</td>
				<td>{this.props.expense.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
				<td className="delete">
					<i
						onClick={() => this.props.handleDeleteButton(this.props.expense.id)}
						className="fas fa-minus-circle"
					/>
				</td>
			</tr>
		);
	}
}

export default ExpenseItem;
