/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Redirect } from 'react-router-dom';

// MobX for state management
import {inject, observer} from 'mobx-react';

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  FormFeedback,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

// auth helper
import Auth from "../../helpers/Auth";

class Login extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validation: {
        error: {
          email: '',
          password: ''
        }
      },
      authenticated: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handle change
  handleChange(event) {
    //eslint-disable-next-line
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let error = this.state.validation.error;

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case 'email': 
        error.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid';
        break;
      case 'password': 
        error.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    
    this.setState({
      validation: {
        error: error
      },
      [name]: value
    });
  }
  // handle submit
  handleSubmit(event) {
    const validateForm = (error) => {
      let valid = true;
      Object.values(error).forEach(
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
    }

    var username = this.state.email;
    var password = this.state.password;
    var error = this.state.validation.error;

    if(validateForm(error)) {
      Auth.signIn(username,password);
    }
  }
  UNSAFE_componentWillMount() {
    Auth.checkAuthState();
  }
  componentDidUpdate() {
    // checks
  }
  render() {
    return (
      <>
        <Col lg="5" md="7">
          { // signed in successfully
            ( 
              this.props.store.state.get('auth').authenticated === true
            ) &&
            <Redirect 
            to={{
              pathname: '/admin/index'
            }} 
            />
          }
          { // error
            (
              this.props.store.state.get('auth').error === true
              && this.props.store.state.get('auth').trace.code !== undefined
            ) &&
            <Alert color="danger">
              {this.props.store.state.get('auth').trace.message}
            </Alert>
          }
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup 
                    className={
                      ( // has input, and error on validation
                        this.state.validation.error.email.length > 0 &&
                        this.state.email.length > 0
                      ) ? 
                      ('has-danger mb-3') : 
                      ( // has input, and successful on validation
                        this.state.validation.error.email.length === 0 &&
                        this.state.email.length > 0
                      ) ?
                      ('has-success mb-3') : 
                      // empty
                      "mb-3"
                    }
                  >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      placeholder="Email" 
                      type="email" 
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className={
                        (
                          this.state.validation.error.email.length > 0 &&
                          this.state.email.length > 0
                        ) ?
                        ('is-invalid') : ('is-valid')
                      }
                    />
                    {this.state.validation.error.email.length > 0 &&
                    <FormFeedback 
                      className="p-1"
                    >
                    {this.state.validation.error.email}
                    </FormFeedback>
                    }
                  </InputGroup>
                </FormGroup>
                <FormGroup 
                  className=
                  {
                    ( // has input, and error on validation
                      this.state.validation.error.password.length > 0 &&
                      this.state.password.length > 0
                    ) ? 
                    ('has-danger mb-3') : 
                    ( // has input, and successful on validation
                      this.state.validation.error.password.length === 0 &&
                      this.state.password.length > 0
                    ) ?
                    ('has-success mb-3') : 
                    // empty
                    "mb-3"
                  }
                >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      name="password"
                      placeholder="Password" 
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className={
                        this.state.validation.error.password.length  > 0 ? 
                        ('is-invalid') : ('is-valid')
                      }
                    />
                    {this.state.validation.error.password.length > 0 &&
                    <FormFeedback 
                      className="p-1"
                    >
                    {this.state.validation.error.password}
                    </FormFeedback>
                    }
                  </InputGroup>
                </FormGroup>
                <Row className="my-3">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    </Col>
                </Row>
                <div className="text-center">
                  <Button 
                    className="my-4" 
                    color="primary" 
                    type="button"
                    onClick={() => this.handleSubmit()}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default inject('store')(observer(Login));
