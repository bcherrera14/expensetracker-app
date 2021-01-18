import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class FormInputs extends React.Component {
	render() {
		return (
			<Form>
				<Form.Row>
					<Col>
						<Form.Label>Description:</Form.Label>
						<Form.Control placeholder="Ex: Shoes" />
					</Col>
					<Col>
						<Form.Label>Merchant Name:</Form.Label>
						<Form.Control placeholder="Ex: Nordstrom" />
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Form.Label>Date:</Form.Label>
						<Form.Control type="date" />
					</Col>
					<Col>
						<Form.Label>Amout:</Form.Label>
						<div className="input-container">
							<Form.Control id="amount" autocomplete="off" />
							<span class="unit">$</span>
						</div>
					</Col>
				</Form.Row>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default FormInputs;
