import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiphyPlayground = () => {
  const [categories, setCategories] = useState([])
  
  return (
    <div>
      <h1>GIFs Library</h1>
      <AddCategory setCategories = { setCategories }/>
      <div>
        {
          categories.map(( category ) => (
              <GifGrid 
                key={ category }
                category={ category }/>
            )
          )
        }
      </div>
    </div>
  );
};
