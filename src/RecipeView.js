import React from 'react';
//RecipeView function ; here is a nice return statement we declare our name cuisine photo and ingredients elements and set them equal to recipe; we are destructuring recipe to get all of the values or properties of recipe at once.
function RecipeView({ recipe, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img src={photo} />
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
