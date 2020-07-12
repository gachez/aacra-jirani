import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import back from '../img/buttons_back.png';
import '../styles/ImagesContent.css';
import image from '../img/content_img.png';
import post from '../img/post.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

const images = [
];

class ImagesContent extends React.Component{
    state={
        images: [],
        isLoaded: false,
        pageMedia: [],
        pageMediaImages: [],
        zoomim: null

    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/aacra/wp-json/wp/v2/images/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                images: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))

        axios.get(`https://tengezastudios.co.ke/aacra/wp-json/wp/v2/media`)
        .then(res =>{
            this.setState({
                pageMedia: res.data
            })
        })
        .catch(err => console.log(err))
    }

      callFunc = (func) =>{
          func()
      }

    render() {
        if(this.state.isLoaded){

            return(
                <div className="page-content">
                    <Navbar />
                    <br />
                    <br />
                    <Link style={{position: 'absolute',left: '50px'}} to={"/"}><img src={back} alt="back" /></Link>
                    <span className="content-title" dangerouslySetInnerHTML={{ __html: this.state.images.title.rendered}}></span>
                    <br />
                    <br />
                    <p className="content-body" dangerouslySetInnerHTML={{ __html: this.state.images.content.rendered}} >
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                   
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                   
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                   
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br /> 
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
                                        <h2 key={img} className="comment-title" >Jane Doe</h2>
                                        <p className="comments">This is awesome!</p>
                                        <small className="comments">12th June 2020</small>
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

export default ImagesContent;