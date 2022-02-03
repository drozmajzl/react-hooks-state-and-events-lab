import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory]=useState("All")



  function handleFilter(event){
    setCategory((selectedCategory)=>selectedCategory=event.target.value)
  
  }
  
  const filteredItems = items.filter((item) => (
    item.category === selectedCategory))

  const reFilteredItems = filteredItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category}/>))

  const allItems = items.map((item) => (
      <Item key={item.id} name={item.name} category={item.category}/>))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
         {selectedCategory==="All" ? allItems : reFilteredItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
