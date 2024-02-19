import React from 'react';
import { Button, Card, Col, Container} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ChefCard = ({recipe}) => {
    const {chefName, yearsOfExperience, numOfRecipes, likes, chefPicture}=recipe

    return (
      <>
      
      <div className="mx-auto" style={{ width: "max-content" }}>
       
        <Container className='py-3 mx-auto px-4'>
           
            <Col sm={4}>
            <Card style={{ width: '18rem' }} className=' px-2 py-2' >
      <LazyLoadImage variant="top" src={chefPicture} alt='' height={200} width={270}/>
      <Card.Body>
        <Card.Title>Name: {chefName}</Card.Title>
        <Card.Text>
          <p>Experience: {yearsOfExperience}</p>
          <p>Recipes: {numOfRecipes}</p>
          <p>Likes: {likes}</p>
        </Card.Text>
  
    <Link to={`/chef-recipe/${recipe.id}`}>
      
        <Button variant="primary">View Recipe</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    
        </Container>
        </div>
        </>
    );
};

ChefCard.propTypes = {
    recipe: PropTypes.object.isRequired, // Assuming "news" is an object, adjust as per your data structure
  };

export default ChefCard;