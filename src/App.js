import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home';
import Videos from './pages/Videos';
import Publications from './pages/Publications';
import ImagesContent from './pages/ImagesContent';
import VideosContent from './pages/VideosContent';
import PublicationContent from './pages/PublicationContent';
import ChooseContent from './pages/ChooseContent';
import ChooseTags from './pages/ChooseTags';
import ImageUploadContent from './pages/ImageUploadContent';
import AddImageContent from './pages/AddImageContent';
import ImagePreview from './pages/ImagePreview';

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
                    <Route exact path={"/choose-tags"} component={ChooseTags}></Route>
                    <Route exact path={"/image-upload-content"} component={ImageUploadContent}></Route>
                    <Route exact path={"/add-image-content"} component={AddImageContent}></Route>
                    <Route exact path={"/image-preview"} component={ImagePreview}></Route>

                </Switch>
            </BrowserRouter>
        )
}

export default App;
