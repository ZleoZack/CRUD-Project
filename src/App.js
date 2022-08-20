import React, { useState } from 'react';
import './App.css';
import RecipeCreate from './RecipeCreate';
import RecipeList from './RecipeList';
import RecipeData from './RecipeData';

function App() {
  // Recipes are being assigned to useState here so we can utilize the information being stored in the DOM and manipulate it
  const [recipes, setRecipes] = useState(RecipeData);
  //Here our delete button uses State and a basic filter array method targeting the index in which we would like to delete.
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );
  const createRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [newRecipe, ...currentRecipes]);
  //Create Recipe function takes a new recipe as a param then utilizes the state imported from React with the REST operator to take all of the stored values in the DOM and create the empty form state with NewRecipe being added in at the top of the list.

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  //Standard use of REACT Routing through differing components using parameters to share state in a sideways fashion.
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
