import React from 'react';
import '../styles/Home.css';
import '../styles/ChooseContent.css';
import cancel from '../img/buttons_cancel.png';
import back from '../img/back.png';
import next from '../img/next-button.png';
import placeholder from '../img/placeholder_image.png';
import placeholderVideo from '../img/placeholder_video.png';
import placeholderPublication from '../img/placeholder_publication.png';
import {Container, Col} from 'react-bootstrap';

const images = [
    'African games',
    'Animation',
    'Architecture', 
    'Dance',
    'Decorative arts',
    'installations',
    'painting',
    'pottery'
]

class ChooseTags extends React.Component{
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

                <span className="title">Choose tags</span>

                <span className="content-types-category">Category</span>
                <span className="content-types-year">Year created</span>
                <section className="tags-container">
                    {

                        images.map(img => {
                            return(
                            <div className="tags" >{img}</div>    
                            )
                        })
                    }
                </section>

                <div className="year-created-box">Year created</div>

        
            </div>
        )
    }
}

export default ChooseTags;