import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class FormInputs extends React.Component {
	constructor() {
		super();
		this.state = {
			id: '',
			description: '',
			merchantName: '',
			amount: '',
			date: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.clearFormData = this.clearFormData.bind(this);
	}

	clearFormData() {
		this.setState({
			id: '',
			description: '',
			merchantName: '',
			amount: '',
			date: ''
		});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleClick() {
		const newExpense = this.state;
		this.props.handleSubmitButton(newExpense, this.clearFormData);
		const formInputs = document.querySelectorAll('input');
		formInputs.forEach((input) => (input.value = ''));
	}

	render() {
		const isFormComplete =
			this.state.description && this.state.merchantName && this.state.amount && this.state.date;
		return (
			<Form id="myForm">
				<Form.Row>
					<Col>
						<Form.Label>Description:</Form.Label>
						<Form.Control
							name="description"
							placeholder="Ex: Coffee"
							autoComplete="off"
							onChange={this.handleChange}
						/>
					</Col>
					<Col>
						<Form.Label>Merchant Name:</Form.Label>
						<Form.Control
							name="merchantName"
							placeholder="Ex: Starbucks"
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
							<Form.Control
								id="amount"
								name="amount"
								type="number"
								autoComplete="off"
								onChange={this.handleChange}
							/>
							<span className="unit">$</span>
						</div>
					</Col>
				</Form.Row>
				<Button
					variant="primary"
					id="submitButton"
					disabled={isFormComplete ? false : true}
					onClick={() => {
						this.handleClick();
					}}
				>
					Submit
				</Button>
			</Form>
		);
	}
}

export default FormInputs;
