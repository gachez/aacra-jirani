import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home';
import Videos from './pages/Videos';
import Publications from './pages/Publications';
import ImagesContent from './pages/ImagesContent';
import VideosContent from './pages/VideosContent';
import PublicationContent from './pages/PublicationContent';
import ChooseContent from './pages/ChooseContent';


const App = () =>{
                return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}></Route>
                    <Route exact path={"/videos"} component={Videos}></Route>
                    <Route exact path={"/publications"} component={Publications}></Route>
                    <Route exact path={"/images-content"} component={ImagesContent}></Route>
                    <Route exact path={"/videos-content"} component={VideosContent}></Route>
                    <Route exact path={"/publication-content"} component={PublicationContent}></Route>
                    <Route exact path={"/choose-content"} component={ChooseContent}></Route>

                </Switch>
            </BrowserRouter>
        )
}

export default App;
