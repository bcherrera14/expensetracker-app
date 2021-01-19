import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class FormInputs extends React.Component {
	constructor() {
		super();
		this.state = {
			description: '',
			merchantName: '',
			amount: '',
			date: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state);
	}

	render() {
		return (
			<Form id="myForm">
				<Form.Row>
					<Col>
						<Form.Label>Description:</Form.Label>
						<Form.Control
							name="description"
							placeholder="Ex: Shoes"
							autoComplete="off"
							onChange={this.handleChange}
						/>
					</Col>
					<Col>
						<Form.Label>Merchant Name:</Form.Label>
						<Form.Control
							name="merchantName"
							placeholder="Ex: Nordstrom"
							autoComplete="off"
							onChange={this.handleChange}
						/>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Form.Label>Date:</Form.Label>
						<Form.Control name="date" type="date" autoComplete="off" onChange={this.handleChange} />
					</Col>
					<Col>
						<Form.Label>Amount:</Form.Label>
						<div className="input-container">
							<Form.Control id="amount" name="amount" autoComplete="off" onChange={this.handleChange} />
							<span className="unit">$</span>
						</div>
					</Col>
				</Form.Row>
				<Button
					variant="primary"
					onClick={() => {
						this.props.handleSubmitButton(this.state);
						// console.log(this.props);
					}}
				>
					Submit
				</Button>
			</Form>
		);
	}
}

export default FormInputs;
