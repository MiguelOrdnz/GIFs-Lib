import React from "react";
import { HooksPlayground } from "./hooksPlayground/HooksPlayground";
import { GiphyPg } from './components/GiphyPg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { BreakingBadAPI } from "./breaking_bad_api/BreakingBadAPI";



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
          <li>
            <Link to="/BreakingBad">Breakign Bad API</Link>
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
        <Route path='/BreakingBad'>
          <BreakingBadAPI />
        </Route>
      </Switch>
    </Router>
  );
};
