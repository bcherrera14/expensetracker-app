import React from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';

function ExpenseTable({ expenseData, handleDeleteButton }) {
	return (
		<div className="card">
			<Table className="table-borderless">
				<thead>
					<tr>
						<th>Date</th>
						<th>Description</th>
						<th>Merchant Name</th>
						<th>Amount</th>
						<th className="delete">Delete</th>
					</tr>
				</thead>
				<TableBody expenseData={expenseData} handleDeleteButton={handleDeleteButton} />
			</Table>
		</div>
	);
}

export default ExpenseTable;
