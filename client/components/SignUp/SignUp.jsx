import React,{Component,PropTypes} from 'react';
import { Col, Input, Button } from "react-bootstrap";

export default class SignUp extends Component{
  render() {
      return (
        <div>
          <h1>Sign Up</h1>
          <Col md={4} mdOffset={4}>
            <form onSubmit={this.handleSubmit} className={this.state.error ? "has-error" : null}>
              <Input type="text" ref="username" placeholder="username" label="Username" />
              <Input type="password" ref="password" placeholder="password" label="Password" />
              <Input type="password" ref="repeatPassword" placeholder="password" label="Repeat Password" />
              <Button type="submit" bsStyle="success" className="pull-right">Sign Up</Button>
              {this.renderErrorBlock()}
            </form>
          </Col>
        </div>
      );
    }
}
