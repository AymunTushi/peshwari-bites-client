import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log('user in private route', user)
    if(loading){
        return <Spinner animation="border" variant="primary"/>
    }

    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children
};

PrivateRoute.propTypes={
    children: PropTypes.object.isRequired,
};

export default PrivateRoute;