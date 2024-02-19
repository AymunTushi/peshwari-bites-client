import React, { useContext, useState } from 'react';
import { Button, Form, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Registration = () => {
  const {createUser}=useContext(AuthContext)
  const[error,setError]=useState(null)

  const handleRegister=event=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value;
    const photoURL=form.photoURL.value
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,photoURL,password,email)

    if (password.length < 6){
      setError('password should be atleast 6 characters')
      return;
    }

    if(!email || !password){
      setError('Email and password are required')
      return
    }

    if (password.length >= 6) {
      setError(null); // Clear the error message when the password length is valid
    }

    createUser(email,password)
    .then(result=>{
      const createUser=result.user;
      console.log(createUser)
    })
    .catch(error=>{
      console.log(error)
      setError('Registration Failed')
    })

    
  }
    return (
      <Container fluid className=" d-flex justify-content-center align-items-center mt-4">
      
        
          <div className='col-md-6'>
          
            <Form onSubmit={handleRegister}>
            
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Your Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="your photoUrl" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" />
      </Form.Group>
      {error && <div className="text-danger mb-3">{error}</div>}
      <Button variant="primary" type="submit" >
        Register
      </Button>

      <Form.Text className='text-secondary'>
 Already have an account? <Link to="/login">Login</Link>
</Form.Text>
      <Form.Text className='text-danger'>
       
      </Form.Text>
    </Form>
    </div>
        
    </Container>

    );
};

export default Registration;