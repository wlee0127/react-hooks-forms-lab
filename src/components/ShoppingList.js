import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [itemName, setItemName]=useState("");
  const [itemCategory, setItemCategory]=useState("Produce");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedName, setSearchedName] = useState("");
  const [newItemData, setNewItemData] = useState({
    id: uuid(),
    name: "",
    category: "",
  });

  function handleItemName(event) {
    setItemName(event.target.value);
  }
  
  function handleItemCategory(event) {
    setItemCategory(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedName(event.target.value);
  }

  function onSubmitHandler(event) {
    //event.preventDefault();
    setNewItemData({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    })
    items.push(newItemData);
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchedName==="") {
      return true;
    } else if(selectedCategory === "All" && searchedName!=="") {
      return item.name===searchedName;
    } else {
      return item.category === selectedCategory;
    }

  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onSubmitHandler} onHandleItemName={handleItemName} onHandleItemCategory={handleItemCategory}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchedName} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
