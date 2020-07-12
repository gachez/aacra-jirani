import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import back from '../img/buttons_back.png';
import '../styles/ImagesContent.css';
import post from '../img/post.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const images = [
  
];

class VideosContent extends React.Component{
    state={
        videos: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/aacra/wp-json/wp/v2/videos/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                videos: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))


    } 
    render() {
        if(this.state.isLoaded){
            return(
                <div className="page-content">
                    <Navbar />
                    <br />
                    <br />
                    <Link to={"/videos"} style={{position: 'absolute', left: '50px'}}><img src={back} alt="back"/></Link>
                    <span className="content-title" dangerouslySetInnerHTML={{ __html: this.state.videos.title.rendered}}></span>
                    <br />
                    <br />
                    <p className="content-body" dangerouslySetInnerHTML={{ __html: this.state.videos.excerpt.rendered}}>
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
            
                   <iframe 
                     width="70%" 
                     height="550"
                     src={this.state.videos['acf'].url}
                     title="" 
                     className="videos-frame" ></iframe>
                    
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
        return (
            <div style={{display: 'flex', height: '100vh'}}>
     
             <Spinner animation="border" role="status" style={{margin: 'auto'}}>
                 <span className="sr-only">Loading...</span>
                 </Spinner>
            </div>);
    }
}

export default VideosContent;