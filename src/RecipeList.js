import React from "react";
import RecipeView from './RecipeView';
function RecipeList({recipes, deleteRecipe}) {
  
 
  //the delete button is able to access our delete recipe function from another component because we have passed it in as a prop! Aswell as declare how we would like to see our Recipe view with the Key and recipe being set to props declared in other components, but they have to be passed into the main function as props in order for them to work.
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {recipes.map((recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))
            
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
