import React from 'react';
import '../styles/Home.css';
import '../styles/ChooseContent.css';
import cancel from '../img/buttons_cancel.png';
import back from '../img/back.png';
import next from '../img/next-button.png';
import placeholder from '../img/placeholder_image.png';
import placeholderVideo from '../img/placeholder_video.png';
import placeholderPublication from '../img/placeholder_publication.png';


class ChooseContent extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar">
                    <div><span>Type</span>
                    <span>Tags</span>
                    <span>Content</span>
                    <span>Preview</span>
                    <span>Upload</span></div>

                    <img className="cancel" src={cancel} alt="cancel"/>

                    <img className="back" src={back} alt="back"/>
                    <img className="next" src={next} alt="next"/>
                </nav>

                <span className="title">Choose your content type</span>

                <section className="content-types">
                    <div id="images">
                        <img id="placeholder-img" src={placeholder} alt="image placeholder" />
                    </div>
                    <div id="videos">
                        <img id="placeholder-video" src={placeholderVideo} alt="image placeholder" />
                    </div>
                    <div id="publications">
                        <img id="placeholder-publications" src={placeholderPublication} alt="image placeholder" />
                    </div>
                </section>

            </div>
        )
    }
}

export default ChooseContent;