import React from 'react';

class TableHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Merchant Name</th>
					<th>Amount</th>
					<th className="delete">Delete</th>
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
