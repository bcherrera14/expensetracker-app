import React from 'react';

function ExpenseItem({ expense, handleDeleteButton }) {
	const date = expense.date.split('-');
	return (
		<tr>
			<td>{date[1] + '/' + date[2] + '/' + date[0]}</td>
			<td>{expense.description}</td>
			<td>{expense.merchantName}</td>
			<td>
				{parseFloat(expense.amount).toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD'
				})}
			</td>
			<td className="delete">
				<i onClick={() => handleDeleteButton(expense.id)} className="fas fa-minus-circle" />
			</td>
		</tr>
	);
}

export default ExpenseItem;
