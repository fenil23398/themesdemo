import React, { Component } from 'react';
import { Container, Row, Col, Form, Button,SplitButton,Dropdown } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { addIncome } from "../../Redux/Actions/IncomeAdd";
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

 class FormIncome extends Component {
    constructor(props){
        super(props);
        this.state={
            startDate: new Date(),
            email:'',
            amount:'',
            revenueId : 0,
            revenueName : 'Select Revenue',
            touched: {
                startDate: false,
                email: false,
                amount: false
            }
        }
    }
    
    componentDidMount(){
        //this.props.addIncome({})
    }
    handleBlur = (field) => {
        console.log("handleBlur field", field, "event ");
        //Need to copy old Touched state first and dn update field
        this.setState({
            touched: {
                ...this.state.touched,
                [field]: true
            }
        })
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

      referralChange = (event) => {
        if(event == 1){
            this.setState({
                revenueId : event,
                revenueName : 'Direct'
            })
        }
        else if(event == 2){
            this.setState({
                revenueId : event,
                revenueName : 'Referral'
            })
        }
        else if(event == 3){
            this.setState({
                revenueId : event,
                revenueName : 'Social'
            })
        }
      }

      handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        //console.log("Inside HandleInputChnage name ",name,"Value ",value);
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        if(this.state.revenueId == 0)
        {
            this.setState({
                revenueId : -1
            })
        }
        else{
            let formValues = {};
            formValues["userId"] = 1;
            formValues["revenueId"] = this.state.revenueId;
            formValues["earningAmount"] = this.state.amount;
            formValues["timestamp"] = this.state.startDate;
            this.props.addIncome(formValues);
        }
        event.preventDefault();
    }

    validate = (email,amount) => {
        console.log("Inside Validate");
        const errors = {
            amount:'',
            email: ''
        }
        const touched = { ...this.state.touched }
       
        const reg = /^\d+$/;
        if (touched.amount && !reg.test(amount))
            errors.amount = 'Amount Should contain Numbers Only';
        console.log("Email Received");        
        if (touched.email && email.split('').filter(x => x === '@').length !== 1) 
            errors.email = 'Enter Valid Email';
        if (touched.email && email.split('').filter(x => x === '.').length !== 1) 
            errors.email = 'Enter Valid Email';
        console.log("Error Object ", errors)
        return errors;
    }
    render() {
       
        const errors = this.validate(this.state.email, this.state.amount);
        return (
           
            <Container>
                <Row>
                    <Col xs="2">
                        
                    </Col>
                    <Col xs="8">
                        <fieldset className="border p-2">
                            <legend className="w-auto">Enter Income</legend>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="3">
                                        Email
                                </Form.Label>
                                    <Col sm="9">
                                        <Form.Control 
                                            type="email"
                                            placeholder="Enter Email"
                                            id="email"
                                            name="email"
                                            required
                                            isValid={
                                                this.state.touched.email
                                                &&
                                                errors.email === ''}
                                            isInvalid={errors.email !== ''}
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            onBlur={() => this.handleBlur('email')}
                                         />
                                          <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                           </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="3">
                                        Amount
                                </Form.Label>
                                    <Col sm="9">
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Enter Amount" 
                                            name="amount"
                                            required
                                            placeholder="Enter Amount"
                                            isValid={
                                                this.state.touched.amount
                                                &&
                                                errors.amount === ''}
                                            isInvalid={errors.amount !== ''}
                                            value={this.state.amount}
                                            onChange={this.handleInputChange}
                                            onBlur={() => this.handleBlur('amount')}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="3">
                                        Date
                                </Form.Label>
                                    <Col sm="9">
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        style={{textAlign : 'left'}}
                                    />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="3">
                                        Revenue Type
                                </Form.Label>
                                    <Col sm="9">
                                        <SplitButton
                                            key={"right"}
                                            id={"dropdown-button-drop-right"}
                                            onSelect = {this.referralChange}
                                            drop={"right"}
                                            variant="Info"
                                            title={this.state.revenueName}
                                            style={{float:'left',backgroundColor : '#36b9cc'}}
                                            required 
                                        >
                                            <Dropdown.Item eventKey="1">Direct</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Referral</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Social</Dropdown.Item>
                                           
                                        </SplitButton>{' '}
                                        {this.state.revenueId == -1 &&
                                            alert("Select revenue")
                                        }
                                    </Col>
                                </Form.Group>
                                <Row>
                                    <Col sm="3">

                                    </Col>
                                    <Col sm="9">
                                    <Button 
                                        variant="primary"
                                        type="submit"
                                        style={{float:'left'}} 
                                    >
                                         Add Income
                                    </Button>
                                </Col>
                                </Row>
                            </Form>
                        </fieldset>
                    </Col>
                    <Col xs="2">
                       
                    </Col>
                </Row>
            </Container >
        )
    }
}

const mapDispatchToProps = {
    addIncome : addIncome
 }
export default connect(null,mapDispatchToProps)(FormIncome);