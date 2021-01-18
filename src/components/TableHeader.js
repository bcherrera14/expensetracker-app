import React from 'react';

class TableHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>Description</th>
					<th>Merchant Name</th>
					<th>Date</th>
					<th>Amount</th>
					<th className="delete">Delete</th>
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
