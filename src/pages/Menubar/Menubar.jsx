/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useContext } from 'react';
import {FaUserCircle } from 'react-icons/fa';

const Menubar = () => {
  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '26px', 
  };

  
  
  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then()
    .catch(error=>console.log(error))
  }
    return (
        <div>
              <Navbar bg="dark" expand="md" data-bs-theme="dark">
        <Container >
         <Navbar.Brand href="/index.html" style={brandStyle}>Peshwari Bites</Navbar.Brand>
         <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id='navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            {user ? (
              <FaUserCircle
                style={{ fontSize: '2rem', color: 'white' }}
                title={user.displayName ? user.displayName : 'User'}
              />
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
            {user && <Button onClick={handleLogOut} variant="dark">Logout</Button>}
          </Nav>
          </Navbar.Collapse>
            
        </Container>
      </Navbar>
        </div>
    );
};

export default Menubar;