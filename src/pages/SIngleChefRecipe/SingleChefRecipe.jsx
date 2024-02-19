import React, { useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SingleChefRecipe = ({chefRecipe}) => {
    const {recipeName,ingredients,cookingMethod}=chefRecipe
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteBtn=()=>{
      setIsFavorite(true)
      toast(`${recipeName}'s recipe is now your favorite!`);
    }
    return (
      <>

        {/* Card group */}
        <div className="mx-auto" style={{ width: "max-content" }}>
       
        <Container className='py-3 mx-auto px-4'>
           
            <Col sm={4}>
            <Card style={{ width: '18rem' }} className=' px-2 py-2' >
      <Card.Body>
        <Card.Title style={{ fontFamily:'serif',fontWeight:'bold',color:'gray' }}>{recipeName}</Card.Title>
        <Card.Text style={{ fontFamily:'serif',color:'dimgray' }}>
          <b>Ingredients :</b> {ingredients}<br></br><br></br>
          <b>Cooking Method :</b> {cookingMethod}
        </Card.Text>
        <Button variant="primary" disabled={isFavorite} onClick={handleFavoriteBtn}>
                                {isFavorite ? 'Favourite' : 'Add to Favorites'}
                            </Button>
                            <ToastContainer/>
      </Card.Body>
    </Card>
    </Col>
    
        </Container>
        </div>
        </>
    );
};
SingleChefRecipe.propTypes = {
    chefRecipe: PropTypes.object.isRequired, // Assuming "news" is an object, adjust as per your data structure
  };
  

export default SingleChefRecipe;