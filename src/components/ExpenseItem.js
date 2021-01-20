import React from 'react';

function ExpenseItem({ expense, handleDeleteButton }) {
	const newDate = expense.date.split('-');
	const date = {
		month: newDate[1],
		day: newDate[2],
		year: newDate[0]
	};
	return (
		<tr>
			<td>{date.month + '/' + date.day + '/' + date.year}</td>
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
