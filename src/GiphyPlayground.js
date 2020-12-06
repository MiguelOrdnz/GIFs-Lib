import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiphyPlayground = () => {
  const [categories, setCategories] = useState(["Samurai X"])
  
  return (
    <div>
      <h1>Giphy Playground</h1>
      <AddCategory setCategories = { setCategories }/>
      <hr />
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
