import React, { useState } from 'react';
import ChefCard from '../Shared/ChefCard/ChefCard';
import { Row } from 'react-bootstrap';


const Recipes = () => {
    const [recipeData,setRecipeData]=useState([])

    fetch("http://localhost:5000/recipes")
    .then((res)=>res.json())
    .then((data)=>setRecipeData(data))
    console.log(recipeData)
    return (
        <>
       
        <h2 className='text-center mt-4'>Our Chefs</h2>
        <Row sm={2} md={3} className="gx-4">
            {
                recipeData.map(recipe=><ChefCard key={recipe.id}
                    recipe={recipe}
                    ></ChefCard>
                    )
            }
            
            </Row>
            </>
        
    );
};

export default Recipes;