import React, { useState } from "react";

function RecipeCreate({ updateRecipes }) {

  const initialData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  let [ formData, setFormData ] = useState({...initialData})

  let onChange = ({target}) => {
    // setFormData((oldData) => ({
    //   ...oldData,
    //   [target.name]: target.value
    // }))
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  let onSubmit = (event) => {
    event.preventDefault();
    updateRecipes(formData);
    setFormData(initialData);
  }

  return (
    <form name="create" onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" placeholder="name" type="text" onChange={onChange} required="true" value={formData.name} ></input></td>
            <td><input name="cuisine" placeholder="cuisine" type="text" onChange={onChange} required="true" value={formData.cuisine} ></input></td>
            <td><input name="photo" placeholder="URL" type="text" onChange={onChange} required="true" value={formData.photo} ></input></td>
            <td><textarea name="ingredients" placeholder="ingredients" rows="2" onChange={onChange} required="true" value={formData.ingredients} ></textarea></td>
            <td><textarea name="preparation" placeholder="preparation" rows="2" onChange={onChange} required="true" value={formData.preparation} ></textarea></td>
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
