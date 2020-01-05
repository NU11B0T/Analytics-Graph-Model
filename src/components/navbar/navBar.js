import React, { Component } from 'react';
import { PageHeader } from 'antd';
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl  from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

export default class NavBar extends Component {
    render() {
        return (
            <div style={{ marginBottom: '20px'}}>
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Analytics</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Dashboard</Nav.Link>
                <Nav.Link href="#pricing">Report</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            </div>
        )
    }
}
