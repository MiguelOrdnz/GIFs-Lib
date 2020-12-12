import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { HooksPlayground } from "./hooksPlayground/HooksPlayground";
import { GiphyPg } from './components/GiphyPg'
import { BreakingBadAPI } from "./breaking_bad_api/BreakingBadAPI";
import { Padre } from './hooksPlayground/07-tarea-memo/Padre'


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
          <li>
            <Link to="/tareaMemo">Tarea Memo</Link>
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
        <Route path='/tareaMemo'>
          <Padre />
        </Route>
      </Switch>
    </Router>
  );
};
