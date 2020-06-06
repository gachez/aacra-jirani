import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home';
import Videos from './pages/Videos';
import Publications from './pages/Publications';

const App = () =>{
                return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}></Route>
                    <Route exact path={"/videos"} component={Videos}></Route>
                    <Route exact path={"/publications"} component={Publications}></Route>
                </Switch>
            </BrowserRouter>
        )
}

export default App;
