import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyPlayground = () => {
  const [categories, setCategories] = useState(["Samurai X", "Hinuyasha", "Digimon"])

  // const handleAddCategory = () => setCategories([...categories, 'anotherone'])
  
  return (
    <div>
      <h1>Giphy Playground</h1>
      <AddCategory setCategories = { setCategories }/>
      <hr />
      <ol>
        {categories.map(( category ) => (
          <li key={ category }> { category } </li>
        ))}
      </ol>
    </div>
  );
};
