import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { HooksPlayground } from "./components/hooksPlayground/HooksPlayground";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export const GiphyPlayground = () => {
  const [categories, setCategories] = useState([])
  
  return (
    <Router>
      <div>
        <h1>Giphy Playground</h1>
        <Link to="/hooksPlayground">hooksPlayground</Link>
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
      <Switch>
        <Route path="/hooksPlayground">
          <HooksPlayground />
        </Route>
      </Switch>
    </Router>
  );
};
