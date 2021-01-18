import React from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class ExpenseTable extends React.Component {
	render() {
		return (
			<div className="card">
				<Table className="table-borderless">
					<TableHeader />
					<TableBody />
				</Table>
			</div>
		);
	}
}

export default ExpenseTable;
