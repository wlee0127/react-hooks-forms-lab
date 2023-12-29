import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, onHandleItemName, onHandleItemCategory}) {

  const handleSubmit = (event)=>{
    event.preventDefault();
    onItemFormSubmit();
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onHandleItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onHandleItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
