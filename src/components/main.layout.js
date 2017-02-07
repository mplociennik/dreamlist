import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export class Main extends Component {
    render(){
        return(
            <div id="main-wrapper">
                <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Dreamlist</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/donation">
                            <NavItem eventKey={1}>Donation</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <NavItem eventKey={2}>About</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/login">
                            <NavItem eventKey={3}>Login</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}
