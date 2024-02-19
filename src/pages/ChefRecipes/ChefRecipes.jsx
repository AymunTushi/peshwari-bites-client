import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleChefRecipe from '../SIngleChefRecipe/SingleChefRecipe';
import Banner from '../Shared/Banner/Banner';




const ChefRecipes = () => {
   
    const chefRecipes=useLoaderData()
    // console.log(chefRecipes,'tushi',chefRecipes.recipe)
    // return
   
    return(
        <>
            <Banner></Banner>
            <h3 className='text-center mt-4' style={{ fontFamily: 'serif',fontSize:'36px' }}>Recipes</h3>
            <Row sm={2} md={3} className="gx-4">
          {
              chefRecipes.recipe.map(chefRecipe=><SingleChefRecipe key={chefRecipe.id}
                chefRecipe={chefRecipe}></SingleChefRecipe>
                )

          }
            </Row>
            
       
        </>
    );

};

export default ChefRecipes;