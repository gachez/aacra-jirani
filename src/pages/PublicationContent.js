import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import back from '../img/buttons_back.png';
import '../styles/ImagesContent.css';
import post from '../img/post.png';

const images = [
    'sd',
    'ds',
    'sd'
];

class PublicationContent extends React.Component{
    render() {
        return(
            <div className="page-content">
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
                </p>
                <br />
                <small className="description-footer">Author, Publication, year, 330</small>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="images-container">
        
               <iframe 
                 width="420" 
                 height="315"
                 src=""
                 title="document viewer" 
                 className="videos-frame" ></iframe>
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
                    {
                        images.map( img => {
                            return(
                                <>
                                    <h2 key={img} className="comment-title" >kopop</h2>
                                    <p className="comments">kodpkpodwk okdpwqdpwok jodpwjq</p>
                                    <small style={{color: 'rgba(0,0,0,0.6)'}} className="comments">12th June 2020</small>
                                    <br />
                                </>
                            )
                        })
                    }
                </section>
             
               <br /><br /><br />
               <Footer />
            </div>
        )
    }
}

export default PublicationContent;