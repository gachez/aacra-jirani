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
import VideoUploadTag from './pages/VideoUploadTag';
import AddVideosContent from './pages/AddVideosContent';
import VideoContentUpload from './pages/VideoContentUpload';
import VideoPreview from './pages/VideoPreview';
import PublicationUploadTag from './pages/PublicationsUploadTag';
import AddPublicationContent from './pages/AddPublicationContent';
import PublicationPreview from './pages/PublicationPreview';
import PublicationContentUplaod from './pages/PublicationContentUpload';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import UploadPin from './pages/UploadPin';


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
                    <Route exact path={"/video-upload-tag"} component={VideoUploadTag}></Route>
                    <Route exact path={"/add-videos-content"} component={AddVideosContent}></Route>
                    <Route exact path={"/videos-content-upload"} component={VideoContentUpload}></Route>
                    <Route exact path={"/videos-preview"} component={VideoPreview}></Route>
                    <Route exact path={"/publication-upload-tag"} component={PublicationUploadTag}></Route>
                    <Route exact path={"/add-publication-content"} component={AddPublicationContent}></Route>
                    <Route exact path={"/publication-preview"} component={PublicationPreview}></Route>
                    <Route exact path={"/publication-upload-content"} component={PublicationContentUplaod}></Route>
                    <Route exact path={"/donate"} component={Donate}></Route>
                    <Route exact path={"/contact"} component={Contact}></Route>
                    <Route exact path={"/upload"} component={UploadPin}></Route>

                </Switch>
            </BrowserRouter>
        )
}

export default App;
