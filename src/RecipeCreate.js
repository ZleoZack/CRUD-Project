import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  //by using State we can set the initial value of an element being entered into the DOM and by declaring it as a nempty string we allow for the value to be changed aswell as get nifty use out of the set property of useState for a nice function
 const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
 
  const handlePreparationChange = (event) => setPreparation(event.target.value);

   //here we use our event.target.values to target our field value changes
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Submitted:", name, cuisine, photo, ingredients, preparation);
    //call the create recipe function with these unique keys that will associate with the values entered into the form.
    createRecipe({ name, cuisine, photo, ingredients, preparation });
    
    setName('');
    setCuisine('');
    setPhoto('');
    setIngredients('');
    setPreparation('');
  };
  
  //set the values of the FORM back to empty strings after the submit button is pressed
  
  
   return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
                <input
                  required
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleNameChange}
                  value={name}
                />
            </td>
            <td>
                <input
                  required
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleCuisineChange}
                  value={cuisine}
                />
            </td>
            <td>
                <input
                  required
                  id="photo"
                  type="text"
                  name="photo"
                  placeholder="Image Url"
                  onChange={handlePhotoChange}
                  value={photo}
                />
            </td>
            <td>
                <textarea
                  required
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleIngredientsChange}
                  value={ingredients}
                />
            </td>
            <td>
                <textarea
                  required
                  id="preparation"
                  type="text"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handlePreparationChange}
                  value={preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
