
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';


const SocialLogin = () => {
   const {googleSignIn,gitHubSignIn}=useContext(AuthContext)

   const handleGoogleSignIn=async()=>{
    try{
        await googleSignIn()
    } catch(error){
        console.log(error)
    }
   };
   const handleGitHubSignIn=async()=>{
    try{
        await gitHubSignIn()
    } catch(error){
        console.log(error)
    }
   };
    
    return (
        <div className='mx-auto'>
             <Button onClick={handleGoogleSignIn}  variant="outline-secondary" className='mt-2'> <FaGoogle /> Login with Google</Button><br></br>
             <Button onClick={handleGitHubSignIn}  variant="outline-secondary" className='mt-2'> <FaGithub /> Login with Github</Button><br></br>
            
        </div>
    );
};

export default SocialLogin;