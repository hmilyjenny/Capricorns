import React,{ PropTypes,Component } from 'react';
import { Link } from 'react-router';
import {
  Navbar,Nav,NavItem,NavDropdown,MenuItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header(props,context){
  return(
    <div className="navbar-wrapper">
      <div className="container">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <strong>看产品</strong>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">关于</NavItem>
              <NavItem eventKey={2} href="#">服务</NavItem>
              <NavItem eventKey={3} href="#">联系</NavItem>
              <LinkContainer to={{ pathname: '/auth/signup' }}>
                <NavItem eventKey={4} href="#">注册</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
