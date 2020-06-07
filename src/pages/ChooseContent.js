import React from 'react';
import '../styles/Home.css';
import '../styles/ChooseContent.css';
import cancel from '../img/buttons_cancel.png';


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

                    <img src={cancel} alt="cancel"/>
                    
                </nav>

            </div>
        )
    }
}

export default ChooseContent;