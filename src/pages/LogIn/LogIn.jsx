import React, { useContext, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import SocialLogin from './SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {

  const{signIn}=useContext(AuthContext)
  const [error,setError]=useState(null)
  const navigate=useNavigate()
  const location = useLocation();
  console.log(location)
  const from=location.state?.from?.pathname || '/'

  const handleLogIn=event=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;

    signIn(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      navigate(from, {replace:true})

    })

    .catch(error=>{
      console.log(error)
      setError('Email or password is incorrect')
    })
  }
    return (
      <>
      <Container className=" d-flex justify-content-center align-items-center">
         
        
      <div className='col-md-6'>
            <Form onSubmit={handleLogIn}>
            
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" name="email" placeholder="Enter email" required />
  
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" name="password" placeholder="Password" required />
</Form.Group>

<Button variant="primary" type="submit">
  LogIn
</Button>
{error}

<SocialLogin></SocialLogin>
<Form.Text className='text-secondary'>
 Don't have an account? <Link to="/register">Register</Link>
</Form.Text>
</Form>
</div>
        
        </Container>
        </>
    );
};

export default LogIn;