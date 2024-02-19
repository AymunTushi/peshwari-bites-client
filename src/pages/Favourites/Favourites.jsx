import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const Favorites = () => {
    const [favoriteRecipes, setFavoriteRecipes]=useState([])
    const handleRemoveFavorite = (recipeName) => {
        const updatedFavorites = favoriteRecipes.filter((recipe) => recipe.recipeName !== recipeName);
        setFavoriteRecipes(updatedFavorites);
    };

    return (
        <Container>
      <h1>My Favorite Recipes</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
           
          
            <th>Recipe Name</th>
            
          </tr>
        </thead>
        <tbody>
          {favoriteRecipes.map((recipe) => (
            <tr key={recipe.recipeName}>
              
              
              <td>{recipe.recipeName}</td>

              <td>
                <Button variant="danger" onClick={() => handleRemoveFavorite(recipe.recipeName)}>
                  Remove
                </Button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
        
    );
};


export default Favorites;