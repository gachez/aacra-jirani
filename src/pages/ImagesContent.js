import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import back from '../img/buttons_back.png';
import '../styles/ImagesContent.css';
import image from '../img/content_img.png';
import post from '../img/post.png';

const images = [
    'sd',
    'ds',
    'sd'
];

class ImagesContent extends React.Component{
    render() {
        return(
            <div>
                <Navbar />
                <br />
                <br />
                <img src={back} alt="back" className="back"/>
                <span className="content-title">Art title goes here</span>
                <br />
                <br />
                <p className="content-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="images-container">
        
                    {
                        images.map( img => {
                            return(
                                <img src={image} alt="content-image"/>
                            )
                        })
                    }
                </div>
                <br />
                <br />
                <br />
                <br />
                <section className="comments-container">
                    <input placeholder="What are your thoughts on this work?" />
                    <br /><br />
                    <div></div>
                    <br />
                    <img src={post} alt="post comment"/>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <p className="comments">kodpkpodwk okdpwqdpwok jodpwjq</p>
                    <br />
                </section>
             
               <br /><br /><br />
               <Footer />
            </div>
        )
    }
}

export default ImagesContent;