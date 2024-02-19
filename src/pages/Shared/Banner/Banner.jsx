import React, { useEffect, useState } from 'react';
import './Banner.css';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Banner = () => {
    
    const [recipes,setRecipes]=useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/chef-recipe/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch(error => console.error("Error fetching recipes:", error));
            setRecipes({})
    }, [id]);
    

    return (
        <div className='banner'>
            <div className='row'>
            <div className='col-md-6 col-sm-12 bio pt-4'>
             <h3><b>Chef: {recipes?.chef?.chefName}</b></h3>
             <div className='d-flex align-items-center'>
            <p style={{ fontSize: '18px',color:'green' }}><FaArrowAltCircleRight/> </p> 
             <p style={{ fontSize: '18px' }} className='px-2'>Experience: <b>{recipes?.chef?.yearsOfExperience}</b></p>
             </div>
             
             <div className='d-flex align-items-center'>
            <p style={{ fontSize: '18px',color:'green' }} ><FaArrowAltCircleRight/> </p> 
            <p style={{ fontSize: '18px' }} className='px-2'>Total Recipe:<b> {recipes?.chef?.numOfRecipes}</b></p>
            </div>

            <div className='d-flex align-items-center'>
            <p style={{ fontSize: '18px',color:'green' }} ><FaArrowAltCircleRight/> </p>
            <p style={{ fontSize: '18px' }} className='px-2'>Likes: <b>{recipes?.chef?.likes}</b></p>
            </div>
            </div>
                <div className='col-md-6 col-sm-12 image'>
                <LazyLoadImage src={recipes?.chef?.chefPicture} alt=''/>
                 </div>
                 </div>
                      
            
        </div>
                
            
    
    );
};

export default Banner;