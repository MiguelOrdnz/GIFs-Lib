import React from "react";
import { HooksPlayground } from "./components/hooksPlayground/HooksPlayground";
import { GiphyPg } from './components/GiphyPg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export const GiphyPlayground = () => {  
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/hooksPlayground">hooksPlayground</Link>
          </li>
          <li>
            <Link to="/GiphyPlayground">GiphyPlayground</Link>
          </li>            
        </ul>
      </div>
      <Switch>
        <Route path="/hooksPlayground">
          <HooksPlayground />
        </Route>
        <Route path="/GiphyPlayground">
          <GiphyPg />
        </Route>
      </Switch>
    </Router>
  );
};
